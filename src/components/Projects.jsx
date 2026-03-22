import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-transparent relative z-10 border-t border-slate-800/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                className="bg-slate-900/40 backdrop-blur-xl rounded-[2rem] border border-slate-800/80 overflow-hidden hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] group relative"
              >
                {/* Subtle inner hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>

                <div className="h-56 overflow-hidden relative border-b border-slate-800/80 p-2 bg-[#060a13] z-10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  {project.category && (
                    <div className="absolute top-5 right-5 bg-blue-500/90 backdrop-blur-md text-white border border-blue-400/50 text-xs font-bold px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                      {project.category}
                    </div>
                  )}
                </div>
                
                <div className="p-8 relative z-10 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-1">{project.description}</p>
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map(tech => (
                        <span key={tech} className="text-xs font-medium px-2.5 py-1 bg-blue-900/30 text-blue-400 rounded border border-blue-500/20 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
