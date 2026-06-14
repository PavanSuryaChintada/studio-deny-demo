import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Instagram } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: "cg-01",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80&auto=format",
    handle: "@mxv.studio",
    tall: true,
  },
  {
    id: "cg-02",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80&auto=format",
    handle: "@deny.fitted",
    tall: false,
  },
  {
    id: "cg-03",
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&q=80&auto=format",
    handle: "@soulcity_k",
    tall: false,
  },
  {
    id: "cg-04",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80&auto=format",
    handle: "@izumi.drops",
    tall: true,
  },
  {
    id: "cg-05",
    image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80&auto=format",
    handle: "@vibes_raw",
    tall: false,
  },
  {
    id: "cg-06",
    image: "https://images.unsplash.com/photo-1544957992-20514f595d6f?w=800&q=80&auto=format",
    handle: "@streetframe_",
    tall: false,
  },
  {
    id: "cg-07",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80&auto=format",
    handle: "@lnr.studio",
    tall: true,
  },
  {
    id: "cg-08",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80&auto=format",
    handle: "@cold.fits",
    tall: false,
  },
];

interface LightboxProps {
  item: (typeof GALLERY_ITEMS)[0];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ item, onClose, onPrev, onNext }: LightboxProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-2xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.image}
          alt={item.handle}
          className="w-full max-h-[80vh] object-contain"
        />
        <div className="flex items-center justify-between mt-3 px-1">
          <div className="flex items-center gap-2">
            <Instagram className="w-3.5 h-3.5 opacity-40" />
            <span
              className="text-xs tracking-[0.15em] opacity-60"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {item.handle}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Prev / Next */}
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full px-4 py-6 opacity-40 hover:opacity-80 transition-opacity"
          style={{ fontFamily: "var(--font-body)" }}
          aria-label="Previous"
        >
          ←
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full px-4 py-6 opacity-40 hover:opacity-80 transition-opacity"
          style={{ fontFamily: "var(--font-body)" }}
          aria-label="Next"
        >
          →
        </button>
      </motion.div>
    </motion.div>
  );
}

export default function CommunityGallery() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = useCallback((idx: number) => setLightboxIdx(idx), []);
  const closeLightbox = useCallback(() => setLightboxIdx(null), []);
  const prevItem = useCallback(
    () => setLightboxIdx((i) => (i === null ? null : (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length)),
    []
  );
  const nextItem = useCallback(
    () => setLightboxIdx((i) => (i === null ? null : (i + 1) % GALLERY_ITEMS.length)),
    []
  );

  return (
    <section className="py-10 sm:py-14 border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14"
        >
          <div>
            <p
              className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Community
            </p>
            <h2
              className="text-[clamp(2rem,8vw,5rem)] leading-none tracking-[-0.04em] uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              WORN BY THE
              <br />
              COMMUNITY
            </h2>
          </div>
          <a
            href="https://instagram.com/studiodeny"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-opacity shrink-0 mb-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <Instagram className="w-3.5 h-3.5" /> @STUDIODENY
          </a>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden mb-3 sm:mb-4 cursor-pointer break-inside-avoid"
              onClick={() => openLightbox(i)}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.handle}'s post`}
              onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
            >
              <div className={`relative overflow-hidden bg-[var(--gray-900)] ${item.tall ? "aspect-[3/4]" : "aspect-square"}`}>
                <img
                  src={item.image}
                  alt={`Community post by ${item.handle}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.06]"
                />

                {/* Hover overlay */}
                <motion.div
                  initial={false}
                  className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                  <div className="text-center">
                    <Instagram className="w-5 h-5 mx-auto mb-2 opacity-80" />
                    <span
                      className="text-[10px] tracking-[0.2em] uppercase opacity-80"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.handle}
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load more indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10 sm:mt-14"
        >
          <button
            type="button"
            className="inline-flex items-center gap-3 border border-white/15 px-8 py-3 text-xs tracking-[0.24em] uppercase opacity-50 hover:opacity-80 hover:border-white/30 transition-all duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Load More
          </button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <Lightbox
            item={GALLERY_ITEMS[lightboxIdx]}
            onClose={closeLightbox}
            onPrev={prevItem}
            onNext={nextItem}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
