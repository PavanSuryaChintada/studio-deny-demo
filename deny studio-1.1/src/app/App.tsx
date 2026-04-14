import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Instagram, Facebook, Twitter, ArrowRight, ChevronDown, Star } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [scrollY, setScrollY] = useState(0);
  const heroParallax = Math.min(scrollY * 0.4, 120);
  const lookbookRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: lookbookProgress } = useScroll({
    target: lookbookRef,
    offset: ["start end", "end start"],
  });
  const lookbookParallaxA = useSpring(useTransform(lookbookProgress, [0, 1], [-30, 90]), {
    stiffness: 100,
    damping: 26,
  });
  const lookbookParallaxB = useSpring(useTransform(lookbookProgress, [0, 1], [-20, 72]), {
    stiffness: 100,
    damping: 26,
  });
  const lookbookTextA = useSpring(useTransform(lookbookProgress, [0, 1], [-40, 28]), {
    stiffness: 120,
    damping: 30,
  });
  const lookbookTextB = useSpring(useTransform(lookbookProgress, [0, 1], [40, -24]), {
    stiffness: 120,
    damping: 30,
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[var(--deep-black)] text-[var(--pure-white)] overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 lg:px-16 py-4 sm:py-6 flex justify-between items-center mix-blend-difference"
      >
        <div className="tracking-[-0.02em]" style={{ fontFamily: "var(--font-display)" }}>
          <span className="text-[1.65rem] sm:text-[2.5rem] leading-none">STUDIO DENY</span>
        </div>
        <div className="hidden sm:flex gap-8 items-center" style={{ fontFamily: "var(--font-body)" }}>
          <a href="#shop" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
            SHOP
          </a>
          <a href="#lookbook" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
            LOOKBOOK
          </a>
          <a href="#about" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
            ABOUT
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-[82vh] sm:min-h-[86vh] w-full flex items-center justify-center overflow-hidden px-4 sm:px-8 lg:px-16 pt-28 sm:pt-32 pb-16">
        {/* Background Image with Blur */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1762666168682-8229f2a62305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`,
            filter: "blur(8px) brightness(0.4)",
            transform: `translateY(${heroParallax}px)`,
          }}
        />

        {/* Grain Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.15] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1320px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6 sm:space-y-8"
          >
            <h1
              className="text-[clamp(2.4rem,13vw,8.5rem)] leading-[0.88] tracking-[-0.04em] uppercase max-w-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              IN THE CUT. NOT IN THE CROWD.
            </h1>
            <p
              className="text-base sm:text-lg leading-relaxed max-w-xl opacity-90"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Elevated streetwear engineered for creators. Limited drops, premium cuts, and a fit made to stand
              apart.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <motion.a
                href="#shop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="group relative overflow-hidden px-8 py-3 min-h-11 border border-[var(--pure-white)] bg-[var(--pure-white)] text-[var(--deep-black)] hover:bg-transparent hover:text-[var(--pure-white)] transition-colors duration-300 inline-flex items-center justify-center gap-2"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <span className="text-sm tracking-[0.14em]">SHOP THE DROP</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <a
                href="#lookbook"
                className="px-8 py-3 min-h-11 border border-[var(--gray-700)] text-sm tracking-[0.14em] hover:border-[var(--pure-white)] transition-colors duration-300 inline-flex items-center justify-center"
                style={{ fontFamily: "var(--font-body)" }}
              >
                VIEW LOOKBOOK
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-center"
        >
          <div className="flex flex-col items-center gap-2 opacity-70">
            <span className="text-[11px] tracking-[0.2em]" style={{ fontFamily: "var(--font-body)" }}>
              SCROLL
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        </motion.div>
      </section>

      {/* Editorial Marquee */}
      <section className="py-5 sm:py-6 border-y border-[rgba(255,255,255,0.16)] overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="whitespace-nowrap flex gap-8 sm:gap-12 text-xs sm:text-sm tracking-[0.2em] uppercase opacity-70"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {Array.from({ length: 3 }).map((_, row) => (
            <span key={row} className="inline-flex gap-8 sm:gap-12">
              <span>STUDIO DENY</span>
              <span>NEW SEASON</span>
              <span>LIMITED EDITION</span>
              <span>URBAN TAILORING</span>
              <span>STREET LUXE</span>
              <span>STUDIO DENY</span>
              <span>NEW SEASON</span>
            </span>
          ))}
        </motion.div>
      </section>

      {/* Collection Section */}
      <section id="shop" className="relative py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-10 lg:gap-14 items-end">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative min-h-[62vh] sm:min-h-[78vh] overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1675079506513-f0a5eb0fd788?w=1800&q=80"
                alt="Studio Deny editorial look"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] via-transparent to-[rgba(0,0,0,0.2)]" />
              <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8">
                <h2
                  className="text-[clamp(2.3rem,9vw,7rem)] leading-[0.88] tracking-[-0.04em] uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  NEW
                  <br />
                  SEASON
                </h2>
              </div>
            </motion.div>

            <div className="space-y-8 sm:space-y-10">
              <p className="text-xs tracking-[0.2em] uppercase opacity-70" style={{ fontFamily: "var(--font-body)" }}>
                Curated staples. Clean cuts. Distinct silhouettes.
              </p>
              {[
                { name: "ESSENTIALS HOODIE", price: "$120" },
                { name: "SIGNATURE BLACK", price: "$95" },
                { name: "OVERSIZED TEE", price: "$65" },
                { name: "PREMIUM JOGGERS", price: "$110" },
                { name: "STUDIO JACKET", price: "$180" },
              ].map((product, idx) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-end justify-between border-b border-[rgba(255,255,255,0.22)] pb-3"
                >
                  <h3 className="text-lg sm:text-2xl tracking-[-0.01em] uppercase" style={{ fontFamily: "var(--font-display)" }}>
                    {product.name}
                  </h3>
                  <p className="text-sm tracking-[0.15em] opacity-75" style={{ fontFamily: "var(--font-body)" }}>
                    {product.price}
                  </p>
                </motion.div>
              ))}
              <a
                href="#cta-end"
                className="inline-flex items-center gap-2 text-sm tracking-[0.18em] uppercase opacity-85 hover:opacity-100 transition-opacity"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Shop Full Collection <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Typography Statement Section */}
      <section className="relative py-24 sm:py-36 px-4 sm:px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,255,255,0.08),transparent_55%)]" />
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(circle at center, black 40%, transparent 85%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.32, scale: 1 }}
          transition={{ duration: 1.1 }}
          viewport={{ once: true }}
          className="absolute -top-24 -left-16 w-72 h-72 rounded-full blur-3xl bg-[rgba(255,255,255,0.08)]"
        />
        <motion.div
          aria-hidden
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 0.24, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.15 }}
          viewport={{ once: true }}
          className="absolute -bottom-28 -right-20 w-80 h-80 rounded-full blur-3xl bg-[rgba(255,255,255,0.06)]"
        />
        <div className="absolute inset-0 pointer-events-none">
          {[
            { text: "UTILITY FIT", pos: "top-[20%] left-[8%]" },
            { text: "HEAVY GSM", pos: "top-[32%] right-[10%]" },
            { text: "LIMITED DROP", pos: "bottom-[28%] left-[12%]" },
            { text: "CITY UNIFORM", pos: "bottom-[20%] right-[12%]" },
          ].map((tag, idx) => (
            <motion.span
              key={tag.text}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 0.34, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 * idx }}
              viewport={{ once: true }}
              className={`absolute ${tag.pos} hidden md:block text-xs tracking-[0.24em]`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {tag.text}
            </motion.span>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-[1320px] mx-auto text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-4 sm:mb-6"
          >
            <span
              className="inline-flex items-center px-3 py-1 border border-[rgba(255,255,255,0.28)] text-[10px] sm:text-xs tracking-[0.22em]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              STUDIO DENY DNA
            </span>
          </motion.div>
          <h2
            className="text-[clamp(2.8rem,16vw,11rem)] leading-[0.82] tracking-[-0.05em] uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            STREET
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px var(--pure-white)" }}>
              IS
            </span>
            <br />
            IDENTITY
          </h2>
        </motion.div>
      </section>

      {/* Mid Page CTA */}
      <section className="py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <p className="text-xs tracking-[0.18em] uppercase opacity-65 mb-2" style={{ fontFamily: "var(--font-body)" }}>
              Private Access
            </p>
            <h3 className="text-[clamp(2rem,7vw,5rem)] leading-[0.9] tracking-[-0.03em] uppercase" style={{ fontFamily: "var(--font-display)" }}>
              MEMBERS
              <br />
              GET FIRST LOOK
            </h3>
            <p className="text-base mt-3 opacity-80 max-w-md" style={{ fontFamily: "var(--font-body)" }}>
              Drop alerts and early windows for limited releases.
            </p>
          </div>
          <a
            href="#cta-end"
            className="inline-flex items-center gap-2 text-sm tracking-[0.18em] uppercase opacity-85 hover:opacity-100 transition-opacity min-h-11"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Join Waitlist <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* Lookbook Section */}
      <section id="lookbook" ref={lookbookRef} className="py-14 sm:py-20 bg-[rgba(255,255,255,0.01)]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8 sm:mb-10"
          >
            <h2 className="text-[clamp(2rem,8vw,4.5rem)] leading-none tracking-[-0.03em] uppercase" style={{ fontFamily: "var(--font-display)" }}>
              LOOKBOOK
            </h2>
            <p className="text-base sm:text-lg mt-3 opacity-80 max-w-xl" style={{ fontFamily: "var(--font-body)" }}>
              Swipe through curated fits built for daily movement.
            </p>
          </motion.div>
        </div>

        <div className="space-y-10 sm:space-y-16">
          {/* Lookbook Image 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[72vh] sm:h-[86vh] overflow-hidden"
          >
            <motion.div
              className="absolute inset-x-0 -inset-y-14 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1762666167416-72b1540a76b7?w=1920&q=80')`,
                y: lookbookParallaxA,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-black)] via-transparent to-transparent" />
            <motion.div className="absolute bottom-8 left-4 sm:bottom-14 sm:left-8 lg:left-16 z-10" style={{ x: lookbookTextA }}>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-[clamp(2.2rem,9vw,8rem)] leading-none tracking-[-0.04em] uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                SS26
                <br />
                COLLECTION
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Lookbook Image 2 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[72vh] sm:h-[86vh] overflow-hidden"
          >
            <motion.div
              className="absolute inset-x-0 -inset-y-14 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1762052508086-59f97070092c?w=1920&q=80')`,
                y: lookbookParallaxB,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-black)] via-transparent to-transparent" />
            <motion.div className="absolute top-8 right-4 sm:top-14 sm:right-8 lg:right-16 z-10 text-right" style={{ x: lookbookTextB }}>
              <motion.p
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-[clamp(2.2rem,9vw,8rem)] leading-none tracking-[-0.04em] uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                URBAN
                <br />
                ESSENTIALS
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-10 sm:mb-14"
          >
            <h2 className="text-[clamp(2.1rem,8vw,5.2rem)] leading-[0.9] tracking-[-0.03em] uppercase" style={{ fontFamily: "var(--font-display)" }}>
              WORN IN
              <br />
              EVERY CITY
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
            {[
              "“Fit is unreal. It feels premium without trying too hard.”",
              "“Finally a brand that understands cut, fabric, and movement.”",
              "“Every drop sells out for a reason. Quality is consistent.”",
            ].map((quote, idx) => (
              <motion.div
                key={quote}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <Star key={n} className="w-3.5 h-3.5 fill-current opacity-90" />
                  ))}
                </div>
                <p className="text-lg sm:text-xl leading-relaxed opacity-90" style={{ fontFamily: "var(--font-display)" }}>
                  {quote}
                </p>
                <p className="text-xs tracking-[0.15em] opacity-60 mt-4" style={{ fontFamily: "var(--font-body)" }}>
                  VERIFIED BUYER
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section id="about" className="py-14 sm:py-20 px-4 sm:px-8 lg:px-16 border-y border-[var(--gray-900)] bg-[rgba(255,255,255,0.01)]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-[1320px] mx-auto"
        >
          <h2
            className="text-[clamp(2rem,8vw,4.5rem)] leading-[0.95] tracking-[-0.03em] mb-6 uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            WE DON'T FOLLOW TRENDS.
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed tracking-wide max-w-2xl font-light opacity-85"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Studio Deny represents creators and rule-breakers. We build pieces that fit real movement, hold up daily,
            and speak before you do.
          </p>
        </motion.div>
      </section>

      {/* Final CTA */}
      <section id="cta-end" className="py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-16 text-center"
        >
          <h2 className="text-[clamp(2.3rem,9vw,6rem)] leading-[0.88] tracking-[-0.03em] uppercase" style={{ fontFamily: "var(--font-display)" }}>
            READY FOR THE NEXT DROP?
          </h2>
          <p className="text-base sm:text-lg mt-4 opacity-80 max-w-xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Be first in line when new pieces launch. No spam, just access.
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase opacity-90 hover:opacity-100 transition-opacity min-h-11"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Get Early Access <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--deep-black)] border-t border-[var(--gray-800)] pt-12 sm:pt-16 pb-24 sm:pb-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1320px] mx-auto">
          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            {[
              "https://images.unsplash.com/photo-1760302318620-261f5e4d1940?w=600&q=80",
              "https://images.unsplash.com/photo-1775592231472-6d8719ccdfe3?w=600&q=80",
              "https://images.unsplash.com/photo-1602080243652-3c5a008e194c?w=600&q=80",
              "https://images.unsplash.com/photo-1728997907996-b946a76e211b?w=600&q=80",
              "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80",
              "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&q=80",
            ].map((img, idx) => (
              <div key={idx} className="aspect-square overflow-hidden bg-[var(--gray-900)]">
                <img
                  src={img}
                  alt={`Studio ${idx + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </motion.div>

          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Logo & Tagline */}
            <div>
              <h3
                className="text-[3rem] leading-none tracking-[-0.02em] mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                STUDIO
                <br />
                DENY
              </h3>
              <p className="text-sm tracking-wide opacity-60 font-light" style={{ fontFamily: "var(--font-body)" }}>
                STREET CULTURE. REFINED.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col gap-4" style={{ fontFamily: "var(--font-body)" }}>
              <h4 className="text-sm tracking-[0.2em] mb-2 opacity-40">NAVIGATE</h4>
              <a href="#shop" className="text-sm tracking-wide hover:opacity-60 transition-opacity w-fit">
                SHOP
              </a>
              <a href="#lookbook" className="text-sm tracking-wide hover:opacity-60 transition-opacity w-fit">
                LOOKBOOK
              </a>
              <a href="#about" className="text-sm tracking-wide hover:opacity-60 transition-opacity w-fit">
                ABOUT
              </a>
              <a href="#cta-end" className="text-sm tracking-wide hover:opacity-60 transition-opacity w-fit">
                WAITLIST
              </a>
            </div>

            {/* Social */}
            <div style={{ fontFamily: "var(--font-body)" }}>
              <h4 className="text-sm tracking-[0.2em] mb-6 opacity-40">FOLLOW US</h4>
              <div className="flex gap-6">
                <a href="#" className="hover:opacity-60 transition-opacity">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="hover:opacity-60 transition-opacity">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="hover:opacity-60 transition-opacity">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
              <p className="text-sm tracking-wide mt-8 opacity-60">@STUDIODENY</p>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="pt-8 border-t border-[var(--gray-800)] text-xs tracking-wider opacity-40 font-light"
            style={{ fontFamily: "var(--font-body)" }}
          >
            © 2026 STUDIO DENY. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <motion.a
        href="#cta-end"
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: scrollY > 420 ? 0 : 120, opacity: scrollY > 420 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="sm:hidden fixed bottom-4 left-4 right-4 z-50 min-h-11 px-6 py-3 border border-[var(--pure-white)] bg-[var(--pure-white)] text-[var(--deep-black)] text-sm tracking-[0.14em] inline-flex items-center justify-center"
        style={{ fontFamily: "var(--font-body)" }}
      >
        SHOP THE DROP
      </motion.a>
    </div>
  );
}
