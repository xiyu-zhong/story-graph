"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Move, MousePointer2 } from "lucide-react";
import type { Chapter, Work } from "@/lib/types";
import { getGraphPositions } from "@/lib/story";
import { getSelectionContext, type Selection } from "@/lib/context";
export type { Selection } from "@/lib/context";
const edgeColors = {
  family: "#d3ad80",
  ally: "#83b8b3",
  mentor: "#a99bd3",
  rival: "#c98389",
  faction: "#809cbd",
};
const edgeLabels = {
  family: "亲缘",
  ally: "同盟",
  mentor: "师承",
  rival: "对立",
  faction: "归属",
};

type LocationKind = Work["locations"][number]["kind"];

const kindLabels: Record<LocationKind, string> = {
  city: "城",
  mountain: "山",
  island: "岛",
  realm: "境界",
  temple: "寺",
  wilderness: "野",
};

const kindOrder = [
  "city",
  "mountain",
  "island",
  "realm",
  "temple",
  "wilderness",
] as const;

function KindGlyph({
  kind,
  fill,
  stroke,
}: {
  kind: LocationKind;
  fill: string;
  stroke: string;
}) {
  const body = { fill, stroke, strokeWidth: 1 };
  if (kind === "mountain") return <path d="M0-7L7 5H-7Z" {...body} />;
  if (kind === "island")
    return (
      <>
        <circle r="6" fill="none" stroke={stroke} strokeWidth="2" />
        <circle r="1.5" fill={fill} stroke="none" />
      </>
    );
  if (kind === "temple")
    return (
      <>
        <path d="M0-8L5-2H-5Z" {...body} />
        <rect x="-3" y="-2" width="6" height="7" {...body} />
      </>
    );
  if (kind === "realm")
    return (
      <>
        <path d="M0-7L6 0 0 7-6 0Z" {...body} />
        <path
          d="M0-3L2.5 0 0 3-2.5 0Z"
          fill="none"
          stroke={stroke}
          strokeWidth="1"
        />
      </>
    );
  if (kind === "wilderness")
    return (
      <>
        <circle cx="-5" cy="1.5" r="1.7" fill={fill} stroke="none" />
        <circle cx="0" cy="-2" r="1.7" fill={fill} stroke="none" />
        <circle cx="5" cy="1.5" r="1.7" fill={fill} stroke="none" />
      </>
    );
  return (
    <>
      <rect x="-6" y="-4" width="12" height="9" {...body} />
      <rect x="-6" y="-7" width="2.5" height="3" fill={fill} stroke="none" />
      <rect x="-1.25" y="-7" width="2.5" height="3" fill={fill} stroke="none" />
      <rect x="3.5" y="-7" width="2.5" height="3" fill={fill} stroke="none" />
    </>
  );
}

const cardCharsPerLine = 17;

/**
 * 0—100 的编辑排布坐标 → 视图坐标（单一来源，路线与节点共用）。
 * 各作品 mapNote 已声明这些坐标不是经纬度。
 */
const plot = (location: { x: number; y: number }) => ({
  x: 80 + location.x * 8.4,
  y: 85 + location.y * 5.3,
});

const firstSentences = (text: string): string[] => {
  const cut = text.split(/[。！？]/)[0];
  const source = cut ? `${cut}。` : text;
  const lines: string[] = [];
  for (let index = 0; index < source.length; index += cardCharsPerLine)
    lines.push(source.slice(index, index + cardCharsPerLine));
  return lines.slice(0, 3);
};

