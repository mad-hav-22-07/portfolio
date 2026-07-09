import { projects } from "../data/portfolio";
import { GitHubIcon, ExternalLinkIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section section--alt">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          Projects
        </Reveal>
        <Reveal as="h2" className="section__title" delay={60}>
          Things I've built
        </Reveal>

        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <a className="project-card" href={p.url} target="_blank" rel="noreferrer">
                <div className="project-card__head">
                  <span className="project-card__tag">{p.tag}</span>
                  <GitHubIcon className="project-card__icon" />
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="project-card__stack">
                  {p.stack.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
                <span className="project-card__link">
                  View on GitHub <ExternalLinkIcon />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
