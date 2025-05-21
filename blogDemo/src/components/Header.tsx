import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Blogs", href: "#blogs" },
  { name: "For Sale", href: "#for-sale" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState<string>(window.location.hash || "/");

  useEffect(() => {
    const updateLocation = () => {
      setCurrentHash(window.location.pathname + window.location.hash);
    };

    updateLocation(); // Initial set
    window.addEventListener("hashchange", updateLocation);
    window.addEventListener("popstate", updateLocation); // Handles URL changes like /gallery

    return () => {
      window.removeEventListener("hashchange", updateLocation);
      window.removeEventListener("popstate", updateLocation);
    };
  }, []);


  const linkClasses = (href: string) =>
    `px-3 py-2 rounded-lg ${currentHash.endsWith(href)
      ? "bg-sky-200 text-sky-800"
      : "text-gray-600 hover:text-gray-900"
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-gray-800">My Blog</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map(({ name, href }) => (
            <a key={href} href={href} className={linkClasses(href)}>
              {name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu with animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden px-4 pb-4"
          >
            <nav className="flex flex-col space-y-2">
              {navItems.map(({ name, href }) => (
                <a key={href} href={href} className={linkClasses(href)}>
                  {name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
