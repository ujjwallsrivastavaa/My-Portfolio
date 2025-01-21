import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaHome, FaFolder, FaLaptopCode, FaCommentDots } from "react-icons/fa";


function Header({ homeRef, skillsRef, contactRef, projectsRef, toggleDarkMode, isDarkMode }) {
  const [hasShadow, setHasShadow] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const sectionRefs = [
    { section: 'Home', ref: homeRef, icon: <FaHome /> },
    { section: 'Projects', ref: projectsRef, icon: <FaFolder /> },
    { section: 'Skills', ref: skillsRef, icon: <FaLaptopCode /> },
    { section: 'Contact', ref: contactRef, icon: <FaCommentDots /> },
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
      className={`fixed top-0 left-0 right-0 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'
        } ${hasShadow ? "border-b-[2px] shadow-lg" : ""} transition-all duration-300 py-5 flex justify-between items-center px-6`}
    >
      {/* <FaCode /> */}
      <nav>
        <ul className="flex justify-center items-center gap-10">
          {sectionRefs.map(({ section, ref, icon }) => (
            <li
              key={section}
              className={`cursor-pointer relative inline-block group hover:font-semibold ${activeSection === section ? "font-bold" : ""
                } transition-all duration-200`}
              onClick={() => scrollToSection(ref)}
            >
              <div className="flex items-center justify-center">
                <div className="text-4xl"> {/* Adjust size here, e.g., text-3xl for larger icons */}
                  {icon} {/* This will render the icon */}
                </div>
              </div>

              {/* Tooltip for section name */}
              <span
                className={`absolute top-full left-1/2 transform -translate-x-1/2 text-sm mt-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200`}
              >
                {section} {/* Section name (HOME, SKILLS, etc.) */}
              </span>
              <span
                className={`absolute bottom-0 left-[2px] right-[2px] h-0.5 ${isDarkMode ? 'bg-white' : 'bg-black'
                  } transform ${activeSection === section
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-1 opacity-0"
                  } transition-all duration-200`}
              />
            </li>
          ))}
        </ul>
      </nav>
      <button onClick={toggleDarkMode} className="text-5xl ">
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
}

export default Header;