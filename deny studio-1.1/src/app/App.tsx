import { motion } from "motion/react";
import { Instagram, Facebook, Twitter, ArrowRight, ChevronDown, Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [scrollY, setScrollY] = useState(0);

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
            transform: `translateY(${scrollY * 0.5}px)`,
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

      {/* Social Proof Strip */}
      <section className="px-4 sm:px-8 lg:px-16 py-6 sm:py-8 border-y border-[var(--gray-800)] bg-[rgba(255,255,255,0.01)]">
        <div className="max-w-[1320px] mx-auto flex flex-wrap items-center justify-between gap-4 sm:gap-6">
          <p className="text-xs sm:text-sm tracking-[0.15em] opacity-70" style={{ fontFamily: "var(--font-body)" }}>
            TRUSTED BY CREATORS WORLDWIDE
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 opacity-75 text-xs sm:text-sm tracking-[0.15em]">
            {["HYPEFRAME", "VOID MAG", "STREET PULSE", "CUT CULTURE"].map((logo) => (
              <span key={logo} style={{ fontFamily: "var(--font-body)" }}>
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section id="shop" className="py-14 sm:py-20 px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[1320px] mx-auto"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
            <div>
              <h2
                className="text-[clamp(2rem,8vw,4.5rem)] leading-none tracking-[-0.03em] uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                LATEST DROP
              </h2>
              <p className="text-base sm:text-lg mt-3 opacity-80 max-w-xl" style={{ fontFamily: "var(--font-body)" }}>
                New-season essentials designed for movement, comfort, and statement layering.
              </p>
            </div>
            <a
              href="#cta-end"
              className="inline-flex items-center gap-2 text-sm tracking-[0.15em] opacity-80 hover:opacity-100 transition-opacity"
              style={{ fontFamily: "var(--font-body)" }}
            >
              GET EARLY ACCESS <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1552337480-48918be048b9?w=800&q=80",
                name: "ESSENTIALS HOODIE",
                price: "$120",
              },
              {
                img: "https://images.unsplash.com/photo-1559590450-fc29d6207936?w=800&q=80",
                name: "SIGNATURE BLACK",
                price: "$95",
              },
              {
                img: "https://images.unsplash.com/photo-1673118306649-a74a253c5733?w=800&q=80",
                name: "OVERSIZED TEE",
                price: "$65",
              },
              {
                img: "https://images.unsplash.com/photo-1718340803554-3a7af7253aa8?w=800&q=80",
                name: "PREMIUM JOGGERS",
                price: "$110",
              },
              {
                img: "https://images.unsplash.com/photo-1675079506513-f0a5eb0fd788?w=800&q=80",
                name: "STUDIO JACKET",
                price: "$180",
              },
              {
                img: "https://images.unsplash.com/photo-1620223765052-d38678bcce1a?w=800&q=80",
                name: "WINDBREAKER",
                price: "$150",
              },
            ].map((product, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-[var(--gray-900)] aspect-[3/4] mb-3 sm:mb-4 rounded-sm">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:contrast-125"
                  />
                  <div className="absolute inset-0 bg-[var(--deep-black)] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>
                <div style={{ fontFamily: "var(--font-body)" }}>
                  <h3 className="text-xs sm:text-sm tracking-[0.12em] mb-1 font-light">{product.name}</h3>
                  <p className="text-xs sm:text-sm tracking-wider opacity-70">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mid Page CTA */}
      <section className="px-4 sm:px-8 lg:px-16 py-6 sm:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[1320px] mx-auto border border-[var(--gray-800)] bg-[rgba(255,255,255,0.02)] p-5 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
        >
          <div>
            <h3 className="text-2xl sm:text-4xl tracking-[-0.02em] uppercase" style={{ fontFamily: "var(--font-display)" }}>
              MEMBERS GET FIRST ACCESS
            </h3>
            <p className="text-base mt-2 opacity-80" style={{ fontFamily: "var(--font-body)" }}>
              Join the list for private drops and restock alerts.
            </p>
          </div>
          <a
            href="#cta-end"
            className="inline-flex items-center justify-center min-h-11 px-6 py-3 border border-[var(--pure-white)] bg-[var(--pure-white)] text-[var(--deep-black)] text-sm tracking-[0.14em] hover:bg-transparent hover:text-[var(--pure-white)] transition-colors duration-300"
            style={{ fontFamily: "var(--font-body)" }}
          >
            JOIN WAITLIST
          </a>
        </motion.div>
      </section>

      {/* Lookbook Section */}
      <section id="lookbook" className="py-14 sm:py-20 px-4 sm:px-8 lg:px-16 bg-[rgba(255,255,255,0.01)]">
        <div className="max-w-[1320px] mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Lookbook Image 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative h-[58vh] sm:h-[64vh] min-h-[360px] overflow-hidden rounded-sm"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1762666167416-72b1540a76b7?w=1400&q=80')`,
                  transform: `translateY(${scrollY * 0.15}px)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-black)] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-5 sm:bottom-8 sm:left-8 z-10">
                <motion.p
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-[clamp(1.8rem,8vw,4rem)] leading-none tracking-[-0.04em] uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  SS26
                  <br />
                  COLLECTION
                </motion.p>
              </div>
            </motion.div>

            {/* Lookbook Image 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="relative h-[58vh] sm:h-[64vh] min-h-[360px] overflow-hidden rounded-sm"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1762052508086-59f97070092c?w=1400&q=80')`,
                  transform: `translateY(${scrollY * 0.1}px)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-black)] via-transparent to-transparent" />
              <div className="absolute top-6 right-5 sm:top-8 sm:right-8 z-10 text-right">
                <motion.p
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-[clamp(1.8rem,8vw,4rem)] leading-none tracking-[-0.04em] uppercase"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  URBAN
                  <br />
                  ESSENTIALS
                </motion.p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 sm:py-18 px-4 sm:px-8 lg:px-16">
        <div className="max-w-[1320px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-[clamp(2rem,8vw,4rem)] leading-none tracking-[-0.03em] uppercase" style={{ fontFamily: "var(--font-display)" }}>
              COMMUNITY FEEDBACK
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              "Fit is unreal. It feels premium without trying too hard.",
              "Finally a brand that understands cut, fabric, and movement.",
              "Every drop sells out for a reason. Quality is consistent.",
            ].map((quote, idx) => (
              <motion.div
                key={quote}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border border-[var(--gray-800)] p-5 sm:p-6 bg-[rgba(255,255,255,0.02)]"
              >
                <div className="flex gap-1 mb-3">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <Star key={n} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-base leading-relaxed opacity-90" style={{ fontFamily: "var(--font-body)" }}>
                  "{quote}"
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
      <section id="cta-end" className="py-14 sm:py-20 px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-[1320px] mx-auto text-center border border-[var(--gray-800)] p-8 sm:p-12"
        >
          <h2 className="text-[clamp(2rem,8vw,4rem)] leading-none tracking-[-0.03em] uppercase" style={{ fontFamily: "var(--font-display)" }}>
            READY FOR THE NEXT DROP?
          </h2>
          <p className="text-base sm:text-lg mt-4 opacity-80 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
            Be first in line when new pieces launch. No spam, just access.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              className="min-h-11 px-8 py-3 border border-[var(--pure-white)] bg-[var(--pure-white)] text-[var(--deep-black)] text-sm tracking-[0.14em] hover:bg-transparent hover:text-[var(--pure-white)] transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              GET EARLY ACCESS
            </button>
          </div>
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