export function Visualization({
  work,
  view,
  chapter,
  selection,
  onSelect,
  zoom,
  onZoom,
}: {
  work: Work;
  view: "characters" | "map";
  chapter: Chapter;
  selection: Selection;
  onSelect: (selection: Selection) => void;
  zoom: number;
  onZoom?: (zoom: number) => void;
}) {
  const initial = useMemo(() => getGraphPositions(work), [work]);
  const [positions, setPositions] = useState(initial);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [edgeType, setEdgeType] = useState("all");
  const [region, setRegion] = useState("all");
  const drag = useRef<{
    id?: string;
    x: number;
    y: number;
    originX: number;
    originY: number;
    moved: boolean;
  } | null>(null);
  const svg = useRef<SVGSVGElement>(null);
  const edgeList = work.relationships.filter(
    (edge) => edgeType === "all" || edge.type === edgeType,
  );
  const selectedCharacter =
    selection.kind === "character" ? selection.id : null;
  const context = getSelectionContext(work, chapter, selection);
  const activeCharacters = new Set(context.characterIds);
  const activeLocations = new Set(context.locationIds);
  const locationPoint = (id: string) => {
    const location = work.locations.find((item) => item.id === id);
    return location ? plot(location) : null;
  };
  const route = chapter.locationIds
    .map(locationPoint)
    .filter((point): point is { x: number; y: number } => point !== null);
  const regions = [
    ...new Set(work.locations.map((location) => location.region)),
  ];

  const [hovered, setHovered] = useState<string | null>(null);

  const locationStats = useMemo(() => {
    const stats = new Map<
      string,
      { events: number; chapters: Set<string>; characters: Set<string> }
    >();
    for (const unit of work.chapters) {
      for (const event of unit.events) {
        if (!event.locationId) continue;
        let entry = stats.get(event.locationId);
        if (!entry) {
          entry = { events: 0, chapters: new Set(), characters: new Set() };
          stats.set(event.locationId, entry);
        }
        entry.events += 1;
        entry.chapters.add(unit.id);
        for (const id of event.characterIds) entry.characters.add(id);
      }
    }
    return stats;
  }, [work]);

  const visibleLocations = useMemo(
    () =>
      work.locations.filter(
        (location) => region === "all" || location.region === region,
      ),
    [work.locations, region],
  );

  const screenOf = useCallback(
    (point: { x: number; y: number }) => ({
      x: 500 + pan.x + zoom * (point.x - 500),
      y: 370 + pan.y + zoom * (point.y - 370),
    }),
    [pan, zoom],
  );

  const fitTo = useCallback(
    (points: { x: number; y: number }[]) => {
      if (!points.length) return;
      const xs = points.map((point) => point.x);
      const ys = points.map((point) => point.y);
      const minX = Math.min(...xs);
      const maxX = Math.max(...xs);
      const minY = Math.min(...ys);
      const maxY = Math.max(...ys);
      const cx = (minX + maxX) / 2;
      const cy = (minY + maxY) / 2;
      const nextZoom =
        points.length === 1
          ? zoom
          : Math.round(
              Math.max(
                0.6,
                Math.min(
                  1.7,
                  Math.min(
                    (1000 * 0.68) / Math.max(maxX - minX, 1),
                    (740 * 0.68) / Math.max(maxY - minY, 1),
                  ),
                ),
              ) * 10,
            ) / 10;
      if (nextZoom !== zoom) onZoom?.(nextZoom);
      setPan({ x: -(nextZoom * (cx - 500)), y: -(nextZoom * (cy - 370)) });
    },
    [onZoom, zoom],
  );

  const regionFit = useRef<string | null>(null);
  const locationFit = useRef<string | null>(null);

  useEffect(() => {
    if (view !== "map") return;
    if (regionFit.current === region) return;
    regionFit.current = region;
    if (region === "all") {
      setPan({ x: 0, y: 0 });
      if (zoom !== 1) onZoom?.(1);
      return;
    }
    fitTo(visibleLocations.map(plot));
  }, [view, region, visibleLocations, fitTo, zoom, onZoom]);

  useEffect(() => {
    if (view !== "map" || selection.kind !== "location") return;
    if (locationFit.current === selection.id) return;
    locationFit.current = selection.id;
    const location = work.locations.find((item) => item.id === selection.id);
    if (!location) return;
    const point = plot(location);
    const screen = screenOf(point);
    const comfortable =
      screen.x > 150 && screen.x < 850 && screen.y > 110 && screen.y < 630;
    if (!comfortable) fitTo([point]);
  }, [view, selection, work.locations, fitTo, screenOf]);

  const hoveredCard = (() => {
    if (view !== "map" || !hovered) return null;
    const location = work.locations.find((item) => item.id === hovered);
    if (!location) return null;
    const screen = screenOf(plot(location));
    const lines = firstSentences(location.description);
    const width = 236;
    const height = 82 + lines.length * 16;
    const flipped = screen.x + width + 26 > 1000;
    return {
      location,
      lines,
      width,
      height,
      x: flipped ? screen.x - width - 18 : screen.x + 18,
      y: Math.min(Math.max(screen.y - height / 2, 12), 740 - height - 12),
      stats: locationStats.get(location.id),
    };
  })();

  const pointerPosition = (event: React.PointerEvent) => {
    const element = svg.current;
    if (!element) return { x: 0, y: 0 };
    const point = element.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    const matrix = element.getScreenCTM();
    return matrix ? point.matrixTransform(matrix.inverse()) : { x: 0, y: 0 };
  };
  const startDrag = (event: React.PointerEvent, id?: string) => {
    event.stopPropagation();
    const point = pointerPosition(event);
    const origin = id ? positions[id] : pan;
    drag.current = {
      id,
      x: point.x,
      y: point.y,
      originX: origin.x,
      originY: origin.y,
      moved: false,
    };
    svg.current?.setPointerCapture(event.pointerId);
  };
  const moveDrag = (event: React.PointerEvent) => {
    const current = drag.current;
    if (!current) return;
    const point = pointerPosition(event);
    const dx = point.x - current.x;
    const dy = point.y - current.y;
    if (Math.abs(dx) + Math.abs(dy) > 3) current.moved = true;
    if (current.id)
      setPositions((value) => ({
        ...value,
        [current.id!]: {
          x: current.originX + dx / zoom,
          y: current.originY + dy / zoom,
        },
      }));
    else setPan({ x: current.originX + dx, y: current.originY + dy });
  };
  const endDrag = () => {
    const current = drag.current;
    if (current?.id && !current.moved)
      onSelect({ kind: "character", id: current.id });
    drag.current = null;
  };

  return (
    <div className={`visualization ${view}`}>
      <div className="visualization-top">
        <span>
          {view === "characters"
            ? `${work.characters.length} 人物 · ${work.relationships.length} 关系`
            : `${work.mapLabel} · 显示 ${visibleLocations.length}/${work.locations.length} 地点`}
        </span>
        {view === "map" ? (
          <select
            aria-label="筛选地图区域"
            value={region}
            onChange={(event) => setRegion(event.target.value)}
          >
            <option value="all">全部区域（{work.locations.length}）</option>
            {regions.map((item) => (
              <option key={item} value={item}>
                {item}（
                {work.locations.filter((place) => place.region === item).length}
                ）
              </option>
            ))}
          </select>
        ) : (
          <button
            onClick={() => {
              setPositions(initial);
              setPan({ x: 0, y: 0 });
              setEdgeType("all");
            }}
          >
            重置布局
          </button>
        )}
      </div>
      <svg
        ref={svg}
        className="world-svg"
        viewBox="0 0 1000 740"
        aria-label={
          view === "characters"
            ? `${work.title}人物关系图`
            : `${work.title}故事地图`
        }
        onPointerDown={(event) => startDrag(event)}
        onPointerMove={moveDrag}
        onPointerUp={endDrag}
        onPointerCancel={() => {
          drag.current = null;
        }}
      >
        <defs>
          <pattern
            id={`grid-${work.id}-${view}`}
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r=".8" fill="#55707c" opacity=".3" />
          </pattern>
          <radialGradient id={`land-${work.id}`}>
            <stop stopColor={work.accent} stopOpacity=".09" />
            <stop offset="1" stopColor={work.accent} stopOpacity=".025" />
          </radialGradient>
          <filter id={`node-glow-${work.id}`}>
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>
        <rect
          width="1000"
          height="740"
          fill={`url(#grid-${work.id}-${view})`}
        />
        <g
          transform={`translate(${500 + pan.x} ${370 + pan.y}) scale(${zoom}) translate(-500 -370)`}
        >
          {view === "characters" ? (
            <>
              <circle
                cx="500"
                cy="365"
                r="210"
                fill="none"
                stroke="#34505f"
                strokeDasharray="3 12"
                opacity=".3"
              />
              <ellipse
                cx="500"
                cy="365"
                rx="405"
                ry="305"
                fill="none"
                stroke="#34505f"
                strokeOpacity=".25"
              />
              {edgeList.map((edge) => {
                const from = positions[edge.source];
                const to = positions[edge.target];
                if (!from || !to) return null;
                const active =
                  selection.kind === "relationship"
                    ? selection.id === edge.id
                    : selectedCharacter
                      ? edge.source === selectedCharacter ||
                        edge.target === selectedCharacter
                      : activeCharacters.has(edge.source) &&
                        activeCharacters.has(edge.target);
                return (
                  <g
                    key={edge.id}
                    className="graph-edge"
                    role="button"
                    tabIndex={0}
                    aria-label={`${work.characters.find((c) => c.id === edge.source)?.name}与${work.characters.find((c) => c.id === edge.target)?.name}：${edge.label}`}
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={() =>
                      onSelect({ kind: "relationship", id: edge.id })
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        onSelect({ kind: "relationship", id: edge.id });
                      }
                    }}
                  >
                    <line
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke="transparent"
                      strokeWidth="15"
                    />
                    <line
                      x1={from.x}
                      y1={from.y}
                      x2={to.x}
                      y2={to.y}
                      stroke={edgeColors[edge.type]}
                      strokeWidth={active ? 1.6 : 0.8}
                      opacity={active ? 0.9 : 0.17}
                      strokeDasharray={
                        edge.type === "rival" ? "5 5" : undefined
                      }
                    />
                    {active && (
                      <text
                        x={(from.x + to.x) / 2}
                        y={(from.y + to.y) / 2 - 5}
                        className="edge-label"
                        fill={edgeColors[edge.type]}
                      >
                        {edge.label}
                      </text>
                    )}
                  </g>
                );
              })}
              {work.characters.map((character) => {
                const point = positions[character.id];
                if (!point) return null;
                const chosen = selectedCharacter === character.id;
                const active = activeCharacters.has(character.id);
                const main = work.characters[0]?.id === character.id;
                const dense = work.characters.length > 85;
                const radius = chosen
                  ? 32
                  : main
                    ? 29
                    : dense && !active
                      ? 17
                      : 23;
                return (
                  <g
                    key={character.id}
                    transform={`translate(${point.x} ${point.y})`}
                    className={`character-node ${active ? "context-active" : ""} ${dense && !active ? "quiet-node" : ""}`}
                    role="button"
                    tabIndex={0}
                    aria-label={`查看人物${character.name}`}
                    onPointerDown={(event) => startDrag(event, character.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        onSelect({ kind: "character", id: character.id });
                      }
                    }}
                    opacity={selection.kind === "chapter" || active ? 1 : 0.35}
                  >
                    {chosen && (
                      <circle
                        r="41"
                        fill="none"
                        stroke={work.accent}
                        strokeOpacity=".3"
                        strokeDasharray="3 5"
                      />
                    )}
                    <circle
                      r={radius + 3}
                      fill={active ? work.accent : "#496175"}
                      opacity=".12"
                    />
                    <circle
                      r={radius}
                      fill={chosen ? "#263640" : "#14232f"}
                      stroke={active ? work.accent : "#3a4d5a"}
                      strokeWidth={chosen ? 1.8 : 1}
                    />
                    <text
                      textAnchor="middle"
                      y="5"
                      fill={active ? "#efe4cf" : "#afc1cc"}
                      fontSize={main ? 17 : 14}
                      fontFamily="serif"
                    >
                      {character.name.slice(0, 2)}
                    </text>
                    <text
                      y={radius + 21}
                      className="character-name"
                      textAnchor="middle"
                      fill={active ? "#e7e9e8" : "#a2b0b7"}
                      fontSize="12"
                    >
                      {character.name}
                    </text>
                    {chosen && (
                      <text
                        y={radius + 39}
                        textAnchor="middle"
                        fill="#8198a6"
                        fontSize="10"
                      >
                        {character.role}
                      </text>
                    )}
                  </g>
                );
              })}
            </>
          ) : (
            <>
              <g
                className="map-terrain"
                fill={`url(#land-${work.id})`}
                stroke={work.accent}
                strokeOpacity=".16"
                strokeWidth="1.2"
              >
                <path d="M51 285L94 203 157 215 206 146 273 173 325 117 390 188 477 159 518 207 580 175 630 235 713 218 749 285 825 272 904 338 897 410 938 461 869 480 834 543 747 546 688 582 603 543 556 592 465 557 408 594 334 539 256 541 217 483 145 460 130 394 70 364Z" />
                <path
                  d="M92 294l45-50 74 11 58-62 67 12 52-42 70 50 79-12 52 39 45-22 79 54 77-11 91 66 78 34-5 67 20 36-64 15-25 66-83 9-63 23-99-33-68 38-86-26-61 24-79-49-69 9-50-58-73-29-28-53z"
                  fill="none"
                  strokeOpacity=".08"
                />
                <path
                  d="M289 264l42-48 41 25 20-21 40 57-31 27 5 26-60 18-33-36-21 14zM643 326l25-45 36 5 30-28 41 57-21 56-59 7zM424 430l44-46 44 14 8 58-40 32z"
                  strokeOpacity=".13"
                />
                <path d="M926 163l19 34-6 30-28 11-12-39zM164 598l39 14 20 31-26 27-39-18-11-32zM853 592l29 30-19 32-31-12z" />
              </g>
              <g fill="none" stroke="#536f7b" strokeOpacity=".28">
                <path d="M367 183q-50 113 55 196t-8 193M716 219q-82 103-41 167t-72 157" />
                <path d="M180 80h650M90 665h820" strokeDasharray="2 8" />
              </g>
              <text
                x="55"
                y="80"
                fill="#506a7a"
                fontSize="10"
                letterSpacing="4"
              >
                NARRATIVE TOPOGRAPHY
              </text>
              <text
                x="680"
                y="670"
                fill="#506a7a"
                fontSize="10"
                letterSpacing="4"
              >
                NOT TO GEOGRAPHIC SCALE
              </text>
              {selection.kind === "chapter" && route.length > 1 && (
                <polyline
                  points={route
                    .map((point) => `${point.x},${point.y}`)
                    .join(" ")}
                  fill="none"
                  stroke={work.accent}
                  strokeOpacity=".55"
                  strokeDasharray="4 8"
                  strokeWidth="1.5"
                />
              )}
              {visibleLocations.map((location) => {
                const point = plot(location);
                const chosen =
                  selection.kind === "location" && selection.id === location.id;
                const active = activeLocations.has(location.id);
                const sameRegion =
                  !chosen &&
                  selection.kind === "location" &&
                  work.locations.find((item) => item.id === selection.id)
                    ?.region === location.region;
                const stats = locationStats.get(location.id);
                return (
                  <g
                    key={location.id}
                    transform={`translate(${point.x} ${point.y})`}
                    role="button"
                    tabIndex={0}
                    aria-label={`查看地点${location.name}`}
                    data-kind={location.kind}
                    data-region={location.region}
                    data-events={stats?.events ?? 0}
                    className={`location-node ${active ? "context-active" : ""} ${chosen ? "is-chosen" : ""} ${sameRegion ? "context-neighbor" : ""} ${work.locations.length > 40 && !active && !chosen && region === "all" ? "quiet-node" : ""}`}
                    onPointerDown={(event) => event.stopPropagation()}
                    onPointerEnter={() => setHovered(location.id)}
                    onPointerLeave={() =>
                      setHovered((value) =>
                        value === location.id ? null : value,
                      )
                    }
                    onFocus={() => setHovered(location.id)}
                    onBlur={() =>
                      setHovered((value) =>
                        value === location.id ? null : value,
                      )
                    }
                    onClick={() =>
                      onSelect({ kind: "location", id: location.id })
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        onSelect({ kind: "location", id: location.id });
                      }
                    }}
                  >
                    <circle r="18" fill="transparent" />
                    {active && (
                      <circle
                        r={chosen ? 26 : 19}
                        fill={work.accent}
                        opacity=".09"
                      />
                    )}
                    <circle
                      className="node-halo"
                      r={chosen ? 30 : 22}
                      fill={work.accent}
                    />
                    {sameRegion && (
                      <circle
                        r="22"
                        fill="none"
                        stroke={work.accent}
                        strokeOpacity=".26"
                        strokeDasharray="2 4"
                      />
                    )}
                    {chosen && (
                      <circle
                        r="30"
                        fill="none"
                        stroke={work.accent}
                        strokeOpacity=".55"
                        strokeDasharray="3 4"
                      />
                    )}
                    <g className="node-glyph">
                      <KindGlyph
                        kind={location.kind}
                        fill={active ? work.accent : "#486675"}
                        stroke={active ? "#e6e4d5" : "#6a8290"}
                      />
                    </g>
                    <text
                      x="0"
                      y="23"
                      textAnchor="middle"
                      fill={active ? "#e9e4d6" : "#9db1bc"}
                      fontSize={chosen ? 13 : 11}
                      className="map-label"
                    >
                      {location.name}
                      {stats && stats.events > 0 && (
                        <tspan className="map-count" dx="3" dy="-3">
                          {stats.events}
                        </tspan>
                      )}
                    </text>
                  </g>
                );
              })}
              <g
                transform="translate(932 588)"
                fill="none"
                stroke="#8b9da7"
                strokeOpacity=".5"
              >
                <circle r="24" />
                <path d="M0-34v68M-34 0h68M0-18l5 20-5-4-5 4z" />
                <text
                  y="-42"
                  textAnchor="middle"
                  fill="#8b9da7"
                  stroke="none"
                  fontSize="11"
                >
                  N
                </text>
              </g>
            </>
          )}
        </g>
        {hoveredCard && (
          <g
            className="map-card"
            transform={`translate(${hoveredCard.x} ${hoveredCard.y})`}
            pointerEvents="none"
          >
            <rect
              width={hoveredCard.width}
              height={hoveredCard.height}
              rx="8"
              fill="#101f2b"
              stroke="#3a6f8c"
              strokeOpacity=".55"
            />
            <text x="14" y="26" fontSize="13" fill="#dfe7ea">
              {hoveredCard.location.name}
            </text>
            <text x="14" y="44" fontSize="11" fill="#7fa3b8">
              {kindLabels[hoveredCard.location.kind]} ·{" "}
              {hoveredCard.location.region}
            </text>
            {hoveredCard.lines.map((line, index) => (
              <text
                key={`${line}-${index}`}
                x="14"
                y={66 + index * 16}
                fontSize="11"
                fill="#9db1bc"
              >
                {line}
              </text>
            ))}
            <text
              x="14"
              y={hoveredCard.height - 12}
              fontSize="11"
              fill="#6e8ca0"
            >
              {hoveredCard.stats
                ? `${hoveredCard.stats.chapters.size} 章 · ${hoveredCard.stats.characters.size} 人 · ${hoveredCard.stats.events} 事件`
                : "暂无事件标注"}
            </text>
          </g>
        )}
      </svg>
      <div className="visualization-bottom">
        {view === "characters" ? (
          <div className="graph-legend">
            <button
              aria-pressed={edgeType === "all"}
              onClick={() => setEdgeType("all")}
            >
              全部
            </button>
            {Object.entries(edgeLabels).map(([type, label]) => (
              <button
                key={type}
                aria-pressed={edgeType === type}
                onClick={() => setEdgeType(edgeType === type ? "all" : type)}
              >
                <i
                  style={{
                    background: edgeColors[type as keyof typeof edgeColors],
                  }}
                />
                {label}
              </button>
            ))}
          </div>
        ) : (
          <div className="map-foot">
            <div className="map-legend" aria-label="地点类型图例">
              {kindOrder.map((kind) => (
                <span key={kind}>
                  <svg viewBox="-10 -10 20 20" aria-hidden="true">
                    <KindGlyph kind={kind} fill="#5d7d8d" stroke="#7d97a4" />
                  </svg>
                  {kindLabels[kind]}
                </span>
              ))}
              <span className="map-legend-note">
                <i>n</i>
                地点名后的上标＝该地点关联事件数
              </span>
            </div>
            <p className="map-disclaimer">
              叙事空间示意 · 非精确地理
              <br />
              <span>
                高亮与虚线表示情节关联，可能包含回忆或转述，并非实际行程。
              </span>
            </p>
          </div>
        )}
        <span className="canvas-hint">
          {view === "characters" ? (
            <>
              <Move size={12} /> 拖动人物或画布
            </>
          ) : (
            <>
              <MousePointer2 size={12} /> 悬停查看详情 · 点击定位 · 拖动平移
            </>
          )}
        </span>
      </div>
    </div>
  );
}
