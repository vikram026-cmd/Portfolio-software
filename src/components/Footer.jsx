import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-slate-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Thangavikraman Ramachandran. All rights reserved.
        </p>
        <p className="text-slate-400 text-xs mt-2">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
