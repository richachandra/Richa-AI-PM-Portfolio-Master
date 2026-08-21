import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "../../data/content";
import MaskedLines from "../shared/MaskedLines";

const HERO_IMG =
  "https://images.unsplash.com/photo-1710438399422-2fca27686bcd?crop=entropy&cs=srgb&fm=jpg&q=85&w=2000";

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-32 pb-24"
      data-testid="hero-section"
    >
      {/* Parallax cinematic background */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 z-0"
        aria-hidden
      >
        <img
          src={HERO_IMG}
          alt=""
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_30%,rgba(0,240,255,0.14),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_85%_80%,rgba(255,0,122,0.12),transparent_60%)]" />
      </motion.div>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-12"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 flex items-center gap-3"
        >
          <span className="h-px w-10 bg-cyan-glow" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-white/70">
            {profile.role} — {profile.location}
          </span>
        </motion.div>

        <h1
          className="font-head text-[11vw] font-bold leading-[0.92] tracking-tighter text-white sm:text-[10vw] lg:text-[7rem]"
          data-testid="hero-heading"
        >
          <MaskedLines lines={profile.heroLines} start={0.35} stagger={0.13} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 max-w-xl font-body text-base leading-relaxed text-white/60 sm:text-lg"
        >
          {profile.tagline}
        </motion.p>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-cyan-glow" />
        </motion.span>
      </motion.div>
    </section>
  );
};

export default Hero;
