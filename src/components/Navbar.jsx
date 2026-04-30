import React, { useState, useEffect } from 'react';
import { Menu, X, FileCode2, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="text-2xl font-bold text-slate-900 tracking-tighter">
              TR<span className="text-primary-600">.</span>
            </a>
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-slate-600 hover:text-primary-600 transition-colors text-sm font-semibold"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            <div className="flex items-center space-x-4 border-l border-slate-200 pl-6">
              <a 
                href="https://www.linkedin.com/in/thangavikraman-ramachandran/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-600 transition-colors"
                title="LinkedIn"
              >
                <Briefcase size={20} />
              </a>
              <a 
                href="https://github.com/vikram026-cmd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary-600 transition-colors"
                title="GitHub"
              >
                <FileCode2 size={20} />
              </a>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/thangavikraman-ramachandran/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-600 transition-colors"
            >
              <Briefcase size={20} />
            </a>
            <a 
              href="https://github.com/vikram026-cmd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-primary-600 transition-colors"
            >
              <FileCode2 size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none ml-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-white border-b border-slate-100 shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-slate-600 hover:text-primary-600 hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
