import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StoryExplorer } from "@/components/StoryExplorer";
import { getWork, works } from "@/data";

export function generateStaticParams() {
  return works.map((work) => ({ id: work.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const work = getWork(id);
  return {
    title: work ? `${work.title} · 故事世界` : "未找到故事",
    description: work?.description,
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = getWork(id);
  if (!work) notFound();
  return <StoryExplorer work={work} />;
}
