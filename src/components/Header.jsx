import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";

function Header({ homeRef, skillsRef, contactRef, projectsRef }) {
  const [hasShadow, setHasShadow] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const sectionRefs = [
    { section: 'Home', ref: homeRef },
    { section: 'Projects', ref: projectsRef },
    { section: 'Skills', ref: skillsRef },
    { section: 'Contact', ref: contactRef },
  ];

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // 60% of the section needs to be in view
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.dataset.section);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.forEach(({ ref, section }) => {
      if (ref.current) {
        ref.current.dataset.section = section;
        observer.observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-white ${
        hasShadow ? "border-b-[2px] shadow-lg" : ""
      } transition-all duration-300 py-5 flex justify-between items-center px-6`}
    >
      <FaCode />
      <nav>
        <ul className="flex justify-center items-center gap-10">
          {sectionRefs.map(({ section, ref }) => (
            <li
              key={section}
              className={`cursor-pointer relative inline-block group hover:font-semibold ${
                activeSection === section ? "text-black font-bold" : ""
              }  transition-all duration-200 ` }
              onClick={() => scrollToSection(ref)}
            >
              {section}
              <span
                className={`absolute bottom-0 left-[2px] right-[2px] h-0.5 bg-black transform ${
                  activeSection === section
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-1 opacity-0"
                } transition-all duration-200`}
              />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
