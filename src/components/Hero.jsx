import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, ArrowRight, User } from 'lucide-react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-slate-50">
      {/* Decorative background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-100/50 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-700 font-semibold text-sm mb-6 shadow-sm">
              Welcome to my portfolio
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
              Hi, I'm <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-400">
                Thangavikraman
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl text-slate-600 mb-4 font-medium">
              ECE Student | Aspiring Software Developer
            </h2>
            <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto md:mx-0">
              "Building efficient and scalable applications."
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a 
                href="#projects"
                className="px-8 py-3.5 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all flex items-center gap-2 group w-full sm:w-auto justify-center shadow-md hover:shadow-lg"
              >
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="flex w-full sm:w-auto gap-4">
                <a 
                  href="/THANGAVIKRAMAN_RAMACHANDRAN.pdf" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full border border-slate-200 hover:border-primary-200 hover:bg-primary-50 text-slate-700 hover:text-primary-700 transition-all flex items-center gap-2 flex-1 justify-center bg-white shadow-sm"
                >
                  <Eye size={18} />
                  View Resume
                </a>
                <a 
                  href="/THANGAVIKRAMAN_RAMACHANDRAN.pdf" 
                  download="Thangavikraman_Resume.pdf"
                  className="px-6 py-3.5 rounded-full border border-slate-200 hover:border-primary-200 hover:bg-primary-50 text-slate-700 hover:text-primary-700 transition-all flex items-center gap-2 flex-1 justify-center bg-white shadow-sm"
                >
                  <Download size={18} />
                  Download
                </a>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-200 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-blue-100 animate-[spin_15s_linear_infinite_reverse]"></div>
              
              {/* Profile Image */}
              {!imageError ? (
                <img 
                  src="/my.JPG" 
                  alt="Thangavikraman" 
                  onError={() => setImageError(true)}
                  className="absolute inset-0 w-full h-full object-cover rounded-full shadow-lg border-4 border-white z-10 hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="absolute inset-0 w-full h-full bg-slate-100 rounded-full shadow-lg border-4 border-white z-10 flex items-center justify-center">
                  <User size={80} className="text-slate-300" />
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
