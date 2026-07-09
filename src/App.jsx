import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Featured from "./components/Featured";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Featured />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
