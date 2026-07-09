import { featured } from "../data/portfolio";
import { ExternalLinkIcon } from "./Icons";
import varahaPhoto from "../assets/varaha-photo.jpg";
import Reveal from "./Reveal";

export default function Featured() {
  return (
    <section id="featured" className="section">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          Featured Work
        </Reveal>
        <Reveal as="h2" className="section__title" delay={60}>
          {featured.title}
        </Reveal>

        <div className="featured">
          <Reveal className="featured__main" delay={100}>
            <p className="featured__meta">
              {featured.org} · {featured.event}
            </p>
            <p className="featured__role">{featured.role}</p>
            <p className="featured__description">{featured.description}</p>

            <ul className="featured__points">
              {featured.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>

            <div className="featured__links">
              <a className="btn btn--primary btn--sm" href={featured.reportUrl} target="_blank" rel="noreferrer">
                Design Report <ExternalLinkIcon />
              </a>
              {featured.links.map((l) => (
                <a key={l.url} className="btn btn--ghost btn--sm" href={l.url} target="_blank" rel="noreferrer">
                  {l.label} <ExternalLinkIcon />
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal className="featured__aside" delay={200}>
            <div className="featured__image-frame">
              <img src={varahaPhoto} alt="Varaha, Team Abhiyaan's autonomous ground vehicle" />
            </div>
            <p className="featured__caption">Varaha on the test track ahead of IGVC 2026</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
