import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";

// Target: July 15, 2026 — adjust as needed
const DROP_TARGET = new Date("2026-07-15T00:00:00Z").getTime();

function useCountdown(target: number) {
  const calcRemaining = () => {
    const diff = Math.max(0, target - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };
  const [remaining, setRemaining] = useState(calcRemaining);
  useEffect(() => {
    const id = setInterval(() => setRemaining(calcRemaining()), 1000);
    return () => clearInterval(id);
  }, [target]);
  return remaining;
}

function Digit({ value, label }: { value: number; label: string }) {
  const prev = useRef(value);
  const changed = prev.current !== value;
  if (changed) prev.current = value;

  const display = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div className="relative overflow-hidden">
        <motion.span
          key={display}
          initial={changed ? { y: "-100%", opacity: 0 } : false}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="block text-[clamp(2.8rem,10vw,6rem)] leading-none tracking-[-0.06em]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {display}
        </motion.span>
      </div>
      <span
        className="text-[10px] sm:text-xs tracking-[0.3em] uppercase opacity-40"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
      </span>
    </div>
  );
}

export default function NextDropCountdown() {
  const { days, hours, minutes, seconds } = useCountdown(DROP_TARGET);

  return (
    <section className="relative py-10 sm:py-14 px-4 sm:px-8 lg:px-16 overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-8 sm:gap-12"
        >
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-white opacity-30" />
            <span
              className="text-[10px] sm:text-xs tracking-[0.3em] uppercase opacity-50"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Next Drop In
            </span>
            <span className="w-6 h-px bg-white opacity-30" />
          </div>

          {/* Countdown digits */}
          <div className="grid grid-cols-4 gap-4 sm:gap-8 lg:gap-16 w-full max-w-2xl">
            <Digit value={days} label="Days" />
            {/* Colon separator */}
            <Digit value={hours} label="Hours" />
            <Digit value={minutes} label="Minutes" />
            <Digit value={seconds} label="Seconds" />
          </div>

          {/* Dividers between columns — desktop only */}
          <p
            className="text-[11px] sm:text-xs tracking-[0.2em] uppercase opacity-35 max-w-xs"
            style={{ fontFamily: "var(--font-body)" }}
          >
            SS26 Drop 04 — Join the waitlist for early access
          </p>

          <motion.a
            href="#members-club"
            whileHover={{ opacity: 1 }}
            className="inline-flex items-center gap-3 border border-[rgba(255,255,255,0.25)] px-7 py-3 text-xs tracking-[0.22em] uppercase opacity-70 hover:opacity-100 hover:border-white transition-all duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Notify Me
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
