export type WorkId = "journey" | "odyssey" | "mortal" | "condor";

export interface Source {
  id: string;
  label: string;
  url: string;
  note?: string;
}

export interface StoryEvent {
  id: string;
  title: string;
  description: string;
  characterIds: string[];
  locationId?: string;
}

export type MediaType = "novel" | "epic" | "film" | "series";

export type SourcePosition =
  | {
      kind: "text";
      versionId: string;
      unitId: string;
      startParagraph?: number;
      endParagraph?: number;
    }
  | {
      kind: "video";
      versionId: string;
      unitId: string;
      season?: number;
      episode?: number;
      startSeconds: number;
      endSeconds: number;
    };

export interface ContentUnit {
  id: string;
  unitType?: "chapter" | "book" | "episode" | "scene" | "editorialSegment";
  parentId?: string;
  sourcePositions?: SourcePosition[];
  order: number;
  title: string;
  arc: string;
  summary: string;
  paragraphs: string[];
  characterIds: string[];
  locationIds: string[];
  events: StoryEvent[];
  sourceIds: string[];
  originalRange?: string;
  editorialNote?: string;
}

export type Chapter = ContentUnit;

export interface Character {
  id: string;
  name: string;
  aliases: string[];
  role: string;
  faction: string;
  description: string;
  firstChapter: number;
  color?: string;
}

export interface Relationship {
  id: string;
  source: string;
  target: string;
  label: string;
  type: "family" | "ally" | "mentor" | "rival" | "faction";
  description: string;
  chapterIds: string[];
}

export interface StoryLocation {
  id: string;
  name: string;
  region: string;
  description: string;
  x: number;
  y: number;
  kind: "city" | "mountain" | "island" | "realm" | "temple" | "wilderness";
}

export interface Work {
  id: WorkId;
  mediaType?: MediaType;
  versionId?: string;
  title: string;
  englishTitle: string;
  subtitle: string;
  author: string;
  era: string;
  genre: string[];
  description: string;
  logline: string;
  accent: string;
  cover: string;
  version: string;
  unitLabel: string;
  coverage: {
    label: string;
    description: string;
    originalUnitCount?: number;
    isFullText: false;
  };
  mapLabel: string;
  mapNote: string;
  sources: Source[];
  chapters: Chapter[];
  characters: Character[];
  relationships: Relationship[];
  locations: StoryLocation[];
}

export type WorkPreview = Omit<
  Work,
  "chapters" | "characters" | "locations" | "relationships" | "sources"
> & {
  chapters: Pick<Chapter, "id" | "order">[];
  characterCount: number;
  locationCount: number;
};
