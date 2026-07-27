import { manifesto } from "../../data/content";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

export const Manifesto = () => (
  <section
    id="approach"
    className="relative border-y border-white/10 bg-ink-surface"
    data-testid="manifesto-section"
  >
    <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-36">
      <SectionHeading overline="Product Improvement">
        {manifesto.heading}
      </SectionHeading>

      <div className="mt-20 grid grid-cols-1 gap-x-12 md:grid-cols-2">
        {manifesto.chapters.map((c, i) => (
          <Reveal
            key={c.num}
            delay={(i % 2) * 0.08}
            className="flex gap-6 border-t border-white/10 py-9"
            data-testid={`manifesto-chapter-${c.num}`}
          >
            <span className="font-mono text-2xl font-medium leading-none text-cyan-glow">
              {c.num}
            </span>
            <div>
              <h3 className="font-head text-2xl font-medium tracking-tight text-white">
                {c.title}
              </h3>
              <p className="mt-3 max-w-sm font-body text-base leading-relaxed text-white/55">
                {c.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Manifesto;
