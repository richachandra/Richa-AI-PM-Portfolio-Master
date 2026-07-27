import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { pastWork } from "../../data/content";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

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
      className={`grid grid-cols-1 items-center gap-8 md:grid-cols-12 ${
        flip ? "md:[direction:rtl]" : ""
      }`}
      data-testid={`work-item-${item.index}`}
    >
      {/* Image frame */}
      <Reveal
        y={60}
        className="md:col-span-7 md:[direction:ltr]"
      >
        <div className="group relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10">
          <motion.img
            style={{ y: imgY, scale: 1.2 }}
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_20%,transparent,rgba(5,5,5,0.5))]" />
          <span className="absolute left-5 top-4 font-mono text-xs tracking-widest text-white/70">
            {item.year}
          </span>
        </div>
      </Reveal>

      {/* Meta */}
      <div className="md:col-span-5 md:[direction:ltr] md:px-6">
        <Reveal>
          <span className="font-head text-6xl font-bold text-stroke lg:text-7xl">
            {item.index}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-cyan-glow">
            {item.category}
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <h3 className="mt-3 font-head text-3xl font-medium tracking-tight text-white lg:text-4xl">
            {item.title}
          </h3>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-4 max-w-md font-body text-base leading-relaxed text-white/55">
            {item.blurb}
          </p>
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

    <div className="mt-20 space-y-24 md:space-y-32">
      {pastWork.map((item, i) => (
        <WorkItem key={item.index} item={item} flip={i % 2 === 1} />
      ))}
    </div>
  </section>
);

export default PastWork;
