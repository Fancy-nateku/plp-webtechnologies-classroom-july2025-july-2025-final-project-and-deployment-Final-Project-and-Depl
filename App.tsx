import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScanlineWrapper from "./components/ScanlineWrapper";

const routes: { [key: string]: React.ComponentType } = {
  "": Home,
  "#about": About,
  "#projects": Projects,
  "#contact": Contact,
};

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedTheme = window.localStorage.getItem("theme");
      if (storedTheme) return storedTheme === "dark";
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return true; // Default to dark mode
  });

  const [location, setLocation] = useState(window.location.hash || "");

  useEffect(() => {
    const handleHashChange = () => {
      setLocation(window.location.hash || "");
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  const CurrentPage = routes[location] || NotFound;

  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[var(--accent-color)] focus:text-white"
      >
        Skip to main content
      </a>
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex-grow">
        <ScanlineWrapper>
          <main
            id="main-content"
            className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
          >
            <CurrentPage />
          </main>
        </ScanlineWrapper>
      </div>
      <footer className="w-full p-2 text-center text-xs font-mono text-[var(--text-color)]/50 z-0">
        &copy; {new Date().getFullYear()} // SYSTEM STATUS: ONLINE
      </footer>
    </div>
  );
};

export default App;
