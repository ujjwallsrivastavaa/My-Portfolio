import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactUs from "./components/ContactUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  return (
    <div className="relative md:text-lg lg:text-xl xl:text-2xl">
      <Header
        homeRef={homeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        skillsRef={skillsRef}
      />
      <main className="mt-20">
        <Hero homeRef={homeRef} projectsRef={projectsRef} contactRef={contactRef} />
        <Projects projectsRef={projectsRef} />
        <Skills skillsRef={skillsRef} />
        <ContactUs contactRef={contactRef} />
      </main>
      <ToastContainer className="lg:text-xl" />
    </div>
  );
}

export default App;
