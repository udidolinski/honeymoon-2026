import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  AlertCircle,
  Briefcase,
  ClipboardCheck,
  PlaneTakeoff,
  Download,
  Wifi,
  Clock,
  CalendarDays,
  ChevronDown,
  ListChecks
} from "lucide-react";
import {
  bookingChecklist,
  checkInChecklist,
  downloadChecklist,
  setupChecklist,
  dayOfChecklist,
  packingChecklist
} from "../data/checklist";
import { itinerary } from "../data/itinerary";
import Section from "./Section";
import type { ChecklistItem } from "../data/types";
import { useT, type DictKey } from "../lib/dict";
import { useLocalizeChecklistItem } from "../data/i18n";

const STORAGE_KEY = "honeymoon-checklist-v1";

type TabId = "booking" | "checkin" | "download" | "setup" | "dayof" | "packing";
type ViewId = "day" | "type";

const TABS: { id: TabId; labelKey: DictKey; Icon: typeof Briefcase; items: ChecklistItem[] }[] = [
  { id: "booking", labelKey: "checklist_booking", Icon: ClipboardCheck, items: bookingChecklist },
  { id: "checkin", labelKey: "checklist_checkin", Icon: PlaneTakeoff, items: checkInChecklist },
  { id: "download", labelKey: "checklist_download", Icon: Download, items: downloadChecklist },
  { id: "setup", labelKey: "checklist_setup", Icon: Wifi, items: setupChecklist },
  { id: "dayof", labelKey: "checklist_dayof", Icon: CalendarDays, items: dayOfChecklist },
  { id: "packing", labelKey: "checklist_packing", Icon: Briefcase, items: packingChecklist }
];

/** Which tab (type) each item belongs to — shown as a small label in the by-day view. */
const TYPE_OF: Record<string, TabId> = Object.fromEntries(
  TABS.flatMap(tab => tab.items.map(i => [i.id, tab.id] as const))
);
const TAB_LABEL_KEY: Record<TabId, DictKey> = Object.fromEntries(
  TABS.map(tab => [tab.id, tab.labelKey])
) as Record<TabId, DictKey>;

const ALL_ITEMS = TABS.flatMap(tab => tab.items);

/** Items marked done in the data (e.g. already-booked reservations) start
 *  checked. A user toggle is remembered and overrides this default. */
const DEFAULT_DONE: Record<string, boolean> = Object.fromEntries(
  ALL_ITEMS.filter(i => i.done).map(i => [i.id, true])
);

function itemDone(id: string, checked: Record<string, boolean>): boolean {
  return id in checked ? checked[id] : !!DEFAULT_DONE[id];
}

