import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Layout } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              I am an Electronics and Communication Engineering undergraduate with a profound passion for software development and problem solving. I thrive on creating robust, efficient, and scalable applications that solve real-world problems.
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              My journey bridges the gap between hardware architecture and software engineering, allowing me to approach challenges with a unique, system-level perspective. Whether it's building full-stack web applications or developing AI-driven IoT systems, I am dedicated to continuous learning and innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: <Code size={24} />, title: "Programming", desc: "Java, C/C++" },
              { icon: <Layout size={24} />, title: "Frontend", desc: "HTML, CSS, React" },
              { icon: <Cpu size={24} />, title: "Backend", desc: "Node.js, Express" },
              { icon: <Database size={24} />, title: "Database", desc: "PostgreSQL" }
            ].map((item, index) => (
              <div key={index} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-card hover:border-primary-200 hover:-translate-y-1 transition-all group">
                <div className="text-primary-500 mb-4 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-slate-900 font-semibold mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
