"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ScanlineWrapper = ({ children }) => {
    const wrapperRef = (0, react_1.useRef)(null);
    const [isActive, setIsActive] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // We're always observing, but only add class when it's fully on screen
            // This creates a subtle effect as you scroll
            setIsActive(entry.isIntersecting);
        }, {
            root: null,
            rootMargin: "0px",
            threshold: 0.1, // Trigger when 10% is visible
        });
        const currentRef = wrapperRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    return ((0, jsx_runtime_1.jsx)("div", { ref: wrapperRef, className: `relative scanline-effect ${isActive ? "active" : ""}`, children: children }));
};
exports.default = ScanlineWrapper;
