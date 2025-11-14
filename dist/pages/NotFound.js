"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const glitchChars = "!<>-_\\/[]{}—=+*^?#________";
const originalText = "404: CONNECTION LOST";
const NotFound = () => {
    const [glitchText, setGlitchText] = (0, react_1.useState)(originalText);
    (0, react_1.useEffect)(() => {
        const interval = setInterval(() => {
            let corruptedText = "";
            for (let i = 0; i < originalText.length; i++) {
                if (Math.random() > 0.85 &&
                    originalText[i] !== " " &&
                    originalText[i] !== ":") {
                    corruptedText += glitchChars.charAt(Math.floor(Math.random() * glitchChars.length));
                }
                else {
                    corruptedText += originalText[i];
                }
            }
            setGlitchText(corruptedText);
        }, 100);
        return () => clearInterval(interval);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("section", { "aria-label": "System Error", className: "flex flex-col items-center justify-center text-center h-[calc(100vh-10rem)] md:h-[calc(100vh-12rem)]", children: [(0, jsx_runtime_1.jsx)("div", { className: "relative", children: (0, jsx_runtime_1.jsx)("h2", { className: "text-4xl md:text-6xl font-bold font-mono text-[var(--accent-color)] glitch", "data-text": glitchText, children: glitchText }) }), (0, jsx_runtime_1.jsx)("p", { className: "mt-6 text-lg text-[var(--text-color)]/80", children: "The requested node could not be found in the network. Rerouting..." }), (0, jsx_runtime_1.jsx)("a", { href: "#", className: "mt-8 font-mono px-6 py-3 border-2 border-[var(--terminal-green)] text-[var(--terminal-green)] hover:bg-[var(--terminal-green)] hover:text-[var(--bg-dark)] transition-all duration-300", children: "> RE-ESTABLISH LINK_" })] }));
};
exports.default = NotFound;
