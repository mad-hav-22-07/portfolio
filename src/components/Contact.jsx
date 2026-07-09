import { profile } from "../data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowDownIcon } from "./Icons";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section section--dark">
      <div className="container contact">
        <Reveal as="p" className="eyebrow">
          Contact
        </Reveal>
        <Reveal as="h2" className="section__title" delay={60}>
          Let's build something
        </Reveal>
        <Reveal as="p" className="section__lead" delay={120}>
          Open to internships, research collaborations, and interesting problems in robotics,
          quant, or full-stack systems. The fastest way to reach me is email.
        </Reveal>

        <Reveal className="contact__actions" delay={180}>
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            <MailIcon /> {profile.email}
          </a>
          <a className="btn btn--ghost" href={profile.resumeUrl} download>
            Download Resume <ArrowDownIcon />
          </a>
        </Reveal>

        <Reveal className="contact__socials" delay={240}>
          <a href={profile.github} target="_blank" rel="noreferrer">
            <GitHubIcon /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon /> LinkedIn
          </a>
        </Reveal>
      </div>
    </section>
  );
}
