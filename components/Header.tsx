import React, { useState, useEffect } from "react";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const NavLink: React.FC<{
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="font-mono uppercase tracking-widest text-sm px-3 py-2 border-b-2 border-transparent hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] transition-all duration-300"
  >
    {children}
  </a>
);

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[var(--bg-color)]/80 backdrop-blur-sm border-b border-[var(--border-color)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            onClick={closeMenu}
            className="text-xl font-bold font-mono tracking-tighter text-[var(--accent-color)]"
          >
            NEON_TOKYO.DEV&gt;
          </a>
          <nav className="hidden md:flex items-center space-x-4">
            <NavLink href="#" onClick={closeMenu}>
              // Home
            </NavLink>
            <NavLink href="#about" onClick={closeMenu}>
              // About
            </NavLink>
            <NavLink href="#projects" onClick={closeMenu}>
              // Projects
            </NavLink>
            <NavLink href="#contact" onClick={closeMenu}>
              // Contact
            </NavLink>
          </nav>
          <div className="flex items-center">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="w-12 h-6 rounded-full p-1 bg-gray-600 dark:bg-gray-800 relative transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
              aria-label="Toggle dark mode"
            >
              <span
                className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white dark:bg-gray-400 transition-transform duration-300 ease-in-out ${
                  isDarkMode ? "transform translate-x-6" : ""
                }`}
              ></span>
            </button>
            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-[var(--bg-color)]/95 backdrop-blur-sm`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
          <NavLink href="#" onClick={closeMenu}>
            // Home
          </NavLink>
          <NavLink href="#about" onClick={closeMenu}>
            // About
          </NavLink>
          <NavLink href="#projects" onClick={closeMenu}>
            // Projects
          </NavLink>
          <NavLink href="#contact" onClick={closeMenu}>
            // Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
