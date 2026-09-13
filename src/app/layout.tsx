import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "故事图谱 · Story Atlas", template: "%s · 故事图谱" },
  description:
    "沿着故事前行，在人物之间发现联系，在地图上重走旅程。探索《奥德赛》《西游记》《凡人修仙传》《射雕英雄传》的叙事宇宙。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
