import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks, profile } from "../../data/content";

const scrollTo = (target) => {
  const el = document.getElementById(target);
  if (!el) return;
  if (window.__lenis) window.__lenis.scrollTo(el, { offset: -20 });
  else el.scrollIntoView({ behavior: "smooth" });
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      data-testid="navbar"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-colors duration-500 ${
          scrolled ? "glass" : "border border-transparent bg-transparent"
        }`}
      >
        <button
          onClick={() => scrollTo("hero")}
          className="group flex items-center gap-2"
          data-testid="nav-logo"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-glow glow-cyan transition-transform duration-300 group-hover:scale-125" />
          <span className="font-head text-lg font-bold uppercase tracking-[0.2em] text-white">
            {profile.name}
          </span>
        </button>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <button
              key={l.target}
              onClick={() => scrollTo(l.target)}
              data-testid={`nav-link-${l.target}`}
              className="rounded-full px-4 py-2 font-body text-sm text-white/60 transition-colors duration-300 hover:text-white"
            >
              {l.label}
            </button>
          ))}
        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
