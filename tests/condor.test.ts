import assert from "node:assert/strict";
import { test } from "node:test";
import { getWork } from "../src/data";
import { getSelectionContext } from "../src/lib/context";
import { searchWork } from "../src/lib/story";

const work = getWork("condor")!;

test("condor keeps the revised-edition forty-chapter directory", () => {
  const titles = [
    "风雪惊变",
    "江南七怪",
    "大漠风沙",
    "黑风双煞",
    "弯弓射雕",
    "崖顶疑阵",
    "比武招亲",
    "各显神通",
    "铁枪破犁",
    "冤家聚头",
    "长春服输",
    "亢龙有悔",
    "五湖废人",
    "桃花岛主",
    "神龙摆尾",
    "九阴真经",
    "双手互搏",
    "三道试题",
    "洪涛群鲨",
    "窜改经文",
    "千钧巨岩",
    "骑鲨遨游",
    "大闹禁宫",
    "密室疗伤",
    "荒村野店",
    "新盟旧约",
    "轩辕台前",
    "铁掌峰顶",
    "黑沼隐女",
    "一灯大师",
    "鸳鸯锦帕",
    "湍江险滩",
    "来日大难",
    "岛上巨变",
    "铁枪庙中",
    "大军西征",
    "从天而降",
    "锦囊密令",
    "是非善恶",
    "华山论剑",
  ];
  assert.deepEqual(
    work.chapters.map((chapter) => chapter.title),
    titles,
  );
  assert.deepEqual(
    work.chapters.map((chapter) => chapter.id),
    titles.map((_, index) => `condor-${String(index + 1).padStart(2, "0")}`),
  );
});

test("condor event references remain visible through chapter and map indexes", () => {
  assert.ok(work);
  for (const chapter of work.chapters) {
    for (const event of chapter.events) {
      for (const id of event.characterIds) {
        assert.ok(
          chapter.characterIds.includes(id),
          `${event.id}: character missing from chapter index`,
        );
      }
      if (event.locationId) {
        assert.ok(
          chapter.locationIds.includes(event.locationId),
          `${event.id}: location missing from chapter index`,
        );
        const context = getSelectionContext(work, chapter, {
          kind: "location",
          id: event.locationId,
        });
        assert.ok(context.chapterIds.includes(chapter.id));
      }
    }
  }
});

test("condor aliases resolve one person without merging distinct identities", () => {
  for (const [name, alias] of [
    ["黄药师", "东邪"],
    ["杨铁心", "穆易"],
    ["杨康", "完颜康"],
  ]) {
    const people = work.characters.filter(
      (person) =>
        person.name === name ||
        person.name === alias ||
        person.aliases.includes(alias),
    );
    assert.equal(people.length, 1, `${name}/${alias}: duplicated identity`);
    assert.equal(people[0].name, name);
    assert.ok(
      searchWork(work, alias).some(
        (result) => result.kind === "character" && result.id === people[0].id,
      ),
    );
  }
  const brothers = ["裘千仞", "裘千丈"].map((name) =>
    work.characters.find((person) => person.name === name),
  );
  assert.ok(brothers.every(Boolean));
  assert.notEqual(brothers[0]!.id, brothers[1]!.id);
  const ouyangs = ["欧阳锋", "欧阳克"].map((name) =>
    work.characters.find((person) => person.name === name),
  );
  assert.ok(ouyangs.every(Boolean));
  const family = work.relationships.find(
    (edge) =>
      edge.type === "family" &&
      [edge.source, edge.target].includes(ouyangs[0]!.id) &&
      [edge.source, edge.target].includes(ouyangs[1]!.id),
  );
  assert.ok(family);
  assert.match(`${family.label} ${family.description}`, /父子|生父/);
});
