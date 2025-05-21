import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-gray-800">MySite</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          <a href="#blogs" className="text-gray-600 hover:text-gray-900">
            Blogs
          </a>
          <a href="#for-sale" className="text-gray-600 hover:text-gray-900">
            For Sale
          </a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
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
              <a href="#blogs" className="text-gray-700 hover:text-gray-900">
                Blogs
              </a>
              <a href="#for-sale" className="text-gray-700 hover:text-gray-900">
                For Sale
              </a>
              <a href="#contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
