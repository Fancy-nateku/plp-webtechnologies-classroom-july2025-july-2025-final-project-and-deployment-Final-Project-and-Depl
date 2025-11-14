"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const GlitchTyper_1 = __importDefault(require("../components/GlitchTyper"));
const Home = () => {
    return ((0, jsx_runtime_1.jsx)("section", { "aria-label": "Hero Terminal", className: "flex flex-col items-center justify-center text-center h-[calc(100vh-10rem)] md:h-[calc(100vh-12rem)]", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-4xl p-4 md:p-8 border-2 border-[var(--accent-color)]/50 bg-[var(--bg-color)]/50", style: {
                clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)",
            }, children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-2xl md:text-4xl lg:text-5xl font-bold tracking-tighter", children: (0, jsx_runtime_1.jsx)(GlitchTyper_1.default, {}) }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-base md:text-lg text-[var(--text-color)]/80", children: "A Senior Frontend Architect crafting immersive digital experiences from the heart of Neo-Tokyo." }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 font-mono", children: [(0, jsx_runtime_1.jsx)("a", { href: "#projects", className: "w-full sm:w-auto px-6 py-3 border-2 border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-[var(--bg-dark)] transition-all duration-300 transform hover:scale-105", children: "> VIEW PROJECTS_" }), (0, jsx_runtime_1.jsx)("a", { href: "#contact", className: "w-full sm:w-auto px-6 py-3 border-2 border-[var(--border-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300", children: "> ESTABLISH CONTACT_" })] })] }) }));
};
exports.default = Home;
