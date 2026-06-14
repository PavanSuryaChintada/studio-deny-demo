import { motion } from "motion/react";

export default function BrandManifesto() {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Large ghost text background */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="text-[18vw] leading-none tracking-[-0.06em] uppercase opacity-[0.025]"
          style={{ fontFamily: "var(--font-display)", whiteSpace: "nowrap" }}
        >
          DENY
        </span>
      </div>

      <div className="max-w-[1320px] mx-auto relative z-10 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4 mb-10 sm:mb-16"
        >
          <span className="w-12 h-px bg-white opacity-20" />
          <span
            className="text-[10px] tracking-[0.35em] uppercase opacity-40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Brand Manifesto
          </span>
          <span className="w-12 h-px bg-white opacity-20" />
        </motion.div>

        {/* Main headline — split word-by-word */}
        <div className="overflow-hidden mb-8 sm:mb-12">
          {"WE DON'T FOLLOW TRENDS.".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              transition={{ duration: 0.75, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="inline-block mr-[0.2em] last:mr-0"
              style={{ display: "inline-block" }}
            >
              <span
                className="block text-[clamp(2.6rem,12vw,9rem)] leading-[0.88] tracking-[-0.05em] uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {word}
              </span>
            </motion.span>
          ))}
        </div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-24 h-px bg-white/20 mx-auto mb-8 sm:mb-12 origin-left"
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-[clamp(1rem,2.5vw,1.35rem)] leading-[1.55] opacity-60 max-w-2xl mx-auto font-light"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Studio Deny exists for creators, rule-breakers, and people who move differently.
        </motion.p>
      </div>
    </section>
  );
}
