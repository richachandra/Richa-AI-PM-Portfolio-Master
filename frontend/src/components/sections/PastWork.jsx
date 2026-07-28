import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { pastWork } from "../../data/content";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

const Block = ({ label, children }) => (
  <div>
    <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/35">
      {label}
    </span>
    <p className="mt-2 font-body text-[15px] leading-relaxed text-white/65">
      {children}
    </p>
  </div>
);

const WorkItem = ({ item, flip }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12"
      data-testid={`work-item-${item.index}`}
    >
      {/* Sticky cinematic image */}
      <div className={`lg:col-span-5 ${flip ? "lg:order-2" : ""}`}>
        <Reveal y={60}>
          <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 lg:sticky lg:top-28">
            <motion.img
              style={{ y: imgY, scale: 1.2 }}
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_15%,transparent,rgba(5,5,5,0.55))]" />
            <span className="absolute left-5 top-4 glass rounded-full px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-white/80">
              {item.category}
            </span>
          </div>
        </Reveal>
      </div>

      {/* Case study content */}
      <div className={`lg:col-span-7 ${flip ? "lg:order-1" : ""}`}>
        <Reveal>
          <span className="font-head text-6xl font-bold text-stroke lg:text-7xl">
            {item.index}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h3 className="mt-4 font-head text-3xl font-medium leading-tight tracking-tight text-white lg:text-4xl">
            {item.title}
          </h3>
        </Reveal>

        <div className="mt-8 space-y-6">
          <Reveal delay={0.08}>
            <Block label="Problem">{item.problem}</Block>
          </Reveal>
          <Reveal delay={0.1}>
            <Block label="My role">{item.role}</Block>
          </Reveal>
          <Reveal delay={0.12}>
            <Block label="Approach">{item.approach}</Block>
          </Reveal>
        </div>

        {/* Key Results */}
        <Reveal delay={0.14}>
          <div className="mt-10">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-cyan-glow">
              Key Results
            </span>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {item.outcomes.map((o, i) => (
                <div
                  key={i}
                  className="border-l-2 border-cyan-glow/60 pl-4"
                  data-testid={`work-outcome-${item.index}-${i}`}
                >
                  <div className="font-head text-4xl font-bold leading-none tracking-tighter text-white lg:text-5xl">
                    {o.value}
                  </div>
                  <div className="mt-3 font-body text-xs leading-snug text-white/50">
                    {o.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Reflection */}
        <Reveal delay={0.16}>
          <div className="mt-8 border-l-2 border-magenta-glow/70 pl-5">
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/35">
              What I'd do differently
            </span>
            <p className="mt-2 max-w-lg font-body text-[15px] italic leading-relaxed text-white/60">
              {item.reflection}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export const PastWork = () => (
  <section
    id="work"
    className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
    data-testid="work-section"
  >
    <SectionHeading overline="Past Product Work">
      Products I've shipped<br className="hidden sm:block" /> and scaled.
    </SectionHeading>

    <div className="mt-20 space-y-28 md:space-y-36">
      {pastWork.map((item, i) => (
        <WorkItem key={item.index} item={item} flip={i % 2 === 1} />
      ))}
    </div>
  </section>
);

export default PastWork;
