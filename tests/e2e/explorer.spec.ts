import { test, expect } from "@playwright/test";

test("library filters and opens each story", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: /每个故事，\s*都有一片宇宙。/ }),
  ).toBeVisible();
  await expect(page.locator(".work-card")).toHaveCount(4);
  await page.getByRole("button", { name: "神话史诗", exact: true }).click();
  await expect(page.locator(".work-card")).toHaveCount(1);
  await expect(page.locator(".work-card h3")).toHaveText("奥德赛");
  await page.getByRole("button", { name: "武侠江湖", exact: true }).click();
  await expect(page.locator(".work-card")).toHaveCount(1);
  await expect(page.locator(".work-card h3")).toHaveText("射雕英雄传");
  await page.getByRole("link", { name: "探索射雕英雄传", exact: true }).click();
  await expect(page).toHaveURL(/\/work\/condor$/);
  await expect(page.locator(".explorer-header h1")).toHaveText("射雕英雄传");
  await page.goto("/");
  await page.getByRole("textbox", { name: "搜索作品名称或作者" }).fill("金庸");
  await expect(page.locator(".work-card")).toHaveCount(1);
  await expect(page.locator(".work-card h3")).toHaveText("射雕英雄传");
  await page.getByRole("textbox", { name: "搜索作品名称或作者" }).fill("");
  await page.getByRole("button", { name: /全部作品/ }).click();
  await page
    .getByRole("textbox", { name: "搜索作品名称或作者" })
    .fill("西游记");
  await expect(page.locator(".work-card")).toHaveCount(1);
  await page
    .getByRole("textbox", { name: "搜索作品名称或作者" })
    .fill("不存在的作品");
  await expect(page.getByText("还没有找到这个故事")).toBeVisible();
  await page.getByRole("button", { name: "显示全部作品" }).click();
  await expect(page.locator(".work-card")).toHaveCount(4);
});

for (const [id, title, count] of [
  ["odyssey", "奥德赛", 24],
  ["journey", "西游记", 100],
  ["mortal", "凡人修仙传", 40],
  ["condor", "射雕英雄传", 40],
] as const) {
  test(`${title}: flow, reader, relationships, map and sources`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(`/work/${id}`);
    await expect(page.locator(".explorer-header h1")).toHaveText(title);
    if (count) await expect(page.locator(".flow-node")).toHaveCount(count);
    else
      expect(await page.locator(".flow-node").count()).toBeGreaterThanOrEqual(
        24,
      );
    await page.getByRole("button", { name: "下一章", exact: true }).click();
    await expect(
      page.getByRole("slider", { name: "选择当前探索章节" }),
    ).toHaveValue("2");
    await page.getByRole("button", { name: /沉浸阅读/ }).click();
    await expect(page.locator(".reader-dialog")).toBeVisible();
    expect(
      await page.locator(".reader-article .story-prose p").count(),
    ).toBeGreaterThanOrEqual(2);
    await page.getByRole("button", { name: "关闭沉浸阅读" }).click();
    await page.getByRole("tab", { name: /人物关系/ }).click();
    await expect(page.locator(".character-node").first()).toBeVisible();
    const node = page.locator(".character-node").first();
    await node.focus();
    await page.keyboard.press("Enter");
    await expect(
      page.locator(".detail-content .entity-portrait"),
    ).toBeVisible();
    await page.getByRole("tab", { name: /故事地图/ }).click();
    await expect(page.locator(".location-node").first()).toBeVisible();
    await page.locator(".location-node").first().click();
    await expect(
      page.locator(".detail-content .location-emblem"),
    ).toBeVisible();
    await page.getByRole("button", { name: "查看探索说明" }).click();
    await expect(page.locator(".source-dialog")).toBeVisible();
    await expect(
      page.locator(".source-dialog .source-links a").first(),
    ).toBeVisible();
    await page.getByRole("button", { name: "关闭内容说明" }).click();
    await page.getByRole("tab", { name: /故事流程/ }).click();
    await expect(page.locator('.flow-node[aria-pressed="true"]')).toHaveCount(
      1,
    );
    expect(errors).toEqual([]);
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth + 1,
    );
    expect(overflow).toBe(false);
  });
}

test("bookmarks, reading position and deep links persist", async ({ page }) => {
  await page.goto("/work/odyssey");
  await page.getByRole("button", { name: "下一章", exact: true }).click();
  const selectedTitle = await page.locator(".detail-content h2").textContent();
  await page.getByRole("button", { name: "收藏本章", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "取消收藏本章", exact: true }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "记住当前阅读位置", exact: true })
    .first()
    .click();
  await page.reload();
  await expect(page.locator(".detail-content h2")).toHaveText(selectedTitle!);
  await expect(
    page.getByRole("button", { name: "取消收藏本章", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "分享当前章节" }).click();
  await expect(page.getByRole("status")).toBeVisible();
});

test("search navigates between entities and mobile directory works", async ({
  page,
  isMobile,
}) => {
  await page.goto("/work/journey");
  await page.locator(".explorer-search").click();
  await page.getByRole("textbox", { name: "搜索故事内容" }).fill("孙悟空");
  await expect(page.locator(".search-results button").first()).toBeVisible();
  await page.locator(".search-results button").first().click();
  await expect(page.getByRole("tab", { name: /人物关系/ })).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await expect(page.locator(".detail-content h2")).toHaveText("孙悟空");
  if (isMobile) {
    await page.getByRole("button", { name: "打开故事目录" }).click();
    await expect(page.locator(".story-sidebar")).toBeVisible();
    await page.locator(".arc-list button").last().click();
    await expect(page.locator(".story-sidebar")).not.toBeVisible();
    await expect(page.getByRole("tab", { name: /故事流程/ })).toHaveAttribute(
      "aria-selected",
      "true",
    );
  }
});

