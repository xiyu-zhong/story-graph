import { Library } from "@/components/Library";
import { works } from "@/data";

export default function Home() {
  const previews = works.map(
    ({
      chapters,
      characters,
      locations,
      relationships,
      sources,
      ...metadata
    }) => ({
      ...metadata,
      chapters: chapters.map(({ id, order }) => ({ id, order })),
      characterCount: characters.length,
      locationCount: locations.length,
    }),
  );
  return <Library works={previews} />;
}
