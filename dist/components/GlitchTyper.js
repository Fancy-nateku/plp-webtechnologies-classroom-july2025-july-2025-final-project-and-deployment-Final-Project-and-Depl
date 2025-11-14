"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const phrases = [
    "Initializing Neural Interface...",
    "Compiling Cybernetic Code...",
    "Accessing Data Mainframe...",
    "Bypassing Security Grids...",
    "Welcome, Shadowrunner.",
];
const glitchChars = "アカサタナハマヤラワABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/\\<>";
const GlitchTyper = () => {
    const [text, setText] = (0, react_1.useState)("");
    const phraseIndex = (0, react_1.useRef)(0);
    const charIndex = (0, react_1.useRef)(0);
    const frame = (0, react_1.useRef)(0);
    const lastTime = (0, react_1.useRef)(0);
    (0, react_1.useEffect)(() => {
        let animationFrameId;
        const animate = (time) => {
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
                const randomGlitches = Array.from({ length: 3 }, () => glitchChars[Math.floor(Math.random() * glitchChars.length)]).join("");
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
    return ((0, jsx_runtime_1.jsxs)("span", { className: "font-mono text-[var(--terminal-green)] text-shadow-green", children: [text, (0, jsx_runtime_1.jsx)("span", { className: "cursor" })] }));
};
exports.default = GlitchTyper;
