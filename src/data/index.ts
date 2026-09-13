import type { Work } from "../lib/types";
import { journey } from "./works/journey";
import { odyssey } from "./works/odyssey";
import { mortal } from "./works/mortal";
import { condor } from "./works/condor";

const catalog: Work[] = [
  {
    ...odyssey,
    mediaType: "epic",
    version: "Samuel Butler 公版英文译本 · 中文原创整理",
  },
  { ...journey, mediaType: "novel" },
  { ...mortal, mediaType: "novel" },
  { ...condor, mediaType: "novel" },
];
export const works: Work[] = catalog.map((work): Work => ({
  ...work,
  chapters: work.chapters.map((unit) => ({
    ...unit,
    unitType:
      work.id === "odyssey"
        ? "book"
        : work.id === "mortal"
          ? "editorialSegment"
          : "chapter",
  })),
}));
export const getWork = (id: string) => works.find((work) => work.id === id);
