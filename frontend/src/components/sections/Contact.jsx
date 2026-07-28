import { contact, profile } from "../../data/content";
import { Download } from "lucide-react";
import Reveal from "../shared/Reveal";
import Magnetic from "../shared/Magnetic";

export const Contact = () => (
  <footer
    id="contact"
    className="relative overflow-hidden bg-ink pt-24 md:pt-32"
    data-testid="contact-section"
  >
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(60%_120%_at_50%_100%,rgba(0,240,255,0.12),transparent_70%)]" />

    <div className="relative mx-auto max-w-7xl px-6 md:px-12">
      <Reveal>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-glow">
          / Contact
        </span>
      </Reveal>

      <Reveal delay={0.08}>
        <h2 className="mt-8 font-head text-[13vw] font-bold leading-[0.9] tracking-tighter text-white lg:text-[9rem]">
          {contact.heading}
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-col items-start justify-between gap-12 border-t border-white/10 pt-12 md:flex-row md:items-end">
        <div>
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Magnetic className="inline-block">
                <a
                  href={`mailto:${profile.email}`}
                  data-testid="contact-email-cta"
                  className="inline-flex items-center gap-4 rounded-full bg-white px-8 py-5 font-head text-xl font-medium text-ink transition-colors duration-300 hover:bg-cyan-glow"
                >
                  {profile.email}
                </a>
              </Magnetic>
              <a
                href="/resume.pdf"
                download="RichaChandra_ProductManager.pdf"
                data-testid="download-resume-btn"
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 px-7 py-5 font-head text-base font-medium text-white transition-colors duration-300 hover:border-cyan-glow hover:text-cyan-glow"
              >
                <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                Download résumé
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-sm font-body text-sm text-white/50">
              Open to senior & lead product roles, advisory and the occasional
              ambitious side quest.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3">
          {contact.socials.map((s, i) => (
            <Reveal key={s.label} delay={0.05 * i} className="min-w-0">
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`social-${s.label.toLowerCase()}`}
                className="group flex min-w-0 flex-col"
              >
                <span className="font-mono text-[11px] uppercase tracking-widest text-white/40">
                  {s.label}
                </span>
                <span className="break-words font-body text-base text-white/80 transition-colors duration-300 group-hover:text-cyan-glow">
                  {s.value}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
        <span className="font-mono text-xs tracking-widest text-white/40">
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="font-mono text-xs tracking-widest text-white/40">
          Designed & built with intent.
        </span>
      </div>
    </div>
  </footer>
);

export default Contact;
