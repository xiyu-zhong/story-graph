import Link from "next/link";
import { Orbit, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="not-found">
      <Orbit size={52} strokeWidth={0.8} />
      <div className="eyebrow">UNMAPPED TERRITORY / 404</div>
      <h1>这个故事，还没有被发现。</h1>
      <p>链接可能有误。回到作品宇宙，选择一段新的旅程。</p>
      <Link className="primary-button" href="/">
        <ArrowLeft size={16} /> 返回作品宇宙
      </Link>
    </main>
  );
}
