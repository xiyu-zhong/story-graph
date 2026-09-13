/**
 * 地图标签可读性度量：统计「计数上标压到别家标签」与「标签互压」的重叠对数。
 *
 * 背景：事件数最初做成独立方块角标，偏移在节点右上 (12,-12)，会落到邻居标签上
 * 把文字压糊。西游记 74 个点里有 22 处。改成标签内行内上标（<tspan class="map-count">）
 * 后降到 6 处。此脚本用于复现与回归这两组数字。
 *
 * 用法：先起开发服务器（npm run dev），再执行
 *   npm run check:map-labels
 * 可用 BASE_URL 覆盖地址。
 */
import { chromium } from "@playwright/test";

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:3000";
const works = ["condor", "odyssey", "mortal", "journey"];

const browser = await chromium.launch({
  executablePath:
    process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ??
    (process.platform === "darwin"
      ? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
      : undefined),
});
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });

let foreignTotal = 0;
let labelTotal = 0;

for (const work of works) {
  await page.goto(`${baseUrl}/work/${work}`);
  await page.getByRole("tab", { name: /故事地图/ }).click();
  await page.locator(".location-node").first().waitFor();
  await page.waitForTimeout(700);

  const report = await page.locator(".world-svg").evaluate((svg) => {
    const read = (selector) =>
      Array.from(svg.querySelectorAll(selector)).map((el) => {
        const box = el.getBoundingClientRect();
        return {
          x: box.x,
          y: box.y,
          w: box.width,
          h: box.height,
          text: (el.textContent || "").trim(),
          own: el.closest(".map-label"),
        };
      });
    const counts = read(".map-count, .map-badge");
    const labels = read(".map-label");
    const overlaps = (a, b) =>
      a.w > 0 &&
      b.w > 0 &&
      a.x < b.x + b.w &&
      b.x < a.x + a.w &&
      a.y < b.y + b.h &&
      b.y < a.y + a.h;

    // 只统计压到「别人家」标签的计数，压到自己标签的不算。
    let foreign = 0;
    const examples = [];
    for (const item of counts)
      for (const label of labels)
        if (label.own !== item.own && overlaps(item, label)) {
          foreign += 1;
          if (examples.length < 6) examples.push(`${item.text}→${label.text}`);
        }

    let labelPairs = 0;
    for (let i = 0; i < labels.length; i += 1)
      for (let j = i + 1; j < labels.length; j += 1)
        if (overlaps(labels[i], labels[j])) labelPairs += 1;

    return { labels: labels.length, foreign, labelPairs, examples };
  });

  foreignTotal += report.foreign;
  labelTotal += report.labelPairs;
  console.log(
    `${work}: 地点 ${report.labels} → 计数压到别家标签 ${report.foreign} 处；标签互压 ${report.labelPairs} 处`,
  );
  if (report.examples.length) console.log(`   例: ${report.examples.join(", ")}`);
}

console.log(
  `合计：计数压到别家标签 ${foreignTotal} 处；标签互压 ${labelTotal} 处`,
);
await browser.close();
