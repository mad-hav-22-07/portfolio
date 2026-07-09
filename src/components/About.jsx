import { academicHighlights, education } from "../data/portfolio";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          About
        </Reveal>
        <Reveal as="h2" className="section__title" delay={60}>
          A mechanical engineer who ships software
        </Reveal>
        <Reveal as="p" className="section__lead" delay={120}>
          I'm a sophomore at IIT Madras in Mechanical Engineering, with experience across Web
          Dev, Agentic AI, and exploring Deep Tech. Day to day, that means leading software for
          Team Abhiyaan's autonomous vehicle program, directing{" "}
          <a href="https://tensors.in/" target="_blank" rel="noreferrer">
            Tensors
          </a>
          , the student-run nonprofit bridging technology and social impact, and mentoring JEE
          aspirants through Avanti Fellows, alongside full-stack development and quantitative
          research on the side.
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__education" delay={80}>
            <h3>Education</h3>
            <table className="edu-table">
              <tbody>
                {education.map((e) => (
                  <tr key={e.program}>
                    <td>
                      <div className="edu-table__program">{e.program}</div>
                      <div className="edu-table__institution">{e.institution}</div>
                    </td>
                    <td className="edu-table__metric">{e.metric}</td>
                    <td className="edu-table__year">{e.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>

          <Reveal className="about__highlights" delay={160}>
            <h3>Academic Highlights</h3>
            <ul>
              {academicHighlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
