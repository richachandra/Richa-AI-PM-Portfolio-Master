import { careerJourney } from "../../data/content";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

export const CareerJourney = () => (
  <section
    id="career-journey"
    className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
    data-testid="career-journey-section"
  >
    <SectionHeading overline="Career Journey">
      Fourteen years shipping<br className="hidden sm:block" /> products at scale.
    </SectionHeading>

    <div className="relative mt-20">
      {/* Vertical rail */}
      <div className="pointer-events-none absolute left-4 top-2 bottom-2 w-px bg-white/10 md:left-[calc(33.333%-1.5rem)]" />

      <ol className="space-y-14">
        {careerJourney.map((role, i) => (
          <Reveal
            key={`${role.company}-${role.period}`}
            delay={i * 0.05}
            className="relative grid grid-cols-1 items-start gap-6 pl-12 md:grid-cols-12 md:gap-8 md:pl-0"
            data-testid={`career-role-${i}`}
          >
            {/* Rail dot */}
            <span
              className={`absolute left-[10px] top-2 h-3 w-3 -translate-x-1/2 rounded-full ring-4 ring-ink md:left-[calc(33.333%-1.5rem)] ${
                i === 0
                  ? "bg-cyan-glow shadow-[0_0_18px_rgba(0,240,255,0.6)] animate-pulse-glow"
                  : "bg-white/40"
              }`}
              aria-hidden
            />

            {/* Period */}
            <div className="md:col-span-4 md:pr-10">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/45">
                {role.period}
              </span>
            </div>

            {/* Role details */}
            <div className="md:col-span-8">
              <h3 className="font-head text-2xl font-medium leading-tight tracking-tight text-white md:text-3xl">
                {role.title}
              </h3>
              <div className="mt-2 flex flex-wrap items-center gap-x-2 font-body text-sm text-white/50">
                <span className="text-white/80">{role.company}</span>
                <span className="text-white/25">·</span>
                <span>{role.location}</span>
              </div>
              <p className="mt-4 max-w-2xl font-body text-[15px] leading-relaxed text-white/60">
                {role.achievement}
              </p>
            </div>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default CareerJourney;
