import type { Work, Chapter } from "./types";

export const storageKey = (id: string, type: "read" | "saved") =>
  `story-atlas:${id}:${type}`;

export function getChapter(work: Work, id: string | null | undefined): Chapter {
  return work.chapters.find((chapter) => chapter.id === id) ?? work.chapters[0];
}

export function getGraphPositions(
  work: Work,
): Record<string, { x: number; y: number }> {
  const degree = new Map<string, number>();
  work.relationships.forEach((edge) => {
    degree.set(edge.source, (degree.get(edge.source) ?? 0) + 1);
    degree.set(edge.target, (degree.get(edge.target) ?? 0) + 1);
  });
  const sorted = [...work.characters].sort(
    (a, b) => (degree.get(b.id) ?? 0) - (degree.get(a.id) ?? 0),
  );
  const positions: Record<string, { x: number; y: number }> = {};
  sorted.forEach((character, index) => {
    if (index === 0) {
      positions[character.id] = { x: 500, y: 365 };
      return;
    }
    const dense = sorted.length > 85;
    const large = sorted.length > 42;
    const starts = dense ? [1, 9, 27, 57] : large ? [1, 9, 27] : [1, 11];
    const ring = Math.max(
      0,
      starts.findLastIndex((start) => index >= start),
    );
    const capacities = dense
      ? [8, 18, 30, sorted.length - 57]
      : large
        ? [8, 18, sorted.length - 27]
        : [10, sorted.length - 11];
    const radii = dense
      ? [
          [110, 92],
          [225, 170],
          [336, 247],
          [443, 325],
        ]
      : large
        ? [
            [165, 135],
            [302, 231],
            [431, 317],
          ]
        : [
            [206, 180],
            [397, 305],
          ];
    const count = Math.min(capacities[ring], sorted.length - starts[ring]);
    const angle =
      ((index - starts[ring]) / Math.max(1, count)) * Math.PI * 2 -
      Math.PI / 2 +
      ring * 0.17;
    positions[character.id] = {
      x: 500 + Math.cos(angle) * radii[ring][0],
      y: 365 + Math.sin(angle) * radii[ring][1],
    };
  });
  return positions;
}

export type SearchResult = {
  kind: "chapter" | "character" | "location";
  id: string;
  title: string;
  subtitle: string;
};
export function searchWork(work: Work, query: string): SearchResult[] {
  const value = query.trim().toLocaleLowerCase();
  if (!value) return [];
  const results: SearchResult[] = [];
  work.characters.forEach((character) => {
    if (
      [character.name, ...character.aliases, character.faction]
        .join(" ")
        .toLocaleLowerCase()
        .includes(value)
    )
      results.push({
        kind: "character",
        id: character.id,
        title: character.name,
        subtitle: `人物 · ${character.role}`,
      });
  });
  work.locations.forEach((location) => {
    if (
      `${location.name} ${location.region}`.toLocaleLowerCase().includes(value)
    )
      results.push({
        kind: "location",
        id: location.id,
        title: location.name,
        subtitle: `地点 · ${location.region}`,
      });
  });
  work.chapters.forEach((chapter) => {
    if (
      `${chapter.title} ${chapter.summary} ${chapter.paragraphs.join(" ")}`
        .toLocaleLowerCase()
        .includes(value)
    )
      results.push({
        kind: "chapter",
        id: chapter.id,
        title: chapter.title,
        subtitle: `${String(chapter.order).padStart(2, "0")} · ${chapter.arc}`,
      });
  });
  return results.slice(0, 40);
}
