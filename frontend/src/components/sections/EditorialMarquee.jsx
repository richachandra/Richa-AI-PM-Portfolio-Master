import Marquee from "react-fast-marquee";
import { marqueeItems } from "../../data/content";

export const EditorialMarquee = () => (
  <section
    className="border-y border-white/10 bg-ink py-10"
    data-testid="marquee-section"
    aria-hidden
  >
    <Marquee speed={40} gradient={false} autoFill>
      {marqueeItems.map((item, i) => (
        <div key={i} className="flex items-center">
          <span className="px-8 font-head text-3xl font-medium tracking-tight text-white/90 sm:text-4xl lg:text-5xl">
            {item}
          </span>
          <span className="text-3xl text-cyan-glow">✳</span>
        </div>
      ))}
    </Marquee>
  </section>
);

export default EditorialMarquee;