test("deep links restore view without changing saved reading progress", async ({
  page,
}) => {
  await page.goto("/work/odyssey");
  const readId = await page
    .locator(".flow-row")
    .nth(1)
    .getAttribute("data-chapter");
  const targetId = await page
    .locator(".flow-row")
    .nth(4)
    .getAttribute("data-chapter");
  await page.evaluate(
    (id) => localStorage.setItem("story-atlas:odyssey:read", id!),
    readId,
  );
  await page.goto(
    `/work/odyssey?chapter=${encodeURIComponent(targetId!)}&view=map`,
  );
  await expect(page.getByRole("tab", { name: /故事地图/ })).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await expect(
    page.getByRole("slider", { name: "选择当前探索章节" }),
  ).toHaveValue("5");
  expect(
    await page.evaluate(() => localStorage.getItem("story-atlas:odyssey:read")),
  ).toBe(readId);
});

test("selected character context stays linked across all three views", async ({
  page,
}) => {
  await page.goto("/work/odyssey");
  await page.locator(".explorer-search").click();
  await page.getByRole("textbox", { name: "搜索故事内容" }).fill("忒勒马科斯");
  await page.locator(".search-results button").first().click();
  await expect(page.locator(".detail-content h2")).toHaveText("忒勒马科斯");
  await page.getByRole("tab", { name: /故事地图/ }).click();
  expect(
    await page.locator(".location-node.context-active").count(),
  ).toBeGreaterThan(2);
  await page.getByRole("tab", { name: /故事流程/ }).click();
  await expect(page.locator(".flow-node")).toHaveCount(24);
  await page.locator(".context-toggle").click();
  const relatedCount = await page.locator(".flow-node").count();
  expect(relatedCount).toBeGreaterThan(0);
  expect(relatedCount).toBeLessThan(24);
  await page.locator(".flow-node").first().click();
  await expect(page.locator(".flow-node")).toHaveCount(24);
});

test("condor: final chapter, alias search and linked scenes", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/work/condor?chapter=condor-40&view=flow");
  await expect(page.getByRole("button", { name: "打开第40回：华山论剑", exact: true })).toBeInViewport();
  await expect(page.locator(".detail-content h2")).toHaveText("华山论剑");
  await expect(
    page.getByRole("slider", { name: "选择当前探索章节" }),
  ).toHaveValue("40");
  await expect(
    page.getByRole("button", { name: "下一章", exact: true }),
  ).toBeDisabled();
  await page.getByRole("button", { name: /沉浸阅读/ }).click();
  await expect(page.locator(".reader-article .story-prose")).toContainText(
    "郭靖",
  );
  await page.getByRole("button", { name: "关闭沉浸阅读" }).click();
  await page.locator(".explorer-search").click();
  await page.getByRole("textbox", { name: "搜索故事内容" }).fill("东邪");
  await page.locator(".search-results button").first().click();
  await expect(page.locator(".detail-content h2")).toHaveText("黄药师");
  await expect(page.getByRole("tab", { name: /人物关系/ })).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await page.getByRole("tab", { name: /故事地图/ }).click();
  await expect(
    page.getByRole("button", { name: "查看地点桃花岛", exact: true }),
  ).toHaveClass(/context-active/);
  await page.getByRole("tab", { name: /故事流程/ }).click();
  await page.locator(".context-toggle").click();
  const related = await page.locator(".flow-node").count();
  expect(related).toBeGreaterThan(0);
  expect(related).toBeLessThan(40);
  await page.locator(".flow-node").first().click();
  await expect(page.locator(".flow-node")).toHaveCount(40);
  await page.getByRole("button", { name: "查看探索说明" }).click();
  await expect(page.locator(".source-dialog")).toContainText("修订版");
  await expect(page.locator(".source-dialog")).toContainText("不是原著全文");
});

test("four covers load and catalog fits narrow, tablet and desktop screens", async ({
  page,
}) => {
  for (const width of [360, 820, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.locator(".work-card")).toHaveCount(4);
    await expect(
      page.getByRole("button", { name: "武侠江湖", exact: true }),
    ).toBeVisible();
    await expect
      .poll(() =>
        page
          .locator(".work-cover")
          .evaluateAll((images) =>
            images.every(
              (image) =>
                image instanceof HTMLImageElement &&
                image.complete &&
                image.naturalWidth > 0,
            ),
          ),
      )
      .toBe(true);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth + 1,
      ),
    ).toBe(false);
    const columns = await page
      .locator(".work-grid")
      .evaluate(
        (grid) => getComputedStyle(grid).gridTemplateColumns.split(" ").length,
      );
    expect(columns).toBe(width <= 700 ? 1 : width <= 1200 ? 2 : 4);
  }
});

test("unknown work has an honest not-found page", async ({ page }) => {
  await page.goto("/work/unknown-work");
  await expect(
    page.getByRole("heading", { name: "这个故事，还没有被发现。" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "返回作品宇宙" }).click();
  await expect(page.locator(".work-card")).toHaveCount(4);
});
