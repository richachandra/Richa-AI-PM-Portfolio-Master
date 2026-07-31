import { about } from "../../data/content";
import Reveal from "../shared/Reveal";

const PORTRAIT = "/images/richa-headshot.png";

export const About = () => (
  <section
    id="about"
    className="mx-auto max-w-7xl px-6 py-28 md:px-12 md:py-40"
    data-testid="about-section"
  >
    <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
      {/* Portrait — clipped, spotlit frame */}
      <Reveal className="md:col-span-5" y={60}>
        <div className="group relative overflow-hidden rounded-2xl">
          <div className="absolute inset-0 z-10 bg-[radial-gradient(70%_60%_at_50%_0%,transparent,rgba(5,5,5,0.55))]" />
          <img
            src={PORTRAIT}
            alt="Portrait of Richa Chandra"
            className="aspect-[4/5] w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
            data-testid="about-portrait"
          />
          <div className="absolute bottom-5 left-5 z-20 glass rounded-full px-4 py-2">
            <span className="font-mono text-xs tracking-widest text-white/80">
              Mumbai · 19.07°N
            </span>
          </div>
        </div>
      </Reveal>

      {/* Text + stats */}
      <div className="md:col-span-7 md:pl-6">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-glow">
            / {about.overline}
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-6 font-head text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {about.heading}
          </h2>
        </Reveal>

        <div className="mt-8 space-y-5">
          {about.body.map((p, i) => (
            <Reveal key={i} delay={0.12 + i * 0.06}>
              <p className="max-w-xl font-body text-base leading-relaxed text-white/60">
                {p}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3">
          {about.stats.map((s, i) => (
            <Reveal
              key={s.label}
              delay={0.1 + i * 0.08}
              className="bg-ink p-6"
            >
              <div
                className="font-head text-3xl font-bold tracking-tight text-white"
                data-testid={`stat-value-${i}`}
              >
                {s.value}
              </div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-widest text-white/40">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
