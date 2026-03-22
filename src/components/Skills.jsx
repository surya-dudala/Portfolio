import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-transparent relative z-10 border-t border-slate-800/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, idx) => (
              <motion.div 
                key={skillGroup.category} 
                className="space-y-6 bg-slate-900/40 backdrop-blur-md p-6 rounded-3xl border border-slate-800/50 hover:border-slate-700/80 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-white border-l-4 border-blue-500 pl-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-col gap-5 flex-1 justify-center">
                  {skillGroup.items.map((skill, sIdx) => {
                    const Icon = skill.icon;
                    return (
                      <div key={sIdx} className="flex items-center gap-4 group/skill">
                        <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-400 group-hover/skill:text-blue-500 group-hover/skill:bg-blue-500/10 transition-colors shrink-0">
                          <Icon className="text-xl" />
                        </div>
                        <span className="text-slate-300 font-medium group-hover/skill:text-white transition-colors">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
