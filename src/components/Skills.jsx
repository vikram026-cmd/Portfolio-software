import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      skills: ["Java", "C", "C++"]
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "React"]
    },
    {
      title: "Database",
      skills: ["PostgreSQL"]
    },
    {
      title: "Soft Skills",
      skills: ["Leadership", "Problem Solving", "Team Management", "Communication"]
    }
  ];

  const certifications = [
    "Design Thinking for Innovation – University of Virginia",
    "Innovation Through Design – University of Sydney",
    "NPTEL IoT (Elite + Silver)"
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Skills & Certifications</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Technical & Soft Skills</h3>
            <div className="space-y-8">
              {skillCategories.map((category, index) => (
                <div key={index}>
                  <h4 className="text-sm font-bold text-primary-600 uppercase tracking-wider mb-3">{category.title}</h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700 transition-all cursor-default shadow-sm hover:shadow">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-card transition-all flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-primary-50 group-hover:border-primary-200 transition-colors">
                    <span className="text-primary-600 font-bold">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-semibold text-lg">{cert.split(' – ')[0]}</h4>
                    {cert.includes(' – ') && (
                      <p className="text-slate-500 mt-1 text-sm">{cert.split(' – ')[1]}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
