import React from "react";
import GlitchTyper from "../components/GlitchTyper";

const Home: React.FC = () => {
  return (
    <section
      aria-label="Hero Terminal"
      className="flex flex-col items-center justify-center text-center h-[calc(100vh-10rem)] md:h-[calc(100vh-12rem)]"
    >
      <div
        className="w-full max-w-4xl p-4 md:p-8 border-2 border-[var(--accent-color)]/50 bg-[var(--bg-color)]/50"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)",
        }}
      >
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
          <GlitchTyper />
        </h1>
        <p className="mt-4 text-base md:text-lg text-[var(--text-color)]/80">
          A Senior Frontend Architect crafting immersive digital experiences
          from the heart of Neo-Tokyo.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 font-mono">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 border-2 border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-[var(--bg-dark)] transition-all duration-300 transform hover:scale-105"
          >
            &gt; VIEW PROJECTS_
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 border-2 border-[var(--border-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300"
          >
            &gt; ESTABLISH CONTACT_
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
