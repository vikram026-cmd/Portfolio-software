import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileCode2, Briefcase } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
          <p className="text-slate-600 mt-6 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="mailto:thangavikraman@example.com"
              className="block bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-card hover:border-primary-200 text-center group transition-all"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600 group-hover:scale-110 group-hover:bg-primary-100 transition-all">
                <Mail size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email</h3>
              <p className="text-slate-500 text-sm">Drop me a line</p>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <a
              href="https://www.linkedin.com/in/thangavikraman-ramachandran/"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-card hover:border-primary-200 text-center group transition-all"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600 group-hover:scale-110 group-hover:bg-primary-100 transition-all">
                <Briefcase size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">LinkedIn</h3>
              <p className="text-slate-500 text-sm">Connect with me</p>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="https://github.com/vikram026-cmd"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-card hover:border-primary-200 text-center group transition-all"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-600 group-hover:scale-110 group-hover:bg-primary-100 transition-all">
                <FileCode2 size={28} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">GitHub</h3>
              <p className="text-slate-500 text-sm">Check out my code</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
