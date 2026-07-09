import { profile, heroStats } from "../data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./Icons";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__blob hero__blob--one" aria-hidden="true" />
      <div className="hero__blob hero__blob--two" aria-hidden="true" />
      <div className="container hero__inner">
        <p className="eyebrow" style={{ animationDelay: "50ms" }}>
          Hi, I'm
        </p>
        <h1 className="hero__name" style={{ animationDelay: "140ms" }}>
          {profile.name}
        </h1>
        <h2 style={{ animationDelay: "230ms" }}>{profile.tagline}</h2>
        <p className="hero__subtitle" style={{ animationDelay: "320ms" }}>
          {profile.subtitle}
        </p>

        <div className="hero__meta" style={{ animationDelay: "410ms" }}>
          <span>
            <MapPinIcon /> {profile.location}
          </span>
        </div>

        <div className="hero__actions" style={{ animationDelay: "500ms" }}>
          <a className="btn btn--primary" href="#featured">
            View Featured Work
          </a>
          <a className="btn btn--ghost" href="#contact">
            Get in Touch
          </a>
        </div>

        <div className="hero__socials" style={{ animationDelay: "590ms" }}>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <MailIcon />
          </a>
        </div>

        <div className="hero__stats" style={{ animationDelay: "680ms" }}>
          {heroStats.map((s) => (
            <div className="hero__stat" key={s.label}>
              <span className="hero__stat-value">{s.value}</span>
              <span className="hero__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
