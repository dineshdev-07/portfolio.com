import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { resumeData } from "./data/resumeData";
import ScrollToTopButton from "./components/ScrollToTopButton";

const themeKey = "portfolio-theme";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem(themeKey);
    if (savedTheme) return savedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem(themeKey, theme);
  }, [theme]);

  const navigation = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Contact", href: "#contact" },
    ],
    [],
  );

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-500">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-12rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[var(--hero-glow)] blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-4rem] h-[22rem] w-[22rem] rounded-full bg-[var(--accent-soft)] blur-3xl" />
      </div>

      <Navbar
        brand={resumeData.name}
        links={navigation}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main className="relative z-10">
        <Hero data={resumeData} />
        <About summary={resumeData.summary} />
        <Skills categories={resumeData.skills} />
        <Projects projects={resumeData.projects} />
        <Experience
          education={resumeData.education}
          experience={resumeData.experience}
        />
        <Contact contact={resumeData.contact} />
      </main>

      <Footer name={resumeData.name} />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
