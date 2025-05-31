import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Experience from "./components/Experience";
import Vision from "./components/Vision";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="flex w-[800vw] h-screen snap-x snap-mandatory overflow-x-scroll overflow-y-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Experience />
      <Vision />
      <Contact />
    </div>
  );
}

export default App;
