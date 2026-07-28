import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowUp, ArrowDown, FileText } from "lucide-react";
import { caseStudies } from "../../data/content";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const Label = ({ children, accent = false }) => (
  <span
    className={`font-mono text-[11px] uppercase tracking-[0.25em] ${
      accent ? "text-cyan-glow" : "text-white/35"
    }`}
  >
    {children}
  </span>
);

const CaseStudy = ({ cs }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const dot = cs.accent === "magenta" ? "bg-magenta-glow" : "bg-cyan-glow";

  return (
    <article
      className="glass overflow-hidden rounded-3xl"
      data-testid="case-study-licious"
    >
      {/* Hero */}
      <div ref={ref} className="relative h-64 overflow-hidden sm:h-80 lg:h-96">
        <motion.img
          style={{ y: imgY, scale: 1.2 }}
          src={cs.image}
          alt={cs.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-white/80">
            <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
            {cs.tag}
          </span>
          <h3 className="mt-4 max-w-3xl font-head text-3xl font-medium leading-[1.05] tracking-tight text-white md:text-5xl">
            {cs.title}
          </h3>
        </div>
      </div>

      <div className="space-y-12 p-8 md:p-12">
        <Reveal>
          <p className="max-w-2xl font-body text-lg leading-relaxed text-white/70">
            {cs.oneLiner}
          </p>
        </Reveal>

        {/* Problem + Role */}
        <div className="grid grid-cols-1 gap-10 border-t border-white/10 pt-10 md:grid-cols-2">
          <Reveal>
            <Label>Problem</Label>
            <p className="mt-3 font-body text-[15px] leading-relaxed text-white/60">
              {cs.problem}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Label>My role</Label>
            <p className="mt-3 font-body text-[15px] leading-relaxed text-white/60">
              {cs.role}
            </p>
          </Reveal>
        </div>

        {/* Approach — segments */}
        <div className="border-t border-white/10 pt-10">
          <Reveal>
            <Label accent>Approach</Label>
            <p className="mt-3 font-body text-[15px] text-white/60">
              {cs.approachIntro}
            </p>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {cs.segments.map((s, i) => (
              <Reveal
                key={s.name}
                delay={i * 0.08}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                data-testid={`segment-${i}`}
              >
                <span className="font-mono text-xs text-cyan-glow">
                  0{i + 1}
                </span>
                <h4 className="mt-3 font-head text-lg font-medium text-white">
                  {s.name}
                </h4>
                <span className="mt-1 block font-mono text-[11px] uppercase tracking-widest text-white/40">
                  {s.share}
                </span>
                <p className="mt-3 font-body text-sm leading-relaxed text-white/55">
                  {s.need}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-3xl font-body text-[15px] leading-relaxed text-white/55">
              {cs.prioritization}
            </p>
          </Reveal>
        </div>

        {/* Solutions */}
        <div className="border-t border-white/10 pt-10">
          <Reveal>
            <Label accent>Solutions — two tracks</Label>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {cs.solutions.map((sol, i) => (
              <Reveal
                key={sol.track}
                delay={i * 0.08}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
                data-testid={`solution-${i}`}
              >
                <h4 className="font-head text-lg font-medium text-white">
                  {sol.track}
                </h4>
                <p className="mt-3 font-body text-sm leading-relaxed text-white/55">
                  {sol.detail}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-3xl font-body text-sm italic leading-relaxed text-white/45">
              {cs.precedent}
            </p>
          </Reveal>
        </div>

        {/* Outcome target metrics */}
        <div className="border-t border-white/10 pt-10">
          <Reveal>
            <Label accent>Outcome — target metrics</Label>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cs.outcomes.map((o, i) => {
              const up = o.dir === "up";
              return (
                <Reveal
                  key={i}
                  delay={i * 0.05}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-4"
                  data-testid={`cs-outcome-${i}`}
                >
                  <span
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full ${
                      up
                        ? "bg-cyan-glow/15 text-cyan-glow"
                        : "bg-magenta-glow/15 text-magenta-glow"
                    }`}
                  >
                    {up ? (
                      <ArrowUp className="h-4 w-4" />
                    ) : (
                      <ArrowDown className="h-4 w-4" />
                    )}
                  </span>
                  <span className="font-body text-sm leading-snug text-white/70">
                    {o.label}
                  </span>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Core thesis pull-quote */}
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-magenta-glow/20 blur-3xl" />
            <Label accent>Core thesis</Label>
            <p className="relative mt-4 max-w-2xl font-head text-2xl font-medium leading-snug tracking-tight text-white md:text-3xl">
              {cs.thesis}
            </p>
          </div>
        </Reveal>

        {/* Reflection + PDF */}
        <div className="flex flex-col items-start justify-between gap-8 border-t border-white/10 pt-10 md:flex-row md:items-center">
          <Reveal className="border-l-2 border-magenta-glow/70 pl-5">
            <Label>What I'd do differently</Label>
            <p className="mt-2 max-w-lg font-body text-[15px] italic leading-relaxed text-white/60">
              {cs.reflection}
            </p>
          </Reveal>
          {cs.pdf && (
            <a
              href={cs.pdf}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="case-study-pdf-link"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-white/20 px-6 py-3.5 font-head text-sm font-medium text-white transition-colors duration-300 hover:border-cyan-glow hover:text-cyan-glow"
            >
              <FileText className="h-4 w-4" />
              Read full case study
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const CaseStudies = () => (
  <section
    id="case-studies"
    className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
    data-testid="case-studies-section"
  >
    <SectionHeading overline="Case Studies">
      Deep dives into<br className="hidden sm:block" /> outcomes that mattered.
    </SectionHeading>

    <div className="mt-16 space-y-12">
      {caseStudies.map((cs) => (
        <CaseStudy key={cs.title} cs={cs} />
      ))}
    </div>
  </section>
);

export default CaseStudies;
