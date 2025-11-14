import React, { useRef, useEffect, useState } from "react";

interface ScanlineWrapperProps {
  children: React.ReactNode;
}

const ScanlineWrapper: React.FC<ScanlineWrapperProps> = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // We're always observing, but only add class when it's fully on screen
        // This creates a subtle effect as you scroll
        setIsActive(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% is visible
      }
    );

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

  return (
    <div
      ref={wrapperRef}
      className={`relative scanline-effect ${isActive ? "active" : ""}`}
    >
      {children}
    </div>
  );
};

export default ScanlineWrapper;
