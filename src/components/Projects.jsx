import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileCode2, Wind, ShoppingCart } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      status: "Ongoing",
      description: "A full-stack application for online shopping with seamless user experience and automated email notifications.",
      tech: ["Node.js", "Express.js", "HTML/CSS", "JavaScript", "EmailJS"],
      icon: <ShoppingCart size={24} />,
      links: { github: "#", live: "#" }
    },
    {
      title: "AI Windmill Health Management",
      status: "Completed",
      description: "An AI + IoT project that predicts windmill failures and sends alerts using digital twin concepts.",
      tech: ["AI/ML", "IoT", "Digital Twin", "Python"],
      icon: <Wind size={24} />,
      links: { github: "#", live: "#" }
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-soft transition-all group hover:-translate-y-2"
            >
              <div className="p-8">
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-6 group-hover:scale-110 group-hover:bg-primary-100 transition-all">
                  {project.icon}
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary-100 text-primary-700">
                    {project.status}
                  </span>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200/60">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a href={project.links.github} className="text-slate-500 hover:text-primary-600 transition-colors flex items-center gap-2 text-sm font-semibold">
                    <FileCode2 size={18} />
                    Code
                  </a>
                  <a href={project.links.live} className="text-slate-500 hover:text-primary-600 transition-colors flex items-center gap-2 text-sm font-semibold">
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
