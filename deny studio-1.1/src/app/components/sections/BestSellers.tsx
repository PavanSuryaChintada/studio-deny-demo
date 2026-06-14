import { useState } from "react";
import { motion } from "motion/react";
import { Heart, ShoppingBag, Star } from "lucide-react";

const BEST_SELLERS = [
  {
    id: "bs-01",
    name: "ESSENTIAL HOODIE",
    price: "$120",
    rating: 4.9,
    reviews: 238,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=900&q=80&auto=format",
    badge: "BEST SELLER",
  },
  {
    id: "bs-02",
    name: "URBAN RELAXED TEE",
    price: "$65",
    rating: 4.8,
    reviews: 411,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=900&q=80&auto=format",
    badge: null,
  },
  {
    id: "bs-03",
    name: "CORE STREET JEANS",
    price: "$110",
    rating: 4.7,
    reviews: 192,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=900&q=80&auto=format",
    badge: "TRENDING",
  },
  {
    id: "bs-04",
    name: "MONOCHROME JACKET",
    price: "$180",
    rating: 4.9,
    reviews: 87,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=900&q=80&auto=format",
    badge: "LIMITED",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star
          key={n}
          className="w-3 h-3"
          style={{ opacity: n <= Math.round(rating) ? 0.9 : 0.2, fill: n <= Math.round(rating) ? "currentColor" : "none" }}
        />
      ))}
    </div>
  );
}

function BestSellerCard({ product, index }: { product: (typeof BEST_SELLERS)[0]; index: number }) {
  const [wishlisted, setWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: index * 0.08 }}
      viewport={{ once: true }}
      className="group relative"
    >
      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[var(--gray-900)] mb-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Badge */}
        {product.badge && (
          <span
            className="absolute top-3 left-3 text-[9px] tracking-[0.24em] uppercase bg-white text-black px-2 py-0.5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {product.badge}
          </span>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={() => setWishlisted((v) => !v)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/40 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300"
        >
          <Heart
            className="w-3.5 h-3.5 transition-all duration-300"
            style={{ fill: wishlisted ? "currentColor" : "none", opacity: wishlisted ? 1 : 0.6 }}
          />
        </button>

        {/* Add to Cart on Hover */}
        <motion.div
          initial={false}
          animate={{ y: 0, opacity: 1 }}
          className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out p-3"
        >
          <button
            type="button"
            onClick={handleCart}
            className="w-full py-2.5 flex items-center justify-center gap-2 bg-white text-black text-[10px] tracking-[0.2em] uppercase hover:bg-white/90 transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {addedToCart ? (
              "ADDED ✓"
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                ADD TO CART
              </>
            )}
          </button>
        </motion.div>
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <div className="flex items-start justify-between gap-2">
          <h3
            className="text-[clamp(0.9rem,2.5vw,1.1rem)] leading-tight tracking-[-0.01em] uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {product.name}
          </h3>
          <span
            className="text-xs tracking-[0.12em] uppercase opacity-70 shrink-0 mt-0.5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {product.price}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span
            className="text-[10px] opacity-40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            ({product.reviews})
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function BestSellers() {
  return (
    <section className="py-10 sm:py-14 border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14"
        >
          <p
            className="text-[10px] tracking-[0.3em] uppercase opacity-50 mb-2"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Most Wanted
          </p>
          <h2
            className="text-[clamp(2rem,8vw,5rem)] leading-none tracking-[-0.04em] uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            BEST SELLERS
          </h2>
        </motion.div>

        {/* Grid: 2 col mobile / 4 col desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 sm:gap-x-6 lg:gap-x-8">
          {BEST_SELLERS.map((product, i) => (
            <BestSellerCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
