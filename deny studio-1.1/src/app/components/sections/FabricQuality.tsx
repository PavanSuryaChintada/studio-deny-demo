import { motion } from "motion/react";

const FEATURES = [
  {
    label: "Premium Cotton",
    description: "230 GSM heavyweight cotton. Structured, breathable, made for longevity.",
  },
  {
    label: "Oversized Fit",
    description: "Generous proportions cut for movement — not a size up, a silhouette choice.",
  },
  {
    label: "Long-lasting Print",
    description: "Screen-printed at 180°C with plastisol inks. Holds after hundreds of washes.",
  },
  {
    label: "Heavyweight Construction",
    description: "Reinforced seams and double-stitch hems built to outlast trend cycles.",
  },
];

export default function FabricQuality() {
  return (
    <section className="py-10 sm:py-14 border-b border-[rgba(255,255,255,0.06)] overflow-hidden">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Left: Photography */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80&auto=format"
                alt="Fabric quality closeup"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            {/* Floating detail tile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-4 sm:-right-8 bg-[var(--gray-900)] border border-[rgba(255,255,255,0.1)] p-4 sm:p-6 max-w-[220px]"
            >
              <p
                className="text-[9px] tracking-[0.26em] uppercase opacity-40 mb-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Material
              </p>
              <p
                className="text-[clamp(1.2rem,4vw,1.8rem)] leading-none tracking-[-0.02em] uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                230 GSM
              </p>
              <p
                className="text-xs opacity-50 mt-1 leading-snug"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Heavyweight premium cotton
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Feature list */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="pt-8 lg:pt-0 pb-8 lg:pb-0"
          >
            {/* Eyebrow */}
            <p
              className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Built Different
            </p>

            <h2
              className="text-[clamp(2.2rem,8vw,4.5rem)] leading-none tracking-[-0.04em] uppercase mb-10 sm:mb-14"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FABRIC &amp;
              <br />
              QUALITY
            </h2>

            {/* Features */}
            <div className="space-y-0">
              {FEATURES.map((feature, i) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-4 sm:gap-6 py-5 border-b border-[rgba(255,255,255,0.08)] last:border-0"
                >
                  {/* Number */}
                  <span
                    className="text-[10px] tracking-[0.2em] opacity-25 mt-1 shrink-0 w-6"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    0{i + 1}
                  </span>

                  <div>
                    <h3
                      className="text-[clamp(1rem,3vw,1.35rem)] leading-tight tracking-[-0.01em] uppercase mb-1.5 group-hover:opacity-80 transition-opacity"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {feature.label}
                    </h3>
                    <p
                      className="text-sm leading-relaxed opacity-50"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
