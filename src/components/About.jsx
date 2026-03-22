import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, aboutCards } from '../data/data';

const About = () => {
  return (
    <section id="about" className="py-20 bg-transparent relative z-10 border-t border-slate-800/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            About Me
            <div className="h-px bg-slate-800 flex-1"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="text-slate-300 leading-relaxed text-lg space-y-6">
              <p>
                {personalInfo.aboutText}
              </p>
              <p>
                Currently, my core focus is building scalable, efficient web applications using modern JavaScript frameworks and robust backend technologies.
                Solved 150+ problems on LeetCode demonstrating strong problem-solving skills.
              </p>
            </div>
            
            <div className="space-y-6">
              {aboutCards.map(card => {
                const Icon = card.icon;
                return (
                  <div key={card.id} className="flex gap-4 items-start p-5 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/80 hover:border-blue-500/30 transition-all hover:bg-slate-800/40 shadow-lg group">
                    <div className="p-3 bg-blue-500/10 rounded-xl text-blue-500 mt-1 shadow-inner group-hover:scale-110 transition-transform">
                      <Icon className="text-xl" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1.5 group-hover:text-blue-400 transition-colors">{card.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
