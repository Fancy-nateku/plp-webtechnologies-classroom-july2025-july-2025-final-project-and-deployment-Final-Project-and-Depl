"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const KanjiCaptcha_1 = __importDefault(require("../components/KanjiCaptcha"));
const Contact = () => {
    const [formData, setFormData] = (0, react_1.useState)({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = (0, react_1.useState)({ name: "", email: "", message: "" });
    const [isCaptchaVerified, setIsCaptchaVerified] = (0, react_1.useState)(false);
    const [formStatus, setFormStatus] = (0, react_1.useState)("idle");
    const captchaRef = (0, react_1.useRef)(null);
    const validateField = (name, value) => {
        switch (name) {
            case "name":
                return value.length < 2 ? "Name must be at least 2 characters." : "";
            case "email":
                return !/\S+@\S+\.\S+/.test(value)
                    ? "Please enter a valid email address."
                    : "";
            case "message":
                return value.length < 10
                    ? "Message must be at least 10 characters."
                    : "";
            default:
                return "";
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        const error = validateField(name, value);
        setErrors((prev) => ({ ...prev, [name]: error }));
    };
    const isFormValid = !Object.values(errors).some(Boolean) &&
        Object.values(formData).every((field) => field.trim() !== "") &&
        isCaptchaVerified;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid)
            return;
        setFormStatus("submitting");
        const form = e.target;
        const data = new FormData(form);
        const formBody = new URLSearchParams(data).toString();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: formBody,
        })
            .then(() => {
            setFormStatus("success");
            setFormData({ name: "", email: "", message: "" });
            captchaRef.current?.reset();
        })
            .catch((error) => {
            setFormStatus("error");
            console.error("Form submission error:", error);
        });
    };
    return ((0, jsx_runtime_1.jsxs)("section", { "aria-label": "Encrypted Line", className: "max-w-2xl mx-auto", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl md:text-4xl font-bold font-mono text-center text-[var(--accent-color)]", children: "> ENCRYPTED_LINE" }), (0, jsx_runtime_1.jsx)("p", { className: "mt-4 text-center text-[var(--text-color)]/80", children: "Connection is unstable. Authenticate to establish a secure channel." }), (0, jsx_runtime_1.jsxs)("form", { name: "contact", method: "POST", "data-netlify": "true", "data-netlify-honeypot": "bot-field", onSubmit: handleSubmit, className: "mt-12 space-y-6", children: [(0, jsx_runtime_1.jsx)("input", { type: "hidden", name: "form-name", value: "contact" }), (0, jsx_runtime_1.jsx)("p", { className: "hidden", children: (0, jsx_runtime_1.jsxs)("label", { children: ["Don\u2019t fill this out if you\u2019re human: ", (0, jsx_runtime_1.jsx)("input", { name: "bot-field" })] }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "name", className: "block text-sm font-mono tracking-wider mb-2", children: "CALLSIGN [NAME]" }), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "name", name: "name", required: true, minLength: 2, value: formData.name, onChange: handleChange, className: `w-full bg-transparent p-3 font-mono border-2 ${errors.name ? "border-red-500" : "border-[var(--border-color)]"} focus:border-[var(--accent-color)] focus:outline-none transition-colors` }), errors.name && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-xs mt-1 font-mono", children: errors.name }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "email", className: "block text-sm font-mono tracking-wider mb-2", children: "ENCRYPTED KEY [EMAIL]" }), (0, jsx_runtime_1.jsx)("input", { type: "email", id: "email", name: "email", required: true, value: formData.email, onChange: handleChange, className: `w-full bg-transparent p-3 font-mono border-2 ${errors.email ? "border-red-500" : "border-[var(--border-color)]"} focus:border-[var(--accent-color)] focus:outline-none transition-colors` }), errors.email && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-xs mt-1 font-mono", children: errors.email }))] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "message", className: "block text-sm font-mono tracking-wider mb-2", children: "TRANSMISSION [MESSAGE]" }), (0, jsx_runtime_1.jsx)("textarea", { id: "message", name: "message", required: true, minLength: 10, rows: 5, value: formData.message, onChange: handleChange, className: `w-full bg-transparent p-3 font-mono border-2 ${errors.message ? "border-red-500" : "border-[var(--border-color)]"} focus:border-[var(--accent-color)] focus:outline-none transition-colors` }), errors.message && ((0, jsx_runtime_1.jsx)("p", { className: "text-red-500 text-xs mt-1 font-mono", children: errors.message }))] }), (0, jsx_runtime_1.jsx)(KanjiCaptcha_1.default, { ref: captchaRef, onVerified: setIsCaptchaVerified }), formStatus === "success" && ((0, jsx_runtime_1.jsx)("p", { className: "font-mono text-[var(--terminal-green)] p-3 border border-[var(--terminal-green)] bg-[var(--terminal-green)]/10", children: "> TRANSMISSION SUCCESSFUL. STAND BY FOR RESPONSE." })), formStatus === "error" && ((0, jsx_runtime_1.jsx)("p", { className: "font-mono text-red-500 p-3 border border-red-500 bg-red-500/10", children: "> ERROR: CONNECTION INTERRUPTED. PLEASE RETRY." })), (0, jsx_runtime_1.jsx)("button", { type: "submit", disabled: !isFormValid || formStatus === "submitting", className: "w-full font-mono px-6 py-3 border-2 border-[var(--accent-color)] text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-[var(--bg-dark)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-transparent disabled:text-[var(--accent-color)]", children: formStatus === "submitting"
                            ? "TRANSMITTING..."
                            : "> SEND TRANSMISSION" })] })] }));
};
exports.default = Contact;
