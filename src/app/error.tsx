"use client";

import Link from "next/link";
import { Orbit, RotateCcw } from "lucide-react";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="not-found">
      <Orbit size={48} strokeWidth={1} />
      <div className="eyebrow">RECONNECTING TO THE STORY</div>
      <h1>这片星图暂时没有展开。</h1>
      <p>页面加载遇到了问题。可以重试，或者返回作品宇宙。</p>
      <button className="primary-button" onClick={reset}>
        <RotateCcw size={16} /> 重新加载
      </button>
      <Link className="text-button" href="/">
        返回作品宇宙
      </Link>
    </main>
  );
}
