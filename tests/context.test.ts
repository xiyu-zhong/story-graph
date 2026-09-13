import { test } from "node:test";
import assert from "node:assert/strict";
import { getSelectionContext } from "../src/lib/context";
import type { Work, Chapter } from "../src/lib/types";

const chapter = (
  id: string,
  order: number,
  people: string[],
  places: string[],
  events: Chapter["events"],
): Chapter => ({
  id,
  order,
  title: id,
  arc: "test",
  summary: "test fixture",
  paragraphs: ["test"],
  characterIds: people,
  locationIds: places,
  events,
  sourceIds: [],
});
const work: Work = {
  id: "journey",
  title: "test",
  englishTitle: "test",
  subtitle: "",
  author: "",
  era: "",
  genre: [],
  description: "",
  logline: "",
  accent: "#fff",
  cover: "",
  version: "test",
  unitLabel: "章",
  coverage: { label: "test fixture", description: "", isFullText: false },
  mapLabel: "",
  mapNote: "",
  sources: [],
  characters: [],
  locations: [],
  chapters: [
    chapter(
      "a",
      1,
      ["one"],
      ["west"],
      [
        {
          id: "event-a",
          title: "",
          description: "",
          characterIds: ["one"],
          locationId: "west",
        },
      ],
    ),
    chapter(
      "b",
      2,
      ["two"],
      ["east"],
      [
        {
          id: "event-b",
          title: "",
          description: "",
          characterIds: ["two"],
          locationId: "east",
        },
      ],
    ),
    chapter(
      "c",
      3,
      ["one", "two"],
      ["east"],
      [
        {
          id: "event-c",
          title: "",
          description: "",
          characterIds: ["one"],
          locationId: "east",
        },
        { id: "event-d", title: "", description: "", characterIds: ["two"] },
      ],
    ),
  ],
  relationships: [
    {
      id: "relationship",
      source: "one",
      target: "two",
      type: "ally",
      label: "test",
      description: "",
      chapterIds: ["c"],
    },
  ],
};

test("a selected character highlights their chapters and evidenced places across views", () => {
  const context = getSelectionContext(work, work.chapters[1], {
    kind: "character",
    id: "one",
  });
  assert.deepEqual(context.chapterIds, ["a", "c"]);
  assert.deepEqual(context.characterIds, ["one", "two"]);
  assert.deepEqual(context.locationIds, ["west", "east"]);
});

test("a location highlights only participants evidenced at that place", () => {
  const context = getSelectionContext(work, work.chapters[1], {
    kind: "location",
    id: "west",
  });
  assert.deepEqual(context, {
    chapterIds: ["a"],
    characterIds: ["one"],
    locationIds: ["west"],
  });
});

test("co-occurrence in a chapter does not fabricate a shared event location", () => {
  const context = getSelectionContext(work, work.chapters[0], {
    kind: "relationship",
    id: "relationship",
  });
  assert.deepEqual(context.chapterIds, ["c"]);
  assert.deepEqual(context.characterIds, ["one", "two"]);
  assert.deepEqual(context.locationIds, []);
});

test("events without a known location do not inherit the chapter location", () => {
  const context = getSelectionContext(work, work.chapters[2], {
    kind: "event",
    id: "event-d",
  });
  assert.deepEqual(context.locationIds, []);
  assert.deepEqual(context.characterIds, ["two"]);
});

test("chapter context preserves references without mutating source arrays", () => {
  const context = getSelectionContext(work, work.chapters[0], {
    kind: "chapter",
    id: "a",
  });
  context.characterIds.push("new");
  assert.deepEqual(work.chapters[0].characterIds, ["one"]);
});
