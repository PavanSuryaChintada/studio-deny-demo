import { useRef, useState } from "react";

interface MarqueeSeparatorProps {
  items?: string[];
  speed?: number; // seconds for one full cycle
}

const DEFAULT_ITEMS = [
  "PREMIUM STREETWEAR",
  "LIMITED DROP",
  "DESIGNED FOR CREATORS",
  "STUDIO DENY",
  "ELEVATED ESSENTIALS",
  "MADE DIFFERENT",
];

export default function MarqueeSeparator({
  items = DEFAULT_ITEMS,
  speed = 28,
}: MarqueeSeparatorProps) {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Quadruple for seamless looping
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative overflow-hidden border-y border-[rgba(255,255,255,0.07)] py-3"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden="true"
    >
      {/* Left / right fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[var(--deep-black)] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[var(--deep-black)] to-transparent z-10" />

      <div
        ref={trackRef}
        className="flex items-center whitespace-nowrap will-change-transform"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span className="text-[11px] sm:text-xs tracking-[0.26em] uppercase opacity-40">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-white opacity-20 shrink-0" />
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
