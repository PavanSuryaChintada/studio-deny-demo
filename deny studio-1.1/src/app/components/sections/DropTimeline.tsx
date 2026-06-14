import { motion } from "motion/react";

const DROPS = [
  {
    id: "DROP 01",
    title: "UTILITY ORIGINS",
    season: "FW24",
    status: "complete" as const,
  },
  {
    id: "DROP 02",
    title: "MONOCHROME ERA",
    season: "SS25",
    status: "complete" as const,
  },
  {
    id: "DROP 03",
    title: "STREET IDENTITY",
    season: "FW25",
    status: "live" as const,
  },
  {
    id: "DROP 04",
    title: "ELEVATED TENSION",
    season: "SS26",
    status: "coming" as const,
  },
];

const statusConfig = {
  complete: { label: "✓", labelFull: "Complete", opacity: "opacity-50", dotColor: "bg-white opacity-40" },
  live: { label: "LIVE", labelFull: "Live Now", opacity: "opacity-100", dotColor: "bg-white opacity-100" },
  coming: { label: "COMING SOON", labelFull: "Coming Soon", opacity: "opacity-30", dotColor: "bg-white opacity-20" },
};

export default function DropTimeline() {
  return (
    <section className="py-10 sm:py-14 border-b border-[rgba(255,255,255,0.06)] overflow-hidden">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 sm:mb-20"
        >
          <p
            className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Release History
          </p>
          <h2
            className="text-[clamp(2rem,8vw,5rem)] leading-none tracking-[-0.04em] uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            DROP TIMELINE
          </h2>
        </motion.div>

        {/* ── MOBILE: Vertical timeline ── */}
        <div className="flex flex-col gap-0 sm:hidden">
          {DROPS.map((drop, i) => {
            const cfg = statusConfig[drop.status];
            return (
              <motion.div
                key={drop.id}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex gap-5 pb-10 last:pb-0 ${cfg.opacity}`}
              >
                {/* Vertical line */}
                <div className="flex flex-col items-center">
                  <div className={`w-2 h-2 rounded-full shrink-0 mt-1.5 ${cfg.dotColor}`} />
                  {i < DROPS.length - 1 && (
                    <div className="w-px flex-1 bg-white/10 mt-2" />
                  )}
                </div>

                <div>
                  <span
                    className="text-[9px] tracking-[0.28em] uppercase opacity-40 block mb-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {drop.id} — {drop.season}
                  </span>
                  <h3
                    className="text-[clamp(1.3rem,5vw,1.8rem)] leading-tight tracking-[-0.02em] uppercase"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {drop.title}
                  </h3>
                  <span
                    className="inline-block mt-2 text-[9px] tracking-[0.24em] uppercase border border-white/20 px-2 py-0.5"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {cfg.label}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── DESKTOP: Horizontal timeline ── */}
        <div className="hidden sm:block">
          {/* Track */}
          <div className="relative flex items-start gap-0">
            {/* Horizontal connecting line */}
            <div className="absolute top-3 left-0 right-0 h-px bg-white/10" aria-hidden />

            {DROPS.map((drop, i) => {
              const cfg = statusConfig[drop.status];
              return (
                <motion.div
                  key={drop.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className={`relative flex-1 flex flex-col items-center text-center group ${cfg.opacity}`}
                >
                  {/* Dot */}
                  <div
                    className={`w-2.5 h-2.5 rounded-full border border-white/30 mb-6 relative z-10 ${drop.status === "live" ? "bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]" : "bg-transparent"}`}
                  />

                  {/* Content */}
                  <span
                    className="text-[9px] tracking-[0.28em] uppercase opacity-40 block mb-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {drop.id}
                  </span>
                  <h3
                    className="text-[clamp(1.2rem,3vw,2rem)] leading-tight tracking-[-0.02em] uppercase px-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {drop.title}
                  </h3>
                  <span
                    className="text-[9px] tracking-[0.2em] uppercase opacity-50 mt-2"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {drop.season}
                  </span>
                  <span
                    className={`inline-block mt-3 text-[9px] tracking-[0.22em] uppercase border px-2 py-0.5 ${drop.status === "live" ? "border-white/60 text-white" : "border-white/15"}`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {cfg.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
