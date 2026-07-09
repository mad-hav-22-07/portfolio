import { achievements, leadership } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          Achievements
        </Reveal>
        <Reveal as="h2" className="section__title" delay={60}>
          Competitions &amp; recognition
        </Reveal>

        <div className="achievement-grid">
          {achievements.map((a, i) => (
            <Reveal className="achievement-card" delay={i * 60} key={a.title}>
              <h3>{a.title}</h3>
              <p className="achievement-card__meta">{a.meta}</p>
              <p>{a.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="h3" className="subsection__title">
          Leadership
        </Reveal>
        <div className="leadership-grid">
          {leadership.map((l, i) => (
            <Reveal className="leadership-card" delay={i * 60} key={l.role + l.org}>
              <div className="leadership-card__head">
                <div>
                  <h4>{l.role}</h4>
                  <p className="leadership-card__org">{l.org}</p>
                </div>
                <span className="leadership-card__period">{l.period}</span>
              </div>
              <p>{l.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
