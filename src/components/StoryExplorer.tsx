"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  BookOpen,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Compass,
  Expand,
  ExternalLink,
  GitBranch,
  Info,
  List,
  Map,
  MapPin,
  Maximize2,
  Minus,
  Network,
  Orbit,
  Plus,
  Search,
  Share2,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import type { Chapter, Work } from "@/lib/types";
import { getChapter, searchWork, storageKey } from "@/lib/story";
import { getSelectionContext } from "@/lib/context";
import { Visualization, type Selection } from "./Visualization";

type View = "flow" | "characters" | "map";
const tabs: { id: View; name: string; en: string; icon: typeof GitBranch }[] = [
  { id: "flow", name: "故事流程", en: "NARRATIVE", icon: GitBranch },
  { id: "characters", name: "人物关系", en: "CONNECTIONS", icon: Network },
  { id: "map", name: "故事地图", en: "WORLD MAP", icon: Map },
];

export function StoryExplorer({ work }: { work: Work }) {
  const [view, setView] = useState<View>("flow");
  const [chapterId, setChapterId] = useState(work.chapters[0].id);
  const [selection, setSelection] = useState<Selection>({
    kind: "chapter",
    id: work.chapters[0].id,
  });
  const [saved, setSaved] = useState<string[]>([]);
  const [readId, setReadId] = useState<string | null>(null);
  const [onlySaved, setOnlySaved] = useState(false);
  const [relatedOnly, setRelatedOnly] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [zoom, setZoom] = useState(1);
  const [resetKey, setResetKey] = useState(0);
  const [toast, setToast] = useState("");
  const reader = useRef<HTMLDialogElement>(null);
  const sourceDialog = useRef<HTMLDialogElement>(null);
  const searchDialog = useRef<HTMLDialogElement>(null);
  const flowScroll = useRef<HTMLDivElement>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const chapter = getChapter(work, chapterId);
  const currentIndex = work.chapters.indexOf(chapter);
  const arcs = useMemo(() => {
    const result: { title: string; chapters: Chapter[] }[] = [];
    work.chapters.forEach((item) => {
      let arc = result.find((group) => group.title === item.arc);
      if (!arc) {
        arc = { title: item.arc, chapters: [] };
        result.push(arc);
      }
      arc.chapters.push(item);
    });
    return result;
  }, [work]);
  const results = useMemo(() => searchWork(work, query), [work, query]);
  const context = getSelectionContext(work, chapter, selection);
  const relatedIds = new Set(context.chapterIds);
  const hasContext = selection.kind !== "chapter";
  const filteredChapters = work.chapters.filter(
    (item) =>
      (!onlySaved || saved.includes(item.id)) &&
      (!relatedOnly || !hasContext || relatedIds.has(item.id)),
  );

  const notify = (message: string) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 3500);
  };
  const openChapter = (id: string, switchView = false) => {
    if (!work.chapters.some((item) => item.id === id)) return;
    setChapterId(id);
    setSelection({ kind: "chapter", id });
    setRelatedOnly(false);
    if (switchView) setView("flow");
    if (onlySaved && !saved.includes(id)) setOnlySaved(false);
    setSidebarOpen(false);
  };
  const pick = (next: Selection) => {
    if (next.kind === "chapter") openChapter(next.id, true);
    else {
      setSelection(next);
      if (next.kind === "character" || next.kind === "relationship")
        setView("characters");
      if (next.kind === "location" || next.kind === "event") setView("map");
    }
  };
  const navigate = (delta: number) => {
    const next = work.chapters[currentIndex + delta];
    if (next) openChapter(next.id);
  };

  useEffect(() => {
    let initialId = work.chapters[0].id;
    try {
      const recorded = localStorage.getItem(storageKey(work.id, "read"));
      if (recorded && work.chapters.some((item) => item.id === recorded)) {
        setReadId(recorded);
        initialId = recorded;
      }
      const values: unknown = JSON.parse(
        localStorage.getItem(storageKey(work.id, "saved")) ?? "[]",
      );
      if (Array.isArray(values))
        setSaved(
          values.filter(
            (id): id is string =>
              typeof id === "string" &&
              work.chapters.some((item) => item.id === id),
          ),
        );
    } catch {
      /* Local progress is optional when storage is unavailable. */
    }
    const params = new URLSearchParams(window.location.search);
    const linked = params.get("chapter");
    if (linked && work.chapters.some((item) => item.id === linked))
      initialId = linked;
    const linkedView = params.get("view");
    if (
      linkedView === "flow" ||
      linkedView === "characters" ||
      linkedView === "map"
    )
      setView(linkedView);
    setChapterId(initialId);
    setSelection({ kind: "chapter", id: initialId });
    return () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    };
  }, [work]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchDialog.current?.showModal();
        return;
      }
      const target = event.target as HTMLElement;
      if (
        target.closest("input, textarea, select") ||
        event.metaKey ||
        event.ctrlKey ||
        event.altKey
      )
        return;
      if (sourceDialog.current?.open || searchDialog.current?.open) return;
      if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
        const next =
          work.chapters[currentIndex + (event.key === "ArrowRight" ? 1 : -1)];
        if (next) {
          event.preventDefault();
          setChapterId(next.id);
          setSelection({ kind: "chapter", id: next.id });
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentIndex, work]);

  useEffect(() => {
    if (view !== "flow" || !flowScroll.current) return;
    const card = flowScroll.current.querySelector<HTMLElement>(
      `[data-chapter="${chapterId}"]`,
    );
    if (card) {
      const box = card.getBoundingClientRect();
      const parent = flowScroll.current.getBoundingClientRect();
      if (box.top < parent.top || box.bottom > parent.bottom)
        flowScroll.current.scrollBy({
          top: box.top - parent.top - 100,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        });
    }
  }, [chapterId, view, onlySaved]);

  const toggleSaved = () => {
    const next = saved.includes(chapter.id)
      ? saved.filter((id) => id !== chapter.id)
      : [...saved, chapter.id];
    setSaved(next);
    try {
      localStorage.setItem(storageKey(work.id, "saved"), JSON.stringify(next));
    } catch {
      notify("本次已收藏，但浏览器未允许保存到本地。");
    }
  };
  const markRead = () => {
    setReadId(chapter.id);
    try {
      localStorage.setItem(storageKey(work.id, "read"), chapter.id);
      notify(`已记住第 ${chapter.order} ${work.unitLabel}，下次从这里继续。`);
    } catch {
      notify("当前浏览器不允许保存，进度仅在本次会话有效。");
    }
  };
  const share = async () => {
    const url = new URL(window.location.href);
    url.searchParams.set("chapter", chapter.id);
    url.searchParams.set("view", view);
    try {
      await navigator.clipboard.writeText(url.toString());
      notify("当前章节链接已复制。全貌链接包含剧情。");
    } catch {
      window.history.replaceState(null, "", url);
      notify("链接已更新至地址栏，可手动复制分享。");
    }
  };
  const characterChips = (ids: string[]) => (
    <div className="entity-chips">
      {ids.map((id) => {
        const item = work.characters.find((character) => character.id === id);
        return item ? (
          <button key={id} onClick={() => pick({ kind: "character", id })}>
            <span>{item.name.slice(0, 1)}</span>
            {item.name}
            <ArrowUpRight size={11} />
          </button>
        ) : null;
      })}
    </div>
  );
  const locationChips = (ids: string[]) => (
    <div className="location-chips">
      {ids.map((id) => {
        const item = work.locations.find((location) => location.id === id);
        return item ? (
          <button key={id} onClick={() => pick({ kind: "location", id })}>
            <MapPin size={12} />
            {item.name}
            <ArrowUpRight size={11} />
          </button>
        ) : null;
      })}
    </div>
  );
  const chapterLinks = (items: Chapter[]) => (
    <div className="related-chapters">
      {items.map((item) => (
        <button key={item.id} onClick={() => openChapter(item.id, true)}>
          <span>{String(item.order).padStart(2, "0")}</span>
          <div>
            {item.title}
            <small>{item.arc}</small>
          </div>
          <ChevronRight size={14} />
        </button>
      ))}
    </div>
  );
  const evidence = (item: Chapter) => (
    <div className="chapter-sources">
      <span>整理依据</span>
      {item.sourceIds.map((id) => {
        const source = work.sources.find((entry) => entry.id === id);
        return source ? (
          <a key={id} href={source.url} target="_blank" rel="noreferrer">
            {source.label}
            <ExternalLink size={10} />
          </a>
        ) : null;
      })}
    </div>
  );

  const renderDetail = () => {
    if (selection.kind === "character") {
      const character = work.characters.find(
        (item) => item.id === selection.id,
      );
      if (!character) return null;
      const related = work.relationships.filter(
        (edge) => edge.source === character.id || edge.target === character.id,
      );
      return (
        <>
          <div className="entity-portrait">
            {character.name.slice(0, 1)}
            <i />
          </div>
          <div className="eyebrow">CHARACTER ARCHIVE</div>
          <h2>{character.name}</h2>
          <p className="entity-role">
            {character.role} · {character.faction}
          </p>
          <p className="detail-summary">{character.description}</p>
          {character.aliases.length > 0 && (
            <p className="alias-line">
              也被称为 {character.aliases.join(" / ")}
            </p>
          )}
          <div className="detail-section-title">
            <Network size={14} /> 人物关系 <span>{related.length}</span>
          </div>
          <div className="relation-list">
            {related.map((edge) => {
              const other = work.characters.find(
                (item) =>
                  item.id ===
                  (edge.source === character.id ? edge.target : edge.source),
              );
              return (
                <button
                  key={edge.id}
                  onClick={() => pick({ kind: "relationship", id: edge.id })}
                >
                  <span>{other?.name}</span>
                  <small>{edge.label}</small>
                  <ArrowUpRight size={12} />
                </button>
              );
            })}
          </div>
          <div className="detail-section-title">
            <GitBranch size={14} /> 参与的故事
          </div>
          {chapterLinks(
            work.chapters.filter((item) =>
              item.characterIds.includes(character.id),
            ),
          )}
          <div className="detail-section-title">
            <MapPin size={14} /> 关联场景
          </div>
          <p className="alias-line">
            含回忆、转述和被提及的情节，不等于人物本人到访。
          </p>
          {locationChips([
            ...new Set(
              work.chapters
                .filter((item) => item.characterIds.includes(character.id))
                .flatMap((item) =>
                  item.events
                    .filter((event) =>
                      event.characterIds.includes(character.id),
                    )
                    .flatMap((event) =>
                      event.locationId ? [event.locationId] : [],
                    ),
                ),
            ),
          ])}
        </>
      );
    }
    if (selection.kind === "location") {
      const location = work.locations.find((item) => item.id === selection.id);
      if (!location) return null;
      const related = work.chapters.filter((item) =>
        item.locationIds.includes(location.id),
      );
      return (
        <>
          <div className="location-emblem">
            <MapPin size={32} strokeWidth={1} />
          </div>
          <div className="eyebrow">PLACE IN THE STORY</div>
          <h2>{location.name}</h2>
          <p className="entity-role">{location.region} · 叙事空间</p>
          <p className="detail-summary">{location.description}</p>
          <div className="inline-note">
            <Info size={13} /> 地图为叙事示意，坐标不代表精确地理位置。
          </div>
          <div className="detail-section-title">
            <GitBranch size={14} /> 在这里发生的故事{" "}
            <span>{related.length}</span>
          </div>
          {chapterLinks(related)}
          <div className="detail-section-title">
            <Users size={14} /> 相关人物
          </div>
          {characterChips([
            ...new Set(
              related.flatMap((item) =>
                item.events
                  .filter((event) => event.locationId === location.id)
                  .flatMap((event) => event.characterIds),
              ),
            ),
          ])}
        </>
      );
    }
    if (selection.kind === "relationship") {
      const relation = work.relationships.find(
        (item) => item.id === selection.id,
      );
      if (!relation) return null;
      const from = work.characters.find((item) => item.id === relation.source);
      const to = work.characters.find((item) => item.id === relation.target);
      return (
        <>
          <div className="eyebrow">BETWEEN TWO LIVES</div>
          <h2 className="relationship-heading">
            {from?.name}
            <span>与</span>
            {to?.name}
          </h2>
          <span className="relationship-tag">{relation.label}</span>
          <p className="detail-summary">{relation.description}</p>
          {characterChips([relation.source, relation.target])}
          <div className="detail-section-title">
            <GitBranch size={14} /> 关系相关的故事
          </div>
          {chapterLinks(
            work.chapters.filter((item) =>
              relation.chapterIds.includes(item.id),
            ),
          )}
          <div className="inline-note">
            <Info size={13} />{" "}
            这里展示全书中的关系及经历，不代表两人在所有阶段都保持相同关系。
          </div>
        </>
      );
    }
    if (selection.kind === "event") {
      const event = chapter.events.find((item) => item.id === selection.id);
      if (!event) return null;
      return (
        <>
          <div className="eyebrow">A MOMENT IN THE STORY</div>
          <h2>{event.title}</h2>
          <p className="detail-summary">{event.description}</p>
          <div className="detail-section-title">
            <Users size={14} /> 参与人物
          </div>
          {characterChips(event.characterIds)}
          {event.locationId && (
            <>
              <div className="detail-section-title">
                <MapPin size={14} /> 发生地点
              </div>
              {locationChips([event.locationId])}
            </>
          )}
          <div className="detail-section-title">
            <GitBranch size={14} /> 所属故事
          </div>
          {chapterLinks([chapter])}
          {evidence(chapter)}
        </>
      );
    }
    return (
      <>
        <div className="chapter-kicker">
          <span>
            第 {String(chapter.order).padStart(2, "0")} {work.unitLabel}
          </span>
          <span>{chapter.arc}</span>
        </div>
        <h2>{chapter.title}</h2>
        {chapter.originalRange && (
          <p className="original-range">原作范围 · {chapter.originalRange}</p>
        )}
        <p className="detail-summary">{chapter.summary}</p>
        <div className="chapter-actions">
          <button
            className="read-button"
            onClick={() => reader.current?.showModal()}
          >
            <BookOpen size={14} /> 沉浸阅读 <Expand size={13} />
          </button>
          <button
            className={`icon-button ${saved.includes(chapter.id) ? "bookmarked" : ""}`}
            aria-label={
              saved.includes(chapter.id) ? "取消收藏本章" : "收藏本章"
            }
            aria-pressed={saved.includes(chapter.id)}
            onClick={toggleSaved}
          >
            <Bookmark
              size={17}
              fill={saved.includes(chapter.id) ? "currentColor" : "none"}
            />
          </button>
        </div>
        <div className="detail-section-title">
          <Users size={14} /> 登场人物
        </div>
        {characterChips(chapter.characterIds)}
        <div className="detail-section-title">
          <MapPin size={14} /> 故事地点
        </div>
        {locationChips(chapter.locationIds)}
        <div className="detail-section-title">
          <GitBranch size={14} /> 事件脉络 <span>{chapter.events.length}</span>
        </div>
        <div className="event-list">
          {chapter.events.map((event, index) => (
            <button
              key={event.id}
              onClick={() => pick({ kind: "event", id: event.id })}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
              <ArrowUpRight size={12} />
            </button>
          ))}
        </div>
        <div className="detail-section-title">
          <BookOpen size={14} /> 情节正文
        </div>
        <div className="story-prose compact">
          {chapter.paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
        {chapter.editorialNote && (
          <div className="inline-note">
            <Info size={13} />
            {chapter.editorialNote}
          </div>
        )}
        {evidence(chapter)}
        <button className="mark-read" onClick={markRead}>
          {readId === chapter.id ? <Check size={14} /> : <BookOpen size={14} />}
          {readId === chapter.id ? "阅读位置已记住" : "记住当前阅读位置"}
        </button>
      </>
    );
  };

  return (
    <main
      className={`explorer-page theme-${work.id}`}
      style={{ "--work-accent": work.accent } as React.CSSProperties}
    >
      <header className="explorer-header">
        <Link href="/" className="brand compact-brand" aria-label="返回作品库">
          <span className="brand-mark">
            <Orbit size={24} strokeWidth={1.3} />
          </span>
          <span>
            故事图谱<small>STORY ATLAS</small>
          </span>
        </Link>
        <span className="header-divider" />
        <Link href="/" className="back-library">
          <ArrowLeft size={13} /> 作品宇宙
        </Link>
        <ChevronRight className="breadcrumb-arrow" size={13} />
        <h1>{work.title}</h1>
        <span className="explorer-version">{work.version}</span>
        <div className="explorer-header-actions">
          <button
            className="icon-button mobile-menu"
            aria-label="打开故事目录"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <List size={20} />
          </button>
          <button
            className="explorer-search"
            onClick={() => searchDialog.current?.showModal()}
          >
            <Search size={15} />
            <span>搜索故事、人物、地点</span>
            <kbd>⌘ K</kbd>
          </button>
          <button
            className="icon-button"
            aria-label="分享当前章节"
            onClick={share}
          >
            <Share2 size={17} />
          </button>
          <button
            className="icon-button"
            aria-label="查看内容说明和来源"
            onClick={() => sourceDialog.current?.showModal()}
          >
            <CircleHelp size={18} />
          </button>
        </div>
      </header>
      <div className="explorer-layout">
        {sidebarOpen && (
          <button
            className="sidebar-backdrop"
            aria-label="关闭故事目录"
            onClick={() => setSidebarOpen(false)}
          />
        )}
        <aside className={`story-sidebar ${sidebarOpen ? "open" : ""}`}>
          <Link href="/" className="sidebar-book">
            <img src={work.cover} alt="" width={60} height={90} />
            <div>
              <small>{work.englishTitle}</small>
              <strong>{work.title}</strong>
              <span>{work.author}</span>
            </div>
          </Link>
          <div className="sidebar-overview">
            <span className="eyebrow">STORY OVERVIEW</span>
            <div>
              <strong>
                {work.chapters.length}
                <small>
                  {work.unitLabel === "段" ? "主线段落" : work.unitLabel}
                </small>
              </strong>
              <strong>
                {work.characters.length}
                <small>人物</small>
              </strong>
              <strong>
                {work.locations.length}
                <small>地点</small>
              </strong>
            </div>
          </div>
          <div className="sidebar-section-head">
            <span>叙事目录</span>
            <span>{arcs.length} 个篇章</span>
          </div>
          <nav className="arc-list" aria-label="故事篇章目录">
            {arcs.map((arc, index) => (
              <button
                key={arc.title}
                className={chapter.arc === arc.title ? "active" : ""}
                onClick={() => openChapter(arc.chapters[0].id, true)}
              >
                <span className="arc-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  {arc.title}
                  <small>
                    {arc.chapters[0].order} —{" "}
                    {arc.chapters[arc.chapters.length - 1].order}{" "}
                    {work.unitLabel}
                  </small>
                </div>
                {chapter.arc === arc.title && (
                  <span className="active-arc-dot" />
                )}
              </button>
            ))}
          </nav>
          <button
            className={`sidebar-saved ${onlySaved ? "active" : ""}`}
            onClick={() => {
              setOnlySaved(!onlySaved);
              setView("flow");
              setSidebarOpen(false);
            }}
          >
            <Bookmark size={14} /> 我的收藏 <span>{saved.length}</span>
          </button>
          <div className="sidebar-bottom">
            <button onClick={() => sourceDialog.current?.showModal()}>
              <Info size={13} /> 内容说明 <ArrowUpRight size={12} />
            </button>
            <p>
              {work.coverage.label}
              <br />
              原创整理 · 全貌含剧情
            </p>
          </div>
        </aside>
        <section className="workspace">
          <div className="workspace-tabs" role="tablist" aria-label="图谱视图">
            {tabs.map(({ id, icon: Icon, name, en }) => (
              <button
                key={id}
                role="tab"
                aria-selected={view === id}
                aria-controls={`panel-${id}`}
                onClick={() => {
                  setView(id);
                  setZoom(1);
                }}
                className={view === id ? "active" : ""}
              >
                <Icon size={16} />
                <span>
                  {name}
                  <small>{en}</small>
                </span>
              </button>
            ))}
            <span className="explore-mode">
              <span className="status-dot" /> 全貌探索
            </span>
          </div>
          <div className="workspace-title">
            <div>
              <span className="eyebrow">
                {tabs.find((tab) => tab.id === view)?.en} EXPLORER
              </span>
              <h2>
                {view === "flow"
                  ? onlySaved
                    ? "收藏的故事"
                    : "每一段旅程，都有来路。"
                  : view === "characters"
                    ? "故事，发生在人与人之间。"
                    : "重走故事里的山海。"}
              </h2>
            </div>
            <button
              className="view-info"
              aria-label="查看探索说明"
              onClick={() => sourceDialog.current?.showModal()}
            >
              <Info size={15} />
            </button>
          </div>
          <div
            className="canvas-container"
            role="tabpanel"
            id={`panel-${view}`}
            aria-label={tabs.find((tab) => tab.id === view)?.name}
          >
            {view === "flow" ? (
              <div className="flow-scroll" ref={flowScroll}>
                <div className="flow-top-label">
                  <span>叙事顺序</span>
                  {hasContext && (
                    <button
                      className="context-toggle"
                      aria-pressed={relatedOnly}
                      onClick={() => setRelatedOnly(!relatedOnly)}
                    >
                      {relatedOnly
                        ? "查看全部"
                        : `只看关联 · ${relatedIds.size}`}
                    </button>
                  )}
                  <span>
                    {filteredChapters.length} 个内容单元 <GitBranch size={12} />
                  </span>
                </div>
                <div className="flow-content" style={{ zoom }}>
                  {filteredChapters.length === 0 ? (
                    <div className="empty-state">
                      <Bookmark size={24} />
                      <h3>
                        {onlySaved
                          ? "收藏一段值得重读的故事"
                          : "这条线索暂时没有关联单元"}
                      </h3>
                      <p>
                        {onlySaved
                          ? "在章节详情中点击书签，它就会出现在这里。"
                          : "可以返回完整流程，继续探索其他人物和地点。"}
                      </p>
                      <button
                        className="text-button"
                        onClick={() => {
                          setOnlySaved(false);
                          setRelatedOnly(false);
                        }}
                      >
                        返回完整故事 <ArrowRight size={13} />
                      </button>
                    </div>
                  ) : (
                    filteredChapters.map((item, index) => (
                      <div
                        className={`flow-row ${item.id === chapter.id ? "selected" : ""} ${hasContext && relatedIds.has(item.id) ? "context-match" : ""}`}
                        key={item.id}
                        data-chapter={item.id}
                      >
                        {(index === 0 ||
                          filteredChapters[index - 1].arc !== item.arc) && (
                          <div className="flow-arc-title">
                            <span>CHAPTER ARC</span>
                            <h3>{item.arc}</h3>
                            <i />
                          </div>
                        )}
                        <div className="flow-step">
                          <span>{String(item.order).padStart(2, "0")}</span>
                        </div>
                        <button
                          className="flow-node"
                          onClick={() => openChapter(item.id)}
                          aria-label={`打开第${item.order}${work.unitLabel}：${item.title}`}
                          aria-pressed={item.id === chapter.id}
                        >
                          <div className="flow-node-top">
                            <span>
                              第 {String(item.order).padStart(2, "0")}{" "}
                              {work.unitLabel}
                            </span>
                            <div>
                              {readId === item.id && <Check size={12} />}
                              {saved.includes(item.id) && (
                                <Bookmark size={12} />
                              )}
                              <ArrowUpRight size={13} />
                            </div>
                          </div>
                          <h3>{item.title}</h3>
                          <p>{item.summary}</p>
                          <div className="flow-node-meta">
                            <span>
                              <Users size={11} />
                              {item.characterIds.length} 位人物
                            </span>
                            <span>
                              <MapPin size={11} />
                              {item.locationIds.length} 个地点
                            </span>
                            <span>{item.events.length} 个事件</span>
                          </div>
                        </button>
                      </div>
                    ))
                  )}
                </div>
                {filteredChapters.length > 0 && (
                  <div className="flow-end">
                    <span />
                    <Orbit size={20} strokeWidth={1} />
                    <p>故事到此，仍有余响。</p>
                    <small>{work.coverage.label}</small>
                  </div>
                )}
              </div>
            ) : (
              <Visualization
                key={`${work.id}-${view}-${resetKey}`}
                work={work}
                view={view}
                chapter={chapter}
                selection={selection}
                onSelect={pick}
                zoom={zoom}
              />
            )}
            <div className="canvas-controls">
              <button
                aria-label="缩小视图"
                onClick={() =>
                  setZoom((value) => Math.max(0.6, +(value - 0.1).toFixed(1)))
                }
                disabled={zoom <= 0.6}
              >
                <Minus size={15} />
              </button>
              <span>{Math.round(zoom * 100)}%</span>
              <button
                aria-label="放大视图"
                onClick={() =>
                  setZoom((value) => Math.min(1.7, +(value + 0.1).toFixed(1)))
                }
                disabled={zoom >= 1.7}
              >
                <Plus size={15} />
              </button>
              <i />
              <button
                aria-label="重置视野"
                onClick={() => {
                  setZoom(1);
                  setResetKey((value) => value + 1);
                }}
              >
                <Maximize2 size={14} />
              </button>
            </div>
          </div>
          <div className="progress-dock">
            <button
              className="icon-button"
              aria-label="上一章"
              disabled={currentIndex === 0}
              onClick={() => navigate(-1)}
            >
              <ChevronLeft size={17} />
            </button>
            <div className="progress-current">
              <small>当前探索</small>
              <span>
                {String(chapter.order).padStart(2, "0")}
                <i>
                  / {work.chapters.length} {work.unitLabel}
                </i>
              </span>
            </div>
            <input
              aria-label="选择当前探索章节"
              type="range"
              min="1"
              max={work.chapters.length}
              value={chapter.order}
              onChange={(event) => {
                const next = work.chapters.find(
                  (item) => item.order === +event.target.value,
                );
                if (next) openChapter(next.id);
              }}
            />
            <button
              className="icon-button"
              aria-label="下一章"
              disabled={currentIndex === work.chapters.length - 1}
              onClick={() => navigate(1)}
            >
              <ChevronRight size={17} />
            </button>
            <span className="progress-note">浏览位置，不是防剧透边界</span>
          </div>
        </section>
        <aside className="detail-panel" aria-label="故事详情">
          <div className="detail-panel-top">
            <span>
              <span className="status-dot" />{" "}
              {selection.kind === "chapter"
                ? "故事档案"
                : selection.kind === "character"
                  ? "人物档案"
                  : selection.kind === "location"
                    ? "地点档案"
                    : selection.kind === "event"
                      ? "事件档案"
                      : "关系档案"}
            </span>
            <button
              className="icon-button"
              aria-label="返回当前章节详情"
              onClick={() => setSelection({ kind: "chapter", id: chapter.id })}
            >
              <BookOpen size={15} />
            </button>
          </div>
          <div
            className="detail-content"
            key={`${selection.kind}-${selection.id}`}
          >
            {renderDetail()}
          </div>
          <div className="detail-footer">
            <span>ATLAS / {work.id.toUpperCase()}</span>
            <span>原创情节整理</span>
          </div>
        </aside>
      </div>
      <dialog ref={reader} className="reader-dialog">
        <div className="reader-top">
          <span>
            <BookOpen size={15} /> {work.title} <i>/</i> 沉浸阅读
          </span>
          <button
            className="icon-button"
            aria-label="关闭沉浸阅读"
            onClick={() => reader.current?.close()}
          >
            <X size={20} />
          </button>
        </div>
        <article className="reader-article">
          <div className="eyebrow">
            {chapter.arc} / {String(chapter.order).padStart(2, "0")}
          </div>
          <h2>{chapter.title}</h2>
          <p className="reader-deck">{chapter.summary}</p>
          <div className="reader-divider">
            <i />
            <Sparkles size={15} />
            <i />
          </div>
          <div className="story-prose">
            {chapter.paragraphs.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
          {chapter.editorialNote && (
            <div className="inline-note">
              <Info size={14} />
              {chapter.editorialNote}
            </div>
          )}
          {evidence(chapter)}
          <button className="mark-read" onClick={markRead}>
            <Check size={14} />
            记住当前阅读位置
          </button>
        </article>
        <div className="reader-navigation">
          <button
            disabled={currentIndex === 0}
            onClick={() => {
              navigate(-1);
              reader.current?.scrollTo({ top: 0 });
            }}
          >
            <ArrowLeft size={15} /> 上一{work.unitLabel}
          </button>
          <span>
            {chapter.order} / {work.chapters.length}
          </span>
          <button
            disabled={currentIndex === work.chapters.length - 1}
            onClick={() => {
              navigate(1);
              reader.current?.scrollTo({ top: 0 });
            }}
          >
            下一{work.unitLabel} <ArrowRight size={15} />
          </button>
        </div>
      </dialog>
      <dialog ref={sourceDialog} className="info-dialog source-dialog">
        <div className="dialog-heading">
          <span className="eyebrow">SOURCES & EDITORIAL NOTES</span>
          <button
            className="icon-button"
            aria-label="关闭内容说明"
            onClick={() => sourceDialog.current?.close()}
          >
            <X size={20} />
          </button>
        </div>
        <h2>
          {work.title}
          <small>内容与来源说明</small>
        </h2>
        <div className="coverage-card">
          <span>{work.coverage.label}</span>
          <p>{work.coverage.description}</p>
        </div>
        <h3>如何阅读这份图谱</h3>
        <p>
          当前为全貌探索，人物介绍、关系、章节与地图可能包含后续剧情。底部进度轴用于定位内容，不是严格防剧透开关。
        </p>
        <p>
          {work.mapNote}{" "}
          地图的虚线是当前内容单元的地点关联，不自动代表人物实际移动。
        </p>
        <p>
          故事以独立中文情节整理呈现，不是原著全文，也不替代原作阅读。封面为原创程序绘制概念插画，不是官方书封或真实剧照。
        </p>
        <h3>版本与资料</h3>
        <p>{work.version}</p>
        <div className="source-links">
          {work.sources.map((source) => (
            <a
              key={source.id}
              href={source.url}
              target="_blank"
              rel="noreferrer"
            >
              <div>
                <strong>{source.label}</strong>
                {source.note && <span>{source.note}</span>}
              </div>
              <ExternalLink size={15} />
            </a>
          ))}
        </div>
        <h3>发现问题？</h3>
        <p>
          可以通过“分享”复制具体章节链接，并附上你发现的人物、情节或地点问题，反馈给项目维护者。当前版本不自动接收或发布众包修改。
        </p>
      </dialog>
      <dialog ref={searchDialog} className="search-dialog">
        <div className="search-dialog-input">
          <Search size={20} />
          <input
            autoFocus
            aria-label="搜索故事内容"
            placeholder="搜索人物、地点或一段情节…"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button
            className="icon-button"
            aria-label="关闭搜索"
            onClick={() => searchDialog.current?.close()}
          >
            <X size={18} />
          </button>
        </div>
        <div className="search-results">
          {!query.trim() ? (
            <div className="search-prompt">
              <Compass size={25} />
              <p>从一个名字，开始另一段旅程。</p>
              <small>搜索当前作品的人物、别名、地点与故事内容</small>
            </div>
          ) : results.length === 0 ? (
            <div className="search-prompt">
              <p>没有找到“{query}”</p>
              <small>试试较短的名字或其他称呼。</small>
            </div>
          ) : (
            results.map((result) => (
              <button
                key={`${result.kind}-${result.id}`}
                onClick={() => {
                  pick(result);
                  searchDialog.current?.close();
                  setQuery("");
                }}
              >
                {result.kind === "character" ? (
                  <Users size={17} />
                ) : result.kind === "location" ? (
                  <MapPin size={17} />
                ) : (
                  <BookOpen size={17} />
                )}
                <div>
                  <strong>{result.title}</strong>
                  <small>{result.subtitle}</small>
                </div>
                <ArrowUpRight size={15} />
              </button>
            ))
          )}
        </div>
        <div className="search-footer">
          <span>{work.title} · 全貌内容搜索</span>
          <span>ESC 关闭</span>
        </div>
      </dialog>
      {toast && (
        <div className="toast" role="status">
          <Check size={15} />
          {toast}
        </div>
      )}
    </main>
  );
}
