import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { works, getWork } from "../src/data";
import { getChapter, getGraphPositions, searchWork } from "../src/lib/story";

for (const work of works) {
  test(`${work.title}: content coverage and references`, () => {
    assert.ok(work.chapters.length > 0);
    if (work.id === "journey") assert.equal(work.chapters.length, 100);
    if (work.id === "odyssey") assert.equal(work.chapters.length, 24);
    if (work.id === "mortal") assert.ok(work.chapters.length >= 24);
    if (work.id === "condor") {
      assert.equal(work.chapters.length, 40);
      assert.equal(work.coverage.originalUnitCount, 40);
      assert.equal(work.mediaType, "novel");
      assert.equal(work.unitLabel, "回");
      assert.equal(work.chapters[0].title, "风雪惊变");
      assert.equal(work.chapters[39].title, "华山论剑");
      assert.ok(
        work.chapters.every((chapter) => chapter.unitType === "chapter"),
      );
    }
    assert.equal(work.coverage.isFullText, false);
    const ids = (items: { id: string }[]) => {
      const values = new Set(items.map((item) => item.id));
      assert.equal(values.size, items.length, "duplicate identifiers");
      for (const value of values) assert.match(value, /^[a-zA-Z0-9_-]+$/);
      return values;
    };
    const chapters = ids(work.chapters);
    const characters = ids(work.characters);
    const locations = ids(work.locations);
    const sources = ids(work.sources);
    ids(work.relationships);
    const events = new Set<string>();
    work.chapters.forEach((chapter, index) => {
      assert.equal(chapter.order, index + 1);
      assert.ok(chapter.title.trim() && chapter.arc.trim());
      assert.ok(chapter.summary.trim().length > 15);
      assert.ok(
        chapter.paragraphs.length >= 2,
        `${chapter.id}: missing story paragraphs`,
      );
      assert.ok(
        chapter.paragraphs.join("").length > 100,
        `${chapter.id}: insufficient story content`,
      );
      assert.ok(chapter.events.length >= 2, `${chapter.id}: missing events`);
      assert.ok(chapter.sourceIds.length > 0, `${chapter.id}: missing sources`);
      chapter.characterIds.forEach((id) =>
        assert.ok(characters.has(id), `${chapter.id}: character ${id}`),
      );
      chapter.locationIds.forEach((id) =>
        assert.ok(locations.has(id), `${chapter.id}: location ${id}`),
      );
      chapter.sourceIds.forEach((id) =>
        assert.ok(sources.has(id), `${chapter.id}: source ${id}`),
      );
      chapter.events.forEach((event) => {
        assert.ok(!events.has(event.id), `duplicate event ${event.id}`);
        events.add(event.id);
        assert.ok(event.title && event.description);
        event.characterIds.forEach((id) =>
          assert.ok(characters.has(id), `${event.id}: character ${id}`),
        );
        if (event.locationId)
          assert.ok(
            locations.has(event.locationId),
            `${event.id}: location ${event.locationId}`,
          );
      });
    });
    work.characters.forEach((character) =>
      assert.ok(
        character.firstChapter >= 1 &&
          character.firstChapter <= work.chapters.length,
        character.id,
      ),
    );
    work.relationships.forEach((edge) => {
      assert.ok(characters.has(edge.source), edge.id);
      assert.ok(characters.has(edge.target), edge.id);
      assert.ok(
        edge.chapterIds.length > 0,
        `${edge.id}: missing chapter evidence`,
      );
      edge.chapterIds.forEach((id) =>
        assert.ok(chapters.has(id), `${edge.id}: chapter ${id}`),
      );
    });
    work.locations.forEach((location) => {
      assert.ok(
        Number.isFinite(location.x) && location.x >= 0 && location.x <= 100,
        location.id,
      );
      assert.ok(
        Number.isFinite(location.y) && location.y >= 0 && location.y <= 100,
        location.id,
      );
    });
    work.sources.forEach((source) =>
      assert.equal(new URL(source.url).protocol, "https:"),
    );
  });

  test(`${work.title}: search, safe lookup, deterministic layout`, () => {
    assert.equal(getChapter(work, "missing").id, work.chapters[0].id);
    assert.deepEqual(searchWork(work, "  "), []);
    const character = work.characters[0];
    assert.ok(
      searchWork(work, character.name).some(
        (result) => result.kind === "character" && result.id === character.id,
      ),
    );
    assert.ok(
      searchWork(work, work.locations[0].name).some(
        (result) => result.kind === "location",
      ),
    );
    const positions = getGraphPositions(work);
    assert.deepEqual(positions, getGraphPositions(work));
    work.characters.forEach((item) =>
      assert.ok(
        Number.isFinite(positions[item.id].x) &&
          Number.isFinite(positions[item.id].y),
      ),
    );
  });
}

test("every registered work has a documented local cover", () => {
  const manifest = JSON.parse(
    readFileSync(
      new URL("../public/art/manifest.json", import.meta.url),
      "utf8",
    ),
  ) as {
    assets: { workId: string; path: string; width: number; height: number }[];
  };
  assert.deepEqual(
    manifest.assets.map((asset) => asset.workId).sort(),
    works.map((work) => work.id).sort(),
  );
  for (const work of works) {
    const asset = manifest.assets.find((item) => item.workId === work.id)!;
    assert.equal(asset.path, work.cover);
    assert.equal(asset.width, 1200);
    assert.equal(asset.height, 1800);
    const svg = readFileSync(
      new URL(`../public${asset.path}`, import.meta.url),
      "utf8",
    );
    assert.match(svg, /viewBox="0 0 1200 1800"/);
    assert.doesNotMatch(svg, /<(?:script|text)\b|https?:\/\/(?!www\.w3\.org)/);
  }
});

test("unknown works are not silently substituted", () =>
  assert.equal(getWork("unknown"), undefined));
