"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Orbit,
  Search,
  Network,
  Route,
  Map,
  X,
  Sparkles,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import type { WorkPreview } from "@/lib/types";
import { storageKey } from "@/lib/story";

const OrbitalScene = dynamic(() => import("./OrbitalScene"), { ssr: false });

export function Library({ works }: { works: WorkPreview[] }) {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [progress, setProgress] = useState<Record<string, string>>({});
  const about = useRef<HTMLDialogElement>(null);
  const search = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const next: Record<string, string> = {};
    try {
      works.forEach((work) => {
        const value = localStorage.getItem(storageKey(work.id, "read"));
        if (value) next[work.id] = value;
      });
    } catch {
      /* Storage may be disabled in private or restricted browsers. */
    }
    setProgress(next);
  }, [works]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        about.current?.close();
        document
          .getElementById("library")
          ?.scrollIntoView({ behavior: "smooth" });
        search.current?.focus({ preventScroll: true });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  const visible = works.filter(
    (work) =>
      (filter === "all" || filter === work.id) &&
      `${work.title} ${work.author} ${work.genre.join(" ")}`.includes(
        query.trim(),
      ),
  );
  const totalChapters = works.reduce(
    (sum, work) => sum + work.chapters.length,
    0,
  );
  const totalCharacters = works.reduce(
    (sum, work) => sum + work.characterCount,
    0,
  );

  return (
    <main className="library-page">
      <div className="site-noise" aria-hidden="true" />
      <header className="site-header shell">
        <Link href="/" className="brand" aria-label="故事图谱首页">
          <span className="brand-mark">
            <Orbit size={26} strokeWidth={1.3} />
          </span>
          <span>
            故事图谱<small>STORY ATLAS</small>
          </span>
        </Link>
        <nav className="main-nav" aria-label="主导航">
          <a href="#library" className="active">
            作品宇宙
          </a>
          <button onClick={() => about.current?.showModal()}>
            关于图谱 <ArrowUpRight size={13} />
          </button>
        </nav>
        <button
          className="header-search"
          aria-label="搜索作品"
          onClick={() => {
            document
              .getElementById("library")
              ?.scrollIntoView({ behavior: "smooth" });
            search.current?.focus({ preventScroll: true });
          }}
        >
          <Search size={18} />
          <span>寻找一个故事</span>
          <kbd>⌘ K</kbd>
        </button>
      </header>

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" /> THE UNIVERSE BETWEEN THE LINES
          </div>
          <h1>
            每个故事，
            <br />
            都有一片<span>宇宙。</span>
          </h1>
          <p>
            让叙事成为路径，让人物彼此连接。
            <br />
            穿过时间与地图，发现故事的另一种读法。
          </p>
          <a className="primary-button" href="#library">
            开启探索 <ArrowRight size={17} />
          </a>
          <div className="hero-coordinates">
            <span>01 / 故事</span>
            <i />
            <span>02 / 人物</span>
            <i />
            <span>03 / 世界</span>
          </div>
        </div>
        <div className="hero-universe">
          <OrbitalScene />
          <div className="universe-label label-top">
            <span className="tiny-cross">+</span> NARRATIVE SYSTEM <b>ONLINE</b>
          </div>
          <div className="universe-label label-bottom">
            <span>∞</span>
            <div>
              故事的边界
              <br />
              <small>从来不止于文字</small>
            </div>
          </div>
          <span className="orbital-coordinate">RA 23h 18m · DEC +61°</span>
        </div>
        <a href="#library" className="scroll-cue" aria-label="向下浏览作品">
          <ArrowDown size={15} />
          <span>向下，进入故事</span>
        </a>
      </section>

      <section className="catalog-section shell" id="library">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              CURATED WORLDS / 001 — {String(works.length).padStart(3, "0")}
            </div>
            <h2>
              选择你的下一段旅程<span>探索作品</span>
            </h2>
          </div>
          <div className="catalog-meta">
            <span className="status-dot" /> {works.length} 个故事世界已收录
          </div>
        </div>
        <div className="catalog-toolbar">
          <div className="filter-tabs" aria-label="作品分类">
            {[
              { id: "all", label: "全部作品" },
              { id: "odyssey", label: "神话史诗" },
              { id: "journey", label: "古典名著" },
              { id: "mortal", label: "修仙世界" },
              { id: "condor", label: "武侠江湖" },
            ].map((item) => (
              <button
                key={item.id}
                aria-pressed={filter === item.id}
                className={filter === item.id ? "selected" : ""}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
                {item.id === "all" && (
                  <span>{String(works.length).padStart(2, "0")}</span>
                )}
              </button>
            ))}
          </div>
          <label className="catalog-search">
            <Search size={15} />
            <input
              ref={search}
              aria-label="搜索作品名称或作者"
              placeholder="搜索作品、作者…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </label>
        </div>
        <div className="work-grid">
          {visible.map((work, index) => {
            const read = work.chapters.find(
              (chapter) => chapter.id === progress[work.id],
            );
            return (
              <article
                className={`work-card ${work.id}${work.title.length >= 5 ? " long-title" : ""}`}
                key={work.id}
                style={
                  {
                    "--work-accent": work.accent,
                    animationDelay: `${index * 90}ms`,
                  } as React.CSSProperties
                }
              >
                <Link
                  href={`/work/${work.id}`}
                  className="work-cover-link"
                  aria-label={`探索${work.title}`}
                >
                  <img
                    src={work.cover}
                    alt={`${work.title}主题原创矢量插画，非官方封面`}
                    width={1200}
                    height={1800}
                    className="work-cover"
                  />
                  <div className="work-cover-shade" />
                  <span className="work-number">
                    {String(works.indexOf(work) + 1).padStart(2, "0")} <i />{" "}
                    STORY WORLD
                  </span>
                  <span className="work-genre">{work.genre[0]}</span>
                  <div className="work-cover-title">
                    <small>{work.englishTitle}</small>
                    <h3>{work.title}</h3>
                    <p>{work.subtitle}</p>
                  </div>
                  <span className="cover-arrow">
                    <ArrowUpRight size={24} strokeWidth={1.2} />
                  </span>
                </Link>
                <div className="work-card-body">
                  <div className="work-author">
                    <span title={work.author}>{work.author}</span>
                    <span title={work.era}>{work.era}</span>
                  </div>
                  <p>{work.logline}</p>
                  <div className="work-stats">
                    <span>
                      <Route size={13} />
                      {work.chapters.length}{" "}
                      {work.unitLabel === "段" ? "主线段落" : work.unitLabel}
                    </span>
                    <span>
                      <Network size={13} />
                      {work.characterCount} 人物
                    </span>
                    <span>
                      <Map size={13} />
                      {work.locationCount} 地点
                    </span>
                  </div>
                  <div className="work-card-bottom">
                    <span>
                      {read
                        ? `上次读至 ${read.order} ${work.unitLabel}`
                        : work.unitLabel === "段"
                          ? "全书主线 · 非逐章"
                          : `${work.chapters.length}${work.unitLabel}情节整理`}
                    </span>
                    <Link href={`/work/${work.id}`}>
                      {read ? "继续旅程" : "全貌探索"}
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        {visible.length === 0 && (
          <div className="empty-state">
            <Search size={24} />
            <h3>还没有找到这个故事</h3>
            <p>试试作品名、作者，或切换到全部作品。</p>
            <button
              className="text-button"
              onClick={() => {
                setFilter("all");
                setQuery("");
              }}
            >
              显示全部作品 <ArrowRight size={14} />
            </button>
          </div>
        )}
        <p className="catalog-footnote">
          全部为原创情节整理，非原作全文。各作品的内容粒度、来源与覆盖范围可在图谱内查看。全貌探索包含剧情。
        </p>
      </section>

      <section className="approach-section shell">
        <div className="approach-intro">
          <div className="eyebrow">ONE STORY. THREE PERSPECTIVES.</div>
          <h2>
            不只是读过，
            <br />
            <span>更是走进过。</span>
          </h2>
          <p>在同一个故事里，切换你的观察角度。</p>
        </div>
        <div className="approach-grid">
          {[
            {
              icon: Route,
              n: "01",
              title: "沿着故事前行",
              text: "章节与事件构成叙事路径，展开每一个转折。",
            },
            {
              icon: Network,
              n: "02",
              title: "看见人物之间",
              text: "从一次相遇，到命运交织。每条关系都有故事。",
            },
            {
              icon: Map,
              n: "03",
              title: "重走故事的世界",
              text: "在地点间切换，发现旅程与事件的交汇。",
            },
          ].map(({ icon: Icon, n, title, text }) => (
            <div className="approach-card" key={n}>
              <span>{n}</span>
              <Icon size={24} strokeWidth={1} />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="atlas-stats shell">
        <div>
          <strong>{String(works.length).padStart(2, "0")}</strong>
          <span>故事世界</span>
        </div>
        <div>
          <strong>{totalChapters}</strong>
          <span>已整理叙事单元</span>
        </div>
        <div>
          <strong>{totalCharacters}</strong>
          <span>人物档案</span>
        </div>
        <div>
          <strong>∞</strong>
          <span>探索的可能</span>
        </div>
      </section>
      <footer className="site-footer shell">
        <Link href="/" className="footer-brand">
          <Orbit size={20} /> STORY ATLAS
        </Link>
        <p>故事有终章，探索没有。</p>
        <span>
          为好奇心而造 <Sparkles size={12} />
        </span>
      </footer>
      <dialog ref={about} className="info-dialog">
        <div className="dialog-heading">
          <span className="eyebrow">ABOUT STORY ATLAS</span>
          <button
            className="icon-button"
            aria-label="关闭关于图谱"
            onClick={() => about.current?.close()}
          >
            <X size={20} />
          </button>
        </div>
        <h2>
          同一个故事，
          <br />
          三个探索入口。
        </h2>
        <p>
          故事图谱用流程、关系与空间重新组织故事。你可以顺着章节读，也可以从一个人物、一段关系、一个地点开始。
        </p>
        <div className="about-items">
          <div>
            <Route />
            <b>流程图</b>
            <span>完整目录与已整理的情节、事件</span>
          </div>
          <div>
            <Network />
            <b>关系图谱</b>
            <span>可拖动人物节点、可点开的关系</span>
          </div>
          <div>
            <Map />
            <b>故事地图</b>
            <span>叙事空间示意，不冒充精确地理</span>
          </div>
        </div>
        <p className="muted">
          作品采用原创情节整理，含全书剧情；并非原著全文或官方改编。插画为程序绘制的概念视觉。原始来源与详细覆盖信息请查看作品内的“内容说明”。
        </p>
        <button
          className="primary-button"
          onClick={() => {
            about.current?.close();
            document
              .getElementById("library")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          选择一个故事 <ChevronRight size={16} />
        </button>
      </dialog>
    </main>
  );
}
