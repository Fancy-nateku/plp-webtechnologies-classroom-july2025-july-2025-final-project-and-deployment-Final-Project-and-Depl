import React from "react";

const SkillPill: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="font-mono text-sm border border-[var(--border-color)] px-3 py-1 text-[var(--terminal-green)] bg-[var(--bg-color)] transition-all duration-300 hover:border-[var(--terminal-green)] hover:text-white hover:bg-[var(--terminal-green)]/20">
    {children}
  </div>
);

const About: React.FC = () => {
  const avatarUrl = "https://picsum.photos/seed/avatar/300/300";
  return (
    <section aria-label="Hacker Bio">
      <h2 className="text-3xl md:text-4xl font-bold font-mono text-center text-[var(--accent-color)]">
        &gt; LOAD BIO.TXT
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <div className="md:col-span-1 flex justify-center items-start">
          <div
            className="relative w-48 h-48 md:w-64 md:h-64 border-2 border-[var(--accent-color)] p-2 avatar-glitch-wrapper"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 85%)",
              backgroundImage: `url(${avatarUrl})`,
            }}
          >
            <img
              src={avatarUrl}
              alt="Glitching Avatar"
              className="w-full h-full object-cover grayscale brightness-125 contrast-125 opacity-75"
            />
            <div className="absolute inset-0 bg-green-900/30 mix-blend-color"></div>
          </div>
        </div>
        <div className="md:col-span-2 space-y-6 text-lg text-[var(--text-color)]/90">
          <p>
            They call me a ghost in the machine, a digital ronin navigating the
            neon-drenched circuits of the web. I'm a frontend developer with a
            passion for building not just websites, but experiences. My
            philosophy is rooted in brutalist honesty and cyberpunk
            futurism—functionality that's raw, powerful, and aesthetically
            sharp.
          </p>
          <p>
            With over a decade of experience forging interfaces from raw code, I
            specialize in bringing complex systems to life with clean,
            performant, and accessible solutions. My terminal is my katana, and
            my code is my creed.
          </p>
          <div className="pt-4">
            <h3 className="font-mono text-xl text-[var(--terminal-green)] mb-4">
              {" "}
              // SKILLSET_MATRIX
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillPill>React</SkillPill>
              <SkillPill>TypeScript</SkillPill>
              <SkillPill>Node.js</SkillPill>
              <SkillPill>Next.js</SkillPill>
              <SkillPill>Tailwind CSS</SkillPill>
              <SkillPill>WebGL</SkillPill>
              <SkillPill>UI/UX Design</SkillPill>
              <SkillPill>Web Accessibility</SkillPill>
              <SkillPill>Performance Tuning</SkillPill>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
