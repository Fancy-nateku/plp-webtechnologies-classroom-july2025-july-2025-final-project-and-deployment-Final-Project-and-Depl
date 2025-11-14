"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Header_1 = __importDefault(require("./components/Header"));
const Home_1 = __importDefault(require("./pages/Home"));
const About_1 = __importDefault(require("./pages/About"));
const Projects_1 = __importDefault(require("./pages/Projects"));
const Contact_1 = __importDefault(require("./pages/Contact"));
const NotFound_1 = __importDefault(require("./pages/NotFound"));
const ScanlineWrapper_1 = __importDefault(require("./components/ScanlineWrapper"));
const routes = {
    "": Home_1.default,
    "#about": About_1.default,
    "#projects": Projects_1.default,
    "#contact": Contact_1.default,
};
const App = () => {
    const [isDarkMode, setIsDarkMode] = (0, react_1.useState)(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            const storedTheme = window.localStorage.getItem("theme");
            if (storedTheme)
                return storedTheme === "dark";
            return window.matchMedia("(prefers-color-scheme: dark)").matches;
        }
        return true; // Default to dark mode
    });
    const [location, setLocation] = (0, react_1.useState)(window.location.hash || "");
    (0, react_1.useEffect)(() => {
        const handleHashChange = () => {
            setLocation(window.location.hash || "");
        };
        window.addEventListener("hashchange", handleHashChange);
        return () => {
            window.removeEventListener("hashchange", handleHashChange);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);
    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
    const CurrentPage = routes[location] || NotFound_1.default;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] transition-colors duration-300", children: [(0, jsx_runtime_1.jsx)("a", { href: "#main-content", className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-[var(--accent-color)] focus:text-white", children: "Skip to main content" }), (0, jsx_runtime_1.jsx)(Header_1.default, { isDarkMode: isDarkMode, toggleDarkMode: toggleDarkMode }), (0, jsx_runtime_1.jsx)("div", { className: "flex-grow", children: (0, jsx_runtime_1.jsx)(ScanlineWrapper_1.default, { children: (0, jsx_runtime_1.jsx)("main", { id: "main-content", className: "container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32", children: (0, jsx_runtime_1.jsx)(CurrentPage, {}) }) }) }), (0, jsx_runtime_1.jsxs)("footer", { className: "w-full p-2 text-center text-xs font-mono text-[var(--text-color)]/50 z-0", children: ["\u00A9 ", new Date().getFullYear(), " // SYSTEM STATUS: ONLINE"] })] }));
};
exports.default = App;
