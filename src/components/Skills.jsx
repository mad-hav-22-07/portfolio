import { skills } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          Skills
        </Reveal>
        <Reveal as="h2" className="section__title" delay={60}>
          Tools &amp; technologies
        </Reveal>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal className="skills-group" delay={i * 50} key={category}>
              <h3>{category}</h3>
              <div className="skills-group__tags">
                {items.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
