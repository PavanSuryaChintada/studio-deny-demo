import { motion } from "motion/react";
import { Instagram, Facebook, Twitter } from "lucide-react";
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
        className="fixed top-0 left-0 right-0 z-50 px-8 lg:px-16 py-6 flex justify-between items-center mix-blend-difference"
      >
        <div className="tracking-[-0.02em]" style={{ fontFamily: "var(--font-display)" }}>
          <span className="text-[2.5rem] leading-none">STUDIO DENY</span>
        </div>
        <div className="flex gap-8 items-center" style={{ fontFamily: "var(--font-body)" }}>
          <a href="#" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
            SHOP
          </a>
          <a href="#" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
            LOOKBOOK
          </a>
          <a href="#" className="text-sm tracking-wide hover:opacity-60 transition-opacity">
            ABOUT
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 px-8 lg:px-16 max-w-[1800px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-8"
          >
            <h1
              className="text-[clamp(4rem,15vw,18rem)] leading-[0.85] tracking-[-0.04em] uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              IN THE CUT.
              <br />
              NOT IN THE
              <br />
              CROWD.
            </h1>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="group relative overflow-hidden px-12 py-4 border border-[var(--pure-white)] hover:bg-[var(--pure-white)] transition-colors duration-300"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="relative z-10 text-sm tracking-[0.2em] group-hover:text-[var(--deep-black)] transition-colors duration-300">
                SHOP NOW
              </span>
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-24 bg-[var(--pure-white)] opacity-40" />
        </motion.div>
      </section>

      {/* Collection Section */}
      <section className="py-32 px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-[1800px] mx-auto"
        >
          <h2
            className="text-[clamp(3rem,8vw,10rem)] leading-none tracking-[-0.03em] mb-20 uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            LATEST DROP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
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
                <div className="relative overflow-hidden bg-[var(--gray-900)] aspect-[3/4] mb-6">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:contrast-125"
                  />
                  <div className="absolute inset-0 bg-[var(--deep-black)] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>
                <div style={{ fontFamily: "var(--font-body)" }}>
                  <h3 className="text-sm tracking-[0.15em] mb-2 font-light">{product.name}</h3>
                  <p className="text-sm tracking-wider opacity-60">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Typography Statement Section */}
      <section className="relative py-48 px-8 lg:px-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="max-w-[1800px] mx-auto text-center relative z-10"
        >
          <h2
            className="text-[clamp(4rem,18vw,22rem)] leading-[0.8] tracking-[-0.05em] uppercase"
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

      {/* Lookbook Section */}
      <section className="py-32">
        <div className="space-y-32">
          {/* Lookbook Image 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-screen"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1762666167416-72b1540a76b7?w=1920&q=80')`,
                transform: `translateY(${scrollY * 0.15}px)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-black)] via-transparent to-transparent" />
            <div className="absolute bottom-16 left-8 lg:left-16 z-10">
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-[clamp(3rem,10vw,12rem)] leading-none tracking-[-0.04em] uppercase"
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
            className="relative h-screen"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1762052508086-59f97070092c?w=1920&q=80')`,
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-black)] via-transparent to-transparent" />
            <div className="absolute top-16 right-8 lg:right-16 z-10 text-right">
              <motion.p
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-[clamp(3rem,10vw,12rem)] leading-none tracking-[-0.04em] uppercase"
                style={{ fontFamily: "var(--font-display)" }}
              >
                URBAN
                <br />
                ESSENTIALS
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-48 px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-[1400px] mx-auto"
        >
          <h2
            className="text-[clamp(3rem,8vw,10rem)] leading-[0.9] tracking-[-0.03em] mb-16 uppercase"
            style={{ fontFamily: "var(--font-display)" }}
          >
            WE DON'T
            <br />
            FOLLOW TRENDS.
          </h2>
          <p
            className="text-[clamp(1rem,2vw,1.5rem)] leading-relaxed tracking-wide max-w-3xl font-light opacity-80"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Studio Deny represents the underground. The creators. The rule breakers.
            <br />
            We design for those who define their own path.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--deep-black)] border-t border-[var(--gray-800)] pt-20 pb-12 px-8 lg:px-16">
        <div className="max-w-[1800px] mx-auto">
          {/* Image Collage */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            {[
              "https://images.unsplash.com/photo-1760302318620-261f5e4d1940?w=600&q=80",
              "https://images.unsplash.com/photo-1775592231472-6d8719ccdfe3?w=600&q=80",
              "https://images.unsplash.com/photo-1602080243652-3c5a008e194c?w=600&q=80",
              "https://images.unsplash.com/photo-1728997907996-b946a76e211b?w=600&q=80",
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
              {["Shop", "Collections", "Lookbook", "About", "Contact", "Stores"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm tracking-wide hover:opacity-60 transition-opacity w-fit"
                >
                  {link.toUpperCase()}
                </a>
              ))}
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
    </div>
  );
}
