import React from "react";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react"; // or react-icons/fa

const Footer: React.FC = () => {
  return (
    <footer className="bg-sky-900 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center space-y-4">
        <p className="text-sm text-gray-400">© {new Date().getFullYear()} My Blog. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <Facebook size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <Instagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
            <Twitter size={20} />
          </a>
          <a href="mailto:info@bakebetter.com" className="hover:text-sky-400 transition">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
