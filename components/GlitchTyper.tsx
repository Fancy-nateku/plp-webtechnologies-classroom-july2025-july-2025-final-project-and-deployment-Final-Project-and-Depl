import React, { useState, useEffect, useRef } from "react";

const phrases = [
  "Initializing Neural Interface...",
  "Compiling Cybernetic Code...",
  "Accessing Data Mainframe...",
  "Bypassing Security Grids...",
  "Welcome, Shadowrunner.",
];
const glitchChars =
  "アカサタナハマヤラワABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\<>";

const GlitchTyper: React.FC = () => {
  const [text, setText] = useState("");
  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const frame = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    let animationFrameId: number;

    const animate = (time: number) => {
      if (time - lastTime.current < 40) {
        // throttle to ~25fps
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      lastTime.current = time;

      const currentPhrase = phrases[phraseIndex.current];
      const partialPhrase = currentPhrase.substring(0, charIndex.current);

      let displayText = "";
      for (let i = 0; i < partialPhrase.length; i++) {
        const isGlitched = Math.random() < 0.05;
        displayText += isGlitched
          ? glitchChars[Math.floor(Math.random() * glitchChars.length)]
          : partialPhrase[i];
      }

      if (charIndex.current < currentPhrase.length) {
        const randomGlitches = Array.from(
          { length: 3 },
          () => glitchChars[Math.floor(Math.random() * glitchChars.length)]
        ).join("");
        displayText += randomGlitches;
      }

      setText(displayText);

      frame.current++;
      if (frame.current % 2 === 0) {
        // control typing speed
        if (charIndex.current < currentPhrase.length) {
          charIndex.current++;
        }
      }

      if (charIndex.current === currentPhrase.length) {
        if (frame.current > 200) {
          // pause at end of phrase
          frame.current = 0;
          charIndex.current = 0;
          phraseIndex.current = (phraseIndex.current + 1) % phrases.length;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <span className="font-mono text-[var(--terminal-green)] text-shadow-green">
      {text}
      <span className="cursor"></span>
    </span>
  );
};

export default GlitchTyper;
