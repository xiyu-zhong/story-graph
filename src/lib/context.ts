import type { Chapter, Work } from "./types";

export type Selection = {
  kind: "chapter" | "character" | "location" | "relationship" | "event";
  id: string;
};
export interface SelectionContext {
  chapterIds: string[];
  characterIds: string[];
  locationIds: string[];
}
const unique = (items: string[]) => [...new Set(items)];

export function getSelectionContext(
  work: Work,
  chapter: Chapter,
  selection: Selection,
): SelectionContext {
  if (selection.kind === "character") {
    const chapters = work.chapters.filter((item) =>
      item.characterIds.includes(selection.id),
    );
    const edges = work.relationships.filter(
      (edge) => edge.source === selection.id || edge.target === selection.id,
    );
    return {
      chapterIds: chapters.map((item) => item.id),
      characterIds: unique([
        selection.id,
        ...edges.flatMap((edge) => [edge.source, edge.target]),
      ]),
      locationIds: unique(
        chapters.flatMap((item) =>
          item.events
            .filter((event) => event.characterIds.includes(selection.id))
            .flatMap((event) => (event.locationId ? [event.locationId] : [])),
        ),
      ),
    };
  }
  if (selection.kind === "location") {
    const chapters = work.chapters.filter((item) =>
      item.locationIds.includes(selection.id),
    );
    return {
      chapterIds: chapters.map((item) => item.id),
      characterIds: unique(
        chapters.flatMap((item) =>
          item.events
            .filter((event) => event.locationId === selection.id)
            .flatMap((event) => event.characterIds),
        ),
      ),
      locationIds: [selection.id],
    };
  }
  if (selection.kind === "relationship") {
    const edge = work.relationships.find((item) => item.id === selection.id);
    if (edge)
      return {
        chapterIds: [...edge.chapterIds],
        characterIds: [edge.source, edge.target],
        locationIds: unique(
          work.chapters
            .filter((item) => edge.chapterIds.includes(item.id))
            .flatMap((item) =>
              item.events
                .filter(
                  (event) =>
                    event.characterIds.includes(edge.source) &&
                    event.characterIds.includes(edge.target),
                )
                .flatMap((event) =>
                  event.locationId ? [event.locationId] : [],
                ),
            ),
        ),
      };
  }
  if (selection.kind === "event") {
    const event = chapter.events.find((item) => item.id === selection.id);
    if (event)
      return {
        chapterIds: [chapter.id],
        characterIds: [...event.characterIds],
        locationIds: event.locationId ? [event.locationId] : [],
      };
  }
  return {
    chapterIds: [chapter.id],
    characterIds: [...chapter.characterIds],
    locationIds: [...chapter.locationIds],
  };
}
