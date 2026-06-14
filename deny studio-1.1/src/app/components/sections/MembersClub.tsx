import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const BENEFITS = [
  { label: "Early Access", desc: "Shop 48 hours before the public drop window." },
  { label: "Limited Releases", desc: "Access to members-only units not sold publicly." },
  { label: "Members Only Drops", desc: "Exclusive colorways and silhouettes each season." },
  { label: "Exclusive Updates", desc: "Direct line to the studio — first to know everything." },
];

export default function MembersClub() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="members-club"
      className="relative py-12 sm:py-16 px-4 sm:px-8 lg:px-16 overflow-hidden border-b border-[rgba(255,255,255,0.06)]"
    >
      {/* Subtle ambient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,255,255,0.04),transparent_70%)]" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-white opacity-20" />
                <span
                  className="text-[10px] tracking-[0.35em] uppercase opacity-40"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Private Access
                </span>
              </div>

              <h2
                className="text-[clamp(3rem,10vw,7rem)] leading-none tracking-[-0.05em] uppercase mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                DENY
                <br />
                CLUB
              </h2>

              <p
                className="text-sm sm:text-base opacity-55 leading-relaxed max-w-md"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Reserved for the few who move ahead of the crowd. Join and get first access to every drop, ever.
              </p>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-10 space-y-0"
            >
              {BENEFITS.map((benefit, i) => (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 py-4 border-b border-[rgba(255,255,255,0.07)] last:border-0"
                >
                  <span
                    className="text-[9px] tracking-[0.22em] uppercase opacity-25 mt-0.5 shrink-0 w-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className="text-sm tracking-[0.08em] uppercase mb-0.5"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {benefit.label}
                    </p>
                    <p
                      className="text-xs opacity-40 leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
            className="lg:pt-20"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="border border-[rgba(255,255,255,0.15)] p-8 sm:p-12 text-center"
              >
                <span
                  className="text-[10px] tracking-[0.3em] uppercase opacity-40 block mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  You're In
                </span>
                <h3
                  className="text-[clamp(2rem,6vw,3.5rem)] leading-none tracking-[-0.04em] uppercase mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  WELCOME TO
                  <br />
                  DENY CLUB
                </h3>
                <p
                  className="text-sm opacity-50 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Drop alerts will hit your inbox before anyone else. Stay ready.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <p
                  className="text-xs tracking-[0.18em] uppercase opacity-40 mb-6"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Enter your email to join the club.
                </p>

                {/* Email field */}
                <div
                  className="relative border-b transition-all duration-300"
                  style={{ borderColor: focused ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.15)" }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    placeholder="your@email.com"
                    required
                    aria-label="Email address"
                    className="w-full bg-transparent py-4 pr-12 text-sm tracking-wide placeholder:opacity-20 focus:outline-none"
                    style={{ fontFamily: "var(--font-body)" }}
                  />
                  {email && (
                    <button
                      type="submit"
                      className="absolute right-0 top-1/2 -translate-y-1/2 opacity-60 hover:opacity-100 transition-opacity p-2"
                      aria-label="Submit"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* CTA Button */}
                <button
                  type="submit"
                  className="mt-6 w-full py-4 border border-white text-xs tracking-[0.24em] uppercase hover:bg-white hover:text-black transition-all duration-300"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Join Deny Club
                </button>

                <p
                  className="mt-4 text-[10px] tracking-wide opacity-25 text-center"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  No spam. Unsubscribe anytime. Members only.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
