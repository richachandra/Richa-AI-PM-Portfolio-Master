import { skills } from "../../data/content";
import SectionHeading from "../shared/SectionHeading";
import Reveal from "../shared/Reveal";

export const Skills = () => (
  <section
    id="skills"
    className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32"
    data-testid="skills-section"
  >
    <SectionHeading overline="Capabilities">
      The full stack of<br className="hidden sm:block" /> product craft.
    </SectionHeading>

    <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
      {skills.map((group, i) => (
        <Reveal
          key={group.title}
          delay={i * 0.08}
          className="group glass relative overflow-hidden rounded-2xl p-7 transition-colors duration-500 hover:border-white/25"
          data-testid={`skill-card-${i}`}
        >
          <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-cyan-glow/0 blur-2xl transition-all duration-500 group-hover:bg-cyan-glow/20" />
          <span className="font-mono text-xs text-cyan-glow">
            0{i + 1}
          </span>
          <h3 className="mt-4 font-head text-xl font-medium text-white">
            {group.title}
          </h3>
          <ul className="mt-5 space-y-2.5">
            {group.items.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 font-body text-sm text-white/55"
              >
                <span className="h-1 w-1 rounded-full bg-white/40" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Skills;
