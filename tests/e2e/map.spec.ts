import { test, expect, type Page } from "@playwright/test";

/** 图例文案 ↔ data-kind 取值，两处必须一一对应。 */
const KINDS = [
  ["城", "city"],
  ["山", "mountain"],
  ["岛", "island"],
  ["境界", "realm"],
  ["寺", "temple"],
  ["野", "wilderness"],
] as const;

const KIND_LABELS = KINDS.map(([label]) => label);

/** 进入某作品的故事地图视图，并等到地点节点真的画出来。 */
async function openMap(page: Page, work = "journey") {
  await page.goto(`/work/${work}`);
  await page.getByRole("tab", { name: /故事地图/ }).click();
  await expect(page.locator(".location-node").first()).toBeVisible();
}

/**
 * 把每个地点节点换算成画布坐标系下的位置。
 * 画布变换是 translate(500+pan.x 370+pan.y) scale(zoom) translate(-500 -370)，
 * 所以 view 坐标 v 落到屏上是 origin + zoom * (v - center)。
 * 断言的是「节点中心有没有被框进画布」，而不是节点自身的静态坐标。
 */
async function screenCoords(page: Page) {
  return page.locator(".world-svg").evaluate((svg) => {
    const inner = svg.querySelector("g[transform*='scale']");
    const matrix =
      /translate\(([-\d.]+)\s+([-\d.]+)\)\s*scale\(([-\d.]+)\)/.exec(
        inner?.getAttribute("transform") ?? "",
      );
    if (!matrix) return null;
    const [originX, originY, zoom] = [
      Number(matrix[1]),
      Number(matrix[2]),
      Number(matrix[3]),
    ];
    return Array.from(svg.querySelectorAll(".location-node")).map((node) => {
      const point = /translate\(([-\d.]+)\s+([-\d.]+)\)/.exec(
        node.getAttribute("transform") ?? "",
      );
      return {
        x: originX + zoom * (Number(point?.[1]) - 500),
        y: originY + zoom * (Number(point?.[2]) - 370),
      };
    });
  });
}

const glyphOf = async (page: Page, kind: string) =>
  (
    await page
      .locator(`.location-node[data-kind="${kind}"]`)
      .first()
      .locator(".node-glyph")
      .innerHTML()
  ).replace(/\s+/g, "");

test("map view draws without console errors and documents its legend", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await openMap(page);
  await expect(page.locator(".location-node")).toHaveCount(74);
  const legend = await page
    .locator(".map-legend > span")
    .evaluateAll((spans) =>
      spans.map((span) => span.textContent?.trim() ?? ""),
    );
  expect(legend).toHaveLength(7);
  expect(legend.slice(0, 6)).toEqual(KIND_LABELS);
  expect(legend[6]).toContain("关联事件数");
  expect(errors).toEqual([]);
});

test("every location kind gets its own glyph instead of one shared dot", async ({
  page,
}) => {
  await openMap(page);
  const glyphs = await Promise.all(KINDS.map(([, key]) => glyphOf(page, key)));
  for (const glyph of glyphs) expect(glyph.length).toBeGreaterThan(0);
  expect(new Set(glyphs).size).toBe(KINDS.length);
});

test("event counts are drawn inline with each label and match the story data", async ({
  page,
}) => {
  await openMap(page);
  const counts = page.locator(".map-count");
  const count = await counts.count();
  expect(count).toBeGreaterThan(40);
  const values = await counts.allTextContents();
  expect(values).toHaveLength(count);
  expect(values.every((value) => /^\d+$/.test(value.trim()))).toBe(true);
  // 西游记共 300 个带地点的事件，地点计数之和必须与之一致。
  expect(values.reduce((sum, value) => sum + Number(value), 0)).toBe(300);
  // 计数是标签文本的一部分，所以不应该再有独立方块压住邻居标签。
  expect(await page.locator(".map-label .map-count").count()).toBe(count);
  expect(await page.locator(".map-badge").count()).toBe(0);
});

test("hovering a location opens a card and click selection still works", async ({
  page,
  isMobile,
}) => {
  test.skip(isMobile, "悬浮交互只针对指针设备");
  await openMap(page);
  await expect(page.locator(".map-card")).toHaveCount(0);
  const node = page.locator('.location-node[data-kind="city"]').first();
  const name = (await node.getAttribute("aria-label"))!.replace(
    /^查看地点/,
    "",
  );
  await node.hover();
  const card = page.locator(".map-card");
  await expect(card).toBeVisible();
  await expect(card.locator("text").first()).toHaveText(name);
  await expect(card).toContainText("事件");
  await node.click();
  await expect(page.locator(".detail-content h2")).toHaveText(name);
});

test("region filter narrows the map and frames the remaining locations", async ({
  page,
}) => {
  await openMap(page);
  await page.getByLabel("筛选地图区域").selectOption("西域王国");
  await expect(page.locator(".location-node")).toHaveCount(9);
  await expect(page.locator(".visualization-top")).toContainText(
    "显示 9/74 地点",
  );
  // 先等自动取景把缩放落定，再读坐标，否则可能读到过渡中的中间态。
  await expect(page.locator(".canvas-controls > span")).toHaveText("140%");
  const coords = await screenCoords(page);
  expect(coords).not.toBeNull();
  expect(coords).toHaveLength(9);
  for (const point of coords!) {
    expect(point.x).toBeGreaterThanOrEqual(0);
    expect(point.x).toBeLessThanOrEqual(1000);
    expect(point.y).toBeGreaterThanOrEqual(0);
    expect(point.y).toBeLessThanOrEqual(740);
  }
});

test("going back to all regions restores the default view", async ({
  page,
}) => {
  await openMap(page);
  const viewport = () =>
    page
      .locator(".world-svg")
      .evaluate((svg) =>
        svg.querySelector("g[transform*='scale']")?.getAttribute("transform"),
      );
  await expect(page.locator(".canvas-controls > span")).toHaveText("100%");
  expect(await viewport()).toBe(
    "translate(500 370) scale(1) translate(-500 -370)",
  );
  await page.getByRole("button", { name: "放大视图" }).click();
  await expect(page.locator(".canvas-controls > span")).toHaveText("110%");
  await page.getByLabel("筛选地图区域").selectOption("西域王国");
  await expect(page.locator(".canvas-controls > span")).toHaveText("140%");
  await expect(page.locator(".location-node")).toHaveCount(9);
  await page.getByLabel("筛选地图区域").selectOption("all");
  // 缩放与平移都要归零，否则会留下上一个区域的残留位移。
  await expect(page.locator(".canvas-controls > span")).toHaveText("100%");
  await expect(page.locator(".location-node")).toHaveCount(74);
  await expect
    .poll(viewport)
    .toBe("translate(500 370) scale(1) translate(-500 -370)");
});
