import React, { useState } from "react";
import config from "../config";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={config.assets.logo}
              alt="Sreerag Logo"
              className="w-12 h-12 rounded-full"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#work"
              className="text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200"
            >
              Work
            </a>
            <a
              href="#about"
              className="text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200"
            >
              Contact
            </a>
            <a
              href={config.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200"
            >
              Resume
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-gray-900 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 p-1 rounded-md transition-colors duration-200"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <a
                href="#work"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Work
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
              <a
                href={config.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-900 hover:text-gray-600 font-medium transition-colors duration-200"
                onClick={closeMobileMenu}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
