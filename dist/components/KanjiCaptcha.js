"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const constants_1 = require("../constants");
const generateChallenge = () => {
    const shuffled = [...constants_1.KANJI_CAPTCHA_SET].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
};
const KanjiCaptcha = (0, react_1.forwardRef)(({ onVerified }, ref) => {
    const [challenge, setChallenge] = (0, react_1.useState)([]);
    const [userInput, setUserInput] = (0, react_1.useState)("");
    const [status, setStatus] = (0, react_1.useState)("pending");
    const resetChallenge = (0, react_1.useCallback)(() => {
        setChallenge(generateChallenge());
        setUserInput("");
        setStatus("pending");
        onVerified(false);
    }, [onVerified]);
    (0, react_1.useImperativeHandle)(ref, () => ({
        reset: resetChallenge,
    }));
    (0, react_1.useEffect)(() => {
        resetChallenge();
    }, [resetChallenge]);
    const handleChange = (e) => {
        const value = e.target.value.toLowerCase();
        setUserInput(value);
        const expectedAnswer = challenge.map((k) => k.romaji).join("");
        if (value === expectedAnswer) {
            setStatus("success");
            onVerified(true);
        }
        else {
            setStatus("pending");
            onVerified(false);
        }
    };
    const borderColor = status === "success"
        ? "border-[var(--terminal-green)]"
        : status === "error"
            ? "border-red-500"
            : "border-[var(--border-color)]";
    return ((0, jsx_runtime_1.jsxs)("div", { className: "space-y-2", children: [(0, jsx_runtime_1.jsx)("label", { className: "block text-sm font-mono tracking-wider", children: "SECURITY CHECK // TYPE ROMAJI" }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-4 p-3 bg-[var(--bg-color)] border border-[var(--border-color)]", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex-1 flex justify-center items-center gap-4 text-3xl text-[var(--accent-color)] font-bold", children: challenge.map((k) => ((0, jsx_runtime_1.jsx)("span", { children: k.char }, k.char))) }), (0, jsx_runtime_1.jsx)("button", { type: "button", onClick: resetChallenge, "aria-label": "Refresh captcha", className: "p-1 text-[var(--text-color)]/50 hover:text-[var(--accent-color)] transition-colors", children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", viewBox: "0 0 20 20", fill: "currentColor", children: (0, jsx_runtime_1.jsx)("path", { fillRule: "evenodd", d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z", clipRule: "evenodd" }) }) })] }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: userInput, onChange: handleChange, placeholder: "e.g. dennou", disabled: status === "success", className: `w-full bg-transparent p-3 font-mono border-2 ${borderColor} focus:border-[var(--accent-color)] focus:outline-none transition-colors`, autoComplete: "off", spellCheck: "false" }), status === "success" && ((0, jsx_runtime_1.jsx)("p", { className: "text-sm text-[var(--terminal-green)] font-mono", children: "Verified." }))] }));
});
exports.default = KanjiCaptcha;
