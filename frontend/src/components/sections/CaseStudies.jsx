import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "../../data/content";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

export const CaseStudies = () => (
  <section
    id="case-studies"
    className="relative mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
    data-testid="case-studies-section"
  >
    <SectionHeading overline="Case Studies">
      Deep dives into<br className="hidden sm:block" /> outcomes that mattered.
    </SectionHeading>

    <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
      {caseStudies.map((cs, i) => {
        const glow =
          cs.accent === "magenta"
            ? "hover:shadow-[0_0_60px_-12px_rgba(255,0,122,0.5)]"
            : "hover:shadow-[0_0_60px_-12px_rgba(0,240,255,0.5)]";
        const dot = cs.accent === "magenta" ? "bg-magenta-glow" : "bg-cyan-glow";
        return (
          <Reveal key={cs.title} delay={i * 0.1}>
            <motion.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className={`group glass relative overflow-hidden rounded-3xl p-8 transition-shadow duration-500 md:p-10 ${glow}`}
              data-testid={`case-study-${i}`}
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-white/70">
                  <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
                  {cs.tag}
                </span>
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/15 transition-colors duration-300 group-hover:bg-white group-hover:text-ink">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>

              <h3 className="relative z-10 mt-8 font-head text-2xl font-medium leading-tight tracking-tight text-white md:text-3xl">
                {cs.title}
              </h3>
              <p className="relative z-10 mt-4 max-w-md font-body text-sm leading-relaxed text-white/55">
                {cs.description}
              </p>

              <div className="relative z-10 mt-8 overflow-hidden rounded-xl border border-white/10">
                <img
                  src={cs.image}
                  alt={cs.title}
                  className="h-44 w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <span className="absolute bottom-4 left-4 font-head text-2xl font-bold tracking-tight text-white">
                  {cs.metric}
                </span>
              </div>
            </motion.article>
          </Reveal>
        );
      })}
    </div>
  </section>
);

export default CaseStudies;
