import React, { useState, useEffect } from "react";

const glitchChars = "!<>-_\\/[]{}—=+*^?#________";
const originalText = "404: CONNECTION LOST";

const NotFound: React.FC = () => {
  const [glitchText, setGlitchText] = useState(originalText);

  useEffect(() => {
    const interval = setInterval(() => {
      let corruptedText = "";
      for (let i = 0; i < originalText.length; i++) {
        if (
          Math.random() > 0.85 &&
          originalText[i] !== " " &&
          originalText[i] !== ":"
        ) {
          corruptedText += glitchChars.charAt(
            Math.floor(Math.random() * glitchChars.length)
          );
        } else {
          corruptedText += originalText[i];
        }
      }
      setGlitchText(corruptedText);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-label="System Error"
      className="flex flex-col items-center justify-center text-center h-[calc(100vh-10rem)] md:h-[calc(100vh-12rem)]"
    >
      <div className="relative">
        <h2
          className="text-4xl md:text-6xl font-bold font-mono text-[var(--accent-color)] glitch"
          data-text={glitchText}
        >
          {glitchText}
        </h2>
      </div>
      <p className="mt-6 text-lg text-[var(--text-color)]/80">
        The requested node could not be found in the network. Rerouting...
      </p>
      <a
        href="#"
        className="mt-8 font-mono px-6 py-3 border-2 border-[var(--terminal-green)] text-[var(--terminal-green)] hover:bg-[var(--terminal-green)] hover:text-[var(--bg-dark)] transition-all duration-300"
      >
        &gt; RE-ESTABLISH LINK_
      </a>
    </section>
  );
};

export default NotFound;
