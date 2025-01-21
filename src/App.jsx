import { useRef, useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactUs from "./components/ContactUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    console.log("Toggle Dark Mode clicked");
    setIsDarkMode(!isDarkMode);
  };
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    console.log("Current theme:", isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="relative md:text-lg lg:text-xl xl:text-2xl" data-theme={isDarkMode ? 'dark' : 'light'}>
      <Header
        homeRef={homeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        skillsRef={skillsRef}
        toggleDarkMode={toggleDarkMode}
        isDarkMode={isDarkMode}
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