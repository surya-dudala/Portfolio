import React from 'react';
import { motion } from 'framer-motion';
import { timeline } from '../data/data';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            Experience & Education
            <div className="h-px bg-slate-800 flex-1"></div>
          </h2>
          <div className="space-y-8 pl-4 border-l-2 border-slate-700">
            {timeline.map((item) => (
              <div key={item.id} className="relative pl-6">
                <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-900"></div>
                <span className="text-sm font-semibold text-blue-400 mb-1 block">{item.year}</span>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
