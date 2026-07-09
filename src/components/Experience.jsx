import { experience } from "../data/portfolio";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          Experience
        </Reveal>
        <Reveal as="h2" className="section__title">
          Where I've worked
        </Reveal>

        <div className="timeline">
          {experience.map((job, i) => (
            <Reveal
              as="div"
              className={`timeline__item ${job.highlight ? "timeline__item--highlight" : ""}`}
              delay={i * 70}
              key={job.role + job.org}
            >
              <div className="timeline__marker" />
              <div className="timeline__content">
                <div className="timeline__head">
                  <h3>
                    {job.role}
                    {job.highlight && <span className="timeline__badge">Core</span>}
                  </h3>
                  <span className="timeline__period">{job.period}</span>
                </div>
                <p className="timeline__org">{job.org}</p>
                <ul>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