function loadChecked(): Record<string, boolean> {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

/** Parse "YYYY-MM-DD" or "YYYY-MM-DDTHH:mm" as a local time. A date-only
 *  value counts as due at the end of that day. */
function parseDue(due: string): { dayKey: string; at: Date; hasTime: boolean } {
  const [d, tm] = due.split("T");
  const [y, m, day] = d.split("-").map(Number);
  const [hh, mm] = tm ? tm.split(":").map(Number) : [23, 59];
  return { dayKey: d, at: new Date(y, m - 1, day, hh, mm), hasTime: !!tm };
}

/** Friendly names for the days before the trip, which have no itinerary chapter. */
const PRE_TRIP_TITLES: Record<string, string> = {
  "2026-10-02": "Book & confirm",
  "2026-10-03": "Download, set up & pack"
};

function dayHeading(dayKey: string, beforeFlyLabel: string): { date: string; title: string } {
  const [y, m, d] = dayKey.split("-").map(Number);
  const date = new Date(y, m - 1, d).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
  const day = itinerary.find(x => x.date === dayKey);
  return {
    date,
    title: day ? day.title : (PRE_TRIP_TITLES[dayKey] ?? (dayKey < itinerary[0].date ? beforeFlyLabel : ""))
  };
}

function ChecklistList({
  items,
  checked,
  onToggle,
  showType = false,
  now
}: {
  items: ChecklistItem[];
  checked: Record<string, boolean>;
  onToggle: (id: string) => void;
  showType?: boolean;
  now: number;
}) {
  const t = useT();
  const localizeChecklistItem = useLocalizeChecklistItem();
  return (
    <ul className="space-y-3">
      {items.map(rawItem => {
        const item = localizeChecklistItem(rawItem);
        const isDone = itemDone(item.id, checked);
        const overdue = !isDone && !!item.due && parseDue(item.due).at.getTime() < now;
        return (
          <li
            key={item.id}
            className={`card-paper p-4 transition-opacity ${isDone ? "opacity-60" : ""}`}
          >
            <label className="flex gap-3 cursor-pointer items-start">
              <input
                type="checkbox"
                checked={isDone}
                onChange={() => onToggle(item.id)}
                className="mt-1 w-4 h-4 accent-terracotta-500 cursor-pointer"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-start gap-2 flex-wrap">
                  <span
                    className={`font-medium ${isDone ? "line-through text-ink-700/60" : "text-ink-900"}`}
                  >
                    {item.text}
                  </span>
                  {item.when && (
                    <span className="pill">
                      <Clock size={10} /> {item.when}
                    </span>
                  )}
                  {overdue && (
                    <span className="pill pill-terracotta">
                      <AlertCircle size={10} /> {t("checklist_overdue")}
                    </span>
                  )}
                  {item.urgent && !isDone && !overdue && (
                    <span className="pill pill-terracotta">
                      <AlertCircle size={10} /> {t("checklist_urgent")}
                    </span>
                  )}
                  {showType && TYPE_OF[item.id] && (
                    <span className="pill pill-ink">{t(TAB_LABEL_KEY[TYPE_OF[item.id]])}</span>
                  )}
                </div>
                {item.detail && (
                  <p className="text-xs text-ink-700/80 mt-1 leading-relaxed">{item.detail}</p>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link mt-1.5"
                  >
                    <ExternalLink size={11} /> {t("open_external")}
                  </a>
                )}
              </div>
            </label>
          </li>
        );
      })}
    </ul>
  );
}

export default function ChecklistSection() {
  const t = useT();
  const [view, setView] = useState<ViewId>("day");
  const [tab, setTab] = useState<TabId>("booking");
  const [checked, setChecked] = useState<Record<string, boolean>>(() => loadChecked());
  const [openOverride, setOpenOverride] = useState<Record<string, boolean>>({});
  const now = useMemo(() => Date.now(), []);

  const toggle = (id: string) => {
    setChecked(prev => {
      const next = { ...prev, [id]: !itemDone(id, prev) };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  /* By-day groups: every task under the date it is due, in time order. */
  const dayGroups = useMemo(() => {
    const map = new Map<string, ChecklistItem[]>();
    for (const item of ALL_ITEMS) {
      const key = item.due ? parseDue(item.due).dayKey : "anytime";
      map.set(key, [...(map.get(key) ?? []), item]);
    }
    const stamp = (i: ChecklistItem) =>
      i.due ? parseDue(i.due).at.getTime() - (parseDue(i.due).hasTime ? 0 : 86_400_000) : 0;
    return [...map.entries()]
      .sort(([a], [b]) => (a === "anytime" ? 1 : b === "anytime" ? -1 : a.localeCompare(b)))
      .map(([key, items]) => ({ key, items: [...items].sort((x, y) => stamp(x) - stamp(y)) }));
  }, []);

  const list = (TABS.find(x => x.id === tab) ?? TABS[0]).items;
  const scope = view === "day" ? ALL_ITEMS : list;
  const doneCount = scope.filter(i => itemDone(i.id, checked)).length;

  const pillClass = (active: boolean) =>
    `px-4 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 whitespace-nowrap min-h-11 ${
      active
        ? "bg-ink-900 text-cream-50"
        : "bg-cream-50 border border-cream-300 text-ink-800 hover:border-terracotta-500/40"
    }`;

  return (
    <Section
      id="checklist"
      eyebrow={t("checklist_eyebrow")}
      title={t("checklist_title")}
      kicker={t("checklist_kicker")}
    >
      <div className="flex gap-2 mb-3">
        <button onClick={() => setView("day")} className={pillClass(view === "day")}>
          <CalendarDays size={14} />
          {t("checklist_byday")}
        </button>
        <button onClick={() => setView("type")} className={pillClass(view === "type")}>
          <ListChecks size={14} />
          {t("checklist_bytype")}
        </button>
      </div>

      {view === "type" && (
        <div className="-mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto scrollbar-hide mb-2">
          <div className="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
            {TABS.map(({ id, labelKey, Icon, items }) => (
              <button key={id} onClick={() => setTab(id)} className={pillClass(tab === id)}>
                <Icon size={14} />
                {t(labelKey)}
                <span className={`text-xs ${tab === id ? "text-cream-200" : "text-ink-700/60"}`}>
                  {items.filter(i => itemDone(i.id, checked)).length}/{items.length}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mb-6 flex items-center gap-3">
        {/* progress ring */}
        <div className="relative w-10 h-10 shrink-0" aria-hidden>
          <svg viewBox="0 0 36 36" className="w-10 h-10 -rotate-90">
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-cream-300/80"
            />
            <circle
              cx="18"
              cy="18"
              r="15.9"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              className="text-terracotta-500 transition-[stroke-dasharray] duration-500"
              strokeDasharray={`${
                scope.length === 0 ? 0 : (doneCount / scope.length) * 100
              } 100`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-ink-900">
            {Math.round((doneCount / Math.max(1, scope.length)) * 100)}%
          </div>
        </div>
        <div className="text-sm text-ink-700/85">
          {t("checklist_progress", { done: doneCount, total: scope.length })}
        </div>
      </div>

      {view === "type" ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22 }}
          >
            <ChecklistList items={list} checked={checked} onToggle={toggle} now={now} />
          </motion.div>
        </AnimatePresence>
      ) : (
        <div className="space-y-6">
          {dayGroups.map(({ key, items }) => {
            const done = items.filter(i => itemDone(i.id, checked)).length;
            const allDone = done === items.length;
            const isOpen = openOverride[key] ?? !allDone;
            const heading =
              key === "anytime"
                ? { date: t("checklist_anytime"), title: "" }
                : dayHeading(key, t("checklist_before_fly"));
            return (
              <div key={key}>
                <button
                  onClick={() => setOpenOverride(prev => ({ ...prev, [key]: !isOpen }))}
                  className="w-full flex items-center gap-3 text-start mb-3"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1 min-w-0">
                    <span className="font-serif text-xl text-ink-900">{heading.date}</span>
                    {heading.title && (
                      <span className="text-sm text-terracotta-600 ms-2">· {heading.title}</span>
                    )}
                  </div>
                  <span className="text-xs text-ink-700/70 shrink-0">
                    {done}/{items.length}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-ink-700/60 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <ChecklistList
                    items={items}
                    checked={checked}
                    onToggle={toggle}
                    showType
                    now={now}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </Section>
  );
}
