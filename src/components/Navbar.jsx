import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';
import { LucideActivitySquare, Menu, PlugZap, X, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import logoImg from '../assets/logo.png'; 
import Gallery from './Gallery';
import Footer from './Footer';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full bg-slate-950/70 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-3 lg:px-3">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center gap-5 cursor-pointer">
            {/* The Logo Image */}
            <a href="#">
            <img 
              src={logoImg}
              alt="AI-Heroes Logo" 
              className="w-40 h-15 object-cover" // Adjust w-10 h-10 to change size
            />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="text-gray-300 hover:text-cyan-400 hover:scale-105 transition-all duration-200 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide"
                >
                  {link.title}
                </a>
              ))}
              <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-6 rounded-full transition-all">
                Join
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-slate-900 border-b border-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;