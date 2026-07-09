import { useEffect, useState } from "react";
import { profile } from "../data/portfolio";
import { ArrowDownIcon } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#featured", label: "Featured" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand">
          <span className="navbar__mark">M</span>
          <span className="navbar__name">Madhav Pradeep</span>
        </a>

        <nav className="navbar__links">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a className="btn btn--primary btn--sm" href={profile.resumeUrl} download>
            Resume <ArrowDownIcon />
          </a>
        </div>

        <button
          className={`navbar__burger ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="navbar__mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a className="btn btn--primary" href={profile.resumeUrl} download>
            Download Resume
          </a>
        </nav>
      )}
    </header>
  );
}
