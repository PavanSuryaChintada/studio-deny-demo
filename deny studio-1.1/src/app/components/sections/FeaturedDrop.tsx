import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const FEATURED_PRODUCTS = [
  {
    id: "fp-01",
    name: "STUDIO BOMBER",
    price: "$220",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200&q=80&auto=format",
  },
  {
    id: "fp-02",
    name: "BLACK CARGO SET",
    price: "$175",
    badge: "LIMITED",
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=1200&q=80&auto=format",
  },
  {
    id: "fp-03",
    name: "WIDE LEG DENIM",
    price: "$130",
    badge: null,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=1200&q=80&auto=format",
  },
  {
    id: "fp-04",
    name: "SIGNATURE KNIT",
    price: "$150",
    badge: "NEW",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200&q=80&auto=format",
  },
];

interface QuickViewModalProps {
  product: (typeof FEATURED_PRODUCTS)[0];
  onClose: () => void;
}

function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 bg-[var(--gray-900)] border border-[rgba(255,255,255,0.1)] w-full sm:max-w-2xl sm:rounded-none overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Image */}
          <div className="aspect-[4/3] sm:aspect-auto sm:min-h-[360px] overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col justify-between p-6 sm:p-8">
            <div>
              <button
                type="button"
                onClick={onClose}
                className="text-[10px] tracking-[0.25em] uppercase opacity-40 hover:opacity-80 transition-opacity mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Close ✕
              </button>
              {product.badge && (
                <span
                  className="inline-block text-[9px] tracking-[0.28em] uppercase border border-white/20 px-2 py-0.5 mb-3 opacity-70"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {product.badge}
                </span>
              )}
              <h3
                className="text-[clamp(1.6rem,5vw,2.4rem)] leading-none tracking-[-0.03em] uppercase mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {product.name}
              </h3>
              <p
                className="text-sm tracking-[0.15em] uppercase opacity-60 mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {product.price}
              </p>
              <p
                className="text-sm opacity-60 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Premium construction, elevated silhouette. Designed for daily wear with a lifetime of movement.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              <button
                type="button"
                className="w-full py-3.5 bg-white text-black text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Add to Cart
              </button>
              <button
                type="button"
                className="w-full py-3.5 border border-white/20 text-xs tracking-[0.2em] uppercase hover:border-white/50 transition-colors"
                style={{ fontFamily: "var(--font-body)" }}
              >
                View Full Details
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProductCard({ product, index }: { product: (typeof FEATURED_PRODUCTS)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [quickView, setQuickView] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="group relative flex-shrink-0 w-[80vw] sm:w-auto"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-[var(--gray-900)]">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-[900ms] ease-out"
            style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badge */}
          {product.badge && (
            <span
              className="absolute top-4 left-4 text-[9px] tracking-[0.28em] uppercase bg-white text-black px-2 py-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {product.badge}
            </span>
          )}

          {/* Quick View Overlay */}
          <motion.div
            initial={false}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-x-0 bottom-0 p-4"
          >
            <button
              type="button"
              onClick={() => setQuickView(true)}
              className="w-full py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-[10px] tracking-[0.24em] uppercase hover:bg-white hover:text-black transition-all duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Quick View
            </button>
          </motion.div>
        </div>

        {/* Card info */}
        <div className="mt-4 flex items-start justify-between gap-2">
          <h3
            className="text-[clamp(1rem,3vw,1.35rem)] leading-tight tracking-[-0.01em] uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {product.name}
          </h3>
          <span
            className="text-xs tracking-[0.15em] uppercase opacity-60 mt-0.5 shrink-0"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {product.price}
          </span>
        </div>
      </motion.div>

      {/* Quick View Modal */}
      {quickView && (
        <QuickViewModal product={product} onClose={() => setQuickView(false)} />
      )}
    </>
  );
}

export default function FeaturedDrop() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-10 sm:py-14 overflow-hidden border-b border-[rgba(255,255,255,0.06)]">
      {/* Header */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-16 mb-8 sm:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex items-end justify-between gap-6"
        >
          <div>
            <p
              className="text-[10px] tracking-[0.28em] uppercase opacity-50 mb-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              SS26 Collection
            </p>
            <h2
              className="text-[clamp(2rem,8vw,5rem)] leading-none tracking-[-0.04em] uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              FEATURED DROP
            </h2>
          </div>
          <a
            href="/new-drop"
            className="hidden sm:inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity shrink-0 mb-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            View All <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </div>

      {/* Mobile: horizontal scroll | Desktop: grid */}
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Mobile scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 sm:hidden"
          style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
        >
          {FEATURED_PRODUCTS.map((product, i) => (
            <div key={product.id} className="snap-start shrink-0 w-[80vw]">
              <ProductCard product={product} index={i} />
            </div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {FEATURED_PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>

      {/* Mobile CTA */}
      <div className="flex justify-center mt-8 sm:hidden px-4">
        <a
          href="/new-drop"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase opacity-60 hover:opacity-100 transition-opacity"
          style={{ fontFamily: "var(--font-body)" }}
        >
          View All <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}
