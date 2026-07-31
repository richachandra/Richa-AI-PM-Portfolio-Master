import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { sideProjects, sideProjectFeatures } from "../../data/content";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";
import { CaseStudy } from "./CaseStudies";

export const SideProjects = () => (
  <section
    id="side-projects"
    className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
    data-testid="side-projects-section"
  >
    <SectionHeading overline="Side Projects">
      Things I build<br className="hidden sm:block" /> on weekends.
    </SectionHeading>

    {/* Featured projects — full case-study structure */}
    <div className="mt-16 space-y-12">
      {sideProjectFeatures.map((cs, i) => (
        <CaseStudy key={cs.title} cs={cs} testid={`side-project-feature-${i}`} />
      ))}
    </div>

    <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {sideProjects.map((p, i) => (
        <Reveal key={p.title} delay={(i % 2) * 0.08}>
          <motion.a
            href="#"
            onClick={(e) => e.preventDefault()}
            whileHover={{ x: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            className="group flex items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-colors duration-500 hover:border-white/25 hover:bg-white/[0.04]"
            data-testid={`side-project-${i}`}
          >
            <div>
              <h3 className="font-head text-xl font-medium text-white">
                {p.title}
              </h3>
              <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-white/50">
                {p.blurb}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] tracking-wide text-white/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-white/40 transition-colors duration-300 group-hover:text-cyan-glow" />
          </motion.a>
        </Reveal>
      ))}
    </div>
  </section>
);

export default SideProjects;
