import React from 'react';
import { motion } from 'framer-motion';
import { training } from '../data/data';
import { FiExternalLink } from 'react-icons/fi';

const Training = () => {
  return (
    <section id="training" className="py-24 bg-transparent relative z-10 border-t border-slate-800/30 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white">Training</h2>
          </div>
          
          <div className="space-y-12">
            {training.map((item, index) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#0b1220] border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch group hover:border-slate-700 transition-colors"
              >
                {/* Certificate Image Side */}
                <div className="w-full md:w-[45%] lg:w-1/2 bg-[#060a13] relative border-b md:border-b-0 md:border-r border-slate-800/50 flex items-center justify-center p-6 lg:p-8">
                  <div className="w-full h-full max-h-[350px] relative rounded-xl overflow-hidden shadow-md border border-slate-800/80">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Information Side */}
                <div className="w-full md:w-[55%] lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <p className="text-slate-400 font-medium tracking-wide text-sm mb-3">
                    {item.duration}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-blue-500 font-medium text-base mb-6 tracking-wide">
                    {item.subtitle}
                  </p>
                  
                  <p className="text-slate-300 leading-relaxed text-sm md:text-base mb-8">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2.5">
                    {item.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-4 py-1.5 bg-slate-800/80 border border-slate-700 rounded-full text-slate-300 text-xs font-semibold shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {item.link && (
                    <div className="mt-8">
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-blue-500/25 border border-blue-500"
                      >
                        View Certificate
                        <FiExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
