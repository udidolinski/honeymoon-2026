import { Navigation, Map as MapIcon } from "lucide-react";
import {
  googleMapsPlaceUrl,
  appleMapsUrl,
  wazePlaceUrl,
  type NavMode,
  type NavTarget
} from "../lib/nav";
import { useT } from "../lib/dict";

interface Props {
  /** Place name — used to build the search URL so each app opens the
   *  actual place's listing instead of just dropping a coord pin. */
  name: string;
  /** Lat, lon. Used by every app as a fallback when the search needs it. */
  coords: [number, number];
  /** Optional street address. Sharpens the search; not required. */
  address?: string;
  /** Navigate to the coordinates only (e.g. a hotel that is not booked yet). */
  byCoords?: boolean;
  /** "place" opens the listing; "directions" jumps straight to the route. */
  mode?: NavMode;
  /** "inline" is the tiny text-link row; "buttons" is three tappable buttons. */
  variant?: "inline" | "buttons";
  /** Icon size in px. Defaults to 12, the body-link size. */
  size?: number;
  className?: string;
}

function WazeIcon({ size }: { size: number }) {
  return (
    /* Waze app icon — a small abstract glyph that reads as a speech
       bubble / pin (the brand-mark shape). */
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 11a9 9 0 1 1 16.5 5l1 4-4-1A9 9 0 0 1 3 11z" />
      <circle cx="9" cy="11" r="0.8" fill="currentColor" />
      <circle cx="15" cy="11" r="0.8" fill="currentColor" />
    </svg>
  );
}

/* Most of the trip happens in the car, so every place offers Google Maps,
 * Apple Maps and Waze. Attractions and restaurants deep-link to the place's
 * listing (so you can check hours and photos first); hotels and airports use
 * `mode="directions"` to start the route in one tap. */
export default function NavigateLinks({
  name,
  coords,
  address,
  byCoords,
  mode = "place",
  variant = "inline",
  size = 12,
  className
}: Props) {
  const t = useT();
  const target: NavTarget = { name, coords, address, byCoords };
  const apps = [
    {
      id: "google",
      href: googleMapsPlaceUrl(target, mode),
      label: t(variant === "buttons" ? "navigate_google_full" : "navigate_google"),
      aria: t("navigate_google_aria"),
      icon: <Navigation size={size} />,
      hover: "hover:text-terracotta-600"
    },
    {
      id: "apple",
      href: appleMapsUrl(target, mode),
      label: t(variant === "buttons" ? "navigate_apple_full" : "navigate_apple"),
      aria: t("navigate_apple_aria"),
      icon: <MapIcon size={size} />,
      hover: "hover:text-terracotta-600"
    },
    {
      id: "waze",
      href: wazePlaceUrl(target, mode),
      label: t("navigate_waze"),
      aria: t("navigate_waze_aria"),
      icon: <WazeIcon size={size} />,
      hover: "hover:text-[#33CCFF]"
    }
  ];

  if (variant === "buttons") {
    return (
      <div className={`flex flex-wrap gap-2 ${className ?? ""}`}>
        {apps.map(a => (
          <a
            key={a.id}
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={a.aria}
            className="inline-flex items-center justify-center gap-1.5 px-3 min-h-10 rounded-full border border-cream-300 bg-cream-50 text-sm font-medium text-ink-800 hover:border-terracotta-500/50 transition-colors"
          >
            {a.icon}
            <span>{a.label}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      {apps.map((a, i) => (
        <span key={a.id} className="inline-flex items-center gap-3">
          {i > 0 && (
            <span className="text-ink-700/30 text-xs leading-none" aria-hidden>
              ·
            </span>
          )}
          <a
            href={a.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={a.aria}
            className={`inline-flex items-center gap-1.5 text-xs font-medium text-ink-700 ${a.hover} transition-colors`}
          >
            {a.icon}
            <span>{a.label}</span>
          </a>
        </span>
      ))}
    </span>
  );
}
