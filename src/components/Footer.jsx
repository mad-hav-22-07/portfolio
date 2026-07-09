import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with React &amp; Vite</p>
      </div>
    </footer>
  );
}
