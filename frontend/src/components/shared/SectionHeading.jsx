import Reveal from "./Reveal";

export const SectionHeading = ({ overline, children, id, className = "" }) => (
  <div className={className} id={id}>
    {overline && (
      <Reveal>
        <span
          className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-glow"
          data-testid={`overline-${overline.toLowerCase().replace(/\s+/g, "-")}`}
        >
          / {overline}
        </span>
      </Reveal>
    )}
    <Reveal delay={0.08}>
      <h2 className="mt-6 max-w-4xl font-head text-4xl font-medium leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
        {children}
      </h2>
    </Reveal>
  </div>
);

export default SectionHeading;
