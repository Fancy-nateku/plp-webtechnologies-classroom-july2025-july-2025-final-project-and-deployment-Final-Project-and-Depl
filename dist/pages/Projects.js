"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const constants_1 = require("../constants");
const types_1 = require("../types");
const ProjectCard_1 = __importDefault(require("../components/ProjectCard"));
const FilterButton = ({ category, label, activeCategory, setCategory }) => {
    const isActive = category === activeCategory;
    return ((0, jsx_runtime_1.jsx)("button", { onClick: () => setCategory(category), className: `font-mono text-sm px-4 py-2 border-2 transition-all duration-300 ${isActive
            ? "bg-[var(--accent-color)] text-[var(--bg-dark)] border-[var(--accent-color)]"
            : "border-[var(--border-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]"}`, children: label }));
};
const Projects = () => {
    const [activeCategory, setActiveCategory] = (0, react_1.useState)(types_1.ProjectCategory.ALL);
    const filteredProjects = (0, react_1.useMemo)(() => {
        if (activeCategory === types_1.ProjectCategory.ALL) {
            return constants_1.PROJECTS;
        }
        return constants_1.PROJECTS.filter((p) => p.category === activeCategory);
    }, [activeCategory]);
    return ((0, jsx_runtime_1.jsxs)("section", { "aria-label": "Data Heists", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-3xl md:text-4xl font-bold font-mono text-center text-[var(--accent-color)]", children: "> DATA_HEISTS" }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-8 mb-12 flex justify-center flex-wrap gap-2 md:gap-4", children: [(0, jsx_runtime_1.jsx)(FilterButton, { category: types_1.ProjectCategory.ALL, label: "ALL", activeCategory: activeCategory, setCategory: setActiveCategory }), (0, jsx_runtime_1.jsx)(FilterButton, { category: types_1.ProjectCategory.FRONTEND, label: "FRONTEND", activeCategory: activeCategory, setCategory: setActiveCategory }), (0, jsx_runtime_1.jsx)(FilterButton, { category: types_1.ProjectCategory.BACKEND, label: "BACKEND", activeCategory: activeCategory, setCategory: setActiveCategory }), (0, jsx_runtime_1.jsx)(FilterButton, { category: types_1.ProjectCategory.FULLSTACK, label: "FULLSTACK", activeCategory: activeCategory, setCategory: setActiveCategory })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filteredProjects.map((project) => ((0, jsx_runtime_1.jsx)("div", { className: "transition-opacity duration-500 ease-in-out", children: (0, jsx_runtime_1.jsx)(ProjectCard_1.default, { project: project }) }, project.id))) })] }));
};
exports.default = Projects;
