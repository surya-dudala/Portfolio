import React from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/data';
import { FiArrowUpRight } from 'react-icons/fi';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-slate-950 border-t border-slate-900 shadow-inner relative overflow-hidden">
      {/* Ambient glowing background strictly behind the timeline */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          
          <div className="mb-20 text-center">
            <motion.span 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]"
            >
              Academic & Professional
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Certifications</h2>
          </div>
          
          <div className="relative">
            {/* Center Line for Desktop - Animated Gradient */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-600/80 via-purple-600/50 to-transparent -translate-x-1/2 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.4)]"></div>
            
            {/* Left Line for Mobile */}
            <div className="md:hidden absolute left-4 top-4 bottom-4 w-1 bg-gradient-to-b from-blue-600/80 via-purple-600/50 to-transparent rounded-full shadow-[0_0_10px_rgba(59,130,246,0.4)]"></div>

            <div className="space-y-16 md:space-y-20">
              {certifications.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div key={item.id} className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-[200px] group/timeline">
                    
                    {/* Node on Line - Pulsing Animation */}
                    <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full border-4 border-[#0b1220] bg-blue-500 -translate-x-1/2 z-10 hidden md:block shadow-[0_0_15px_rgba(59,130,246,0.8)] group-hover/timeline:scale-125 transition-transform duration-300">
                      <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></div>
                    </div>
                    <div className="md:hidden absolute left-4 w-5 h-5 rounded-full border-4 border-[#0b1220] bg-blue-500 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(59,130,246,0.8)]">
                       <div className="absolute inset-0 rounded-full bg-blue-400 animate-ping opacity-75"></div>
                    </div>

                    {/* Desktop Left Side */}
                    <div className={`w-full md:w-1/2 hidden md:flex ${isLeft ? 'justify-end md:pr-12 lg:pr-16' : 'justify-end md:pr-12 lg:pr-16'}`}>
                      {isLeft ? (
                        <CertificationCard item={item} index={index} />
                      ) : (
                        <div className="w-full"></div>
                      )}
                    </div>

                     {/* Desktop Right Side */}
                     <div className={`w-full md:w-1/2 hidden md:flex ${!isLeft ? 'justify-start md:pl-12 lg:pl-16' : 'justify-start md:pl-12 lg:pl-16'}`}>
                      {!isLeft ? (
                        <CertificationCard item={item} index={index} />
                      ) : (
                        <div className="w-full"></div>
                      )}
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden w-full pl-12 flex flex-col items-start gap-4 mt-8">
                      <CertificationCard item={item} index={index} />
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

// The Core Card with Professional Animations
const CertificationCard = ({ item, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.15, type: "spring", stiffness: 100 }}
    className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_10px_40px_-15px_rgba(59,130,246,0.25)] hover:-translate-y-1 w-full max-w-md group"
  >
    {/* Internal subtle gradient on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

    {/* Image container */}
    <div className="w-full h-40 sm:h-48 bg-[#040812] border-b border-slate-800/80 overflow-hidden relative p-3">
      {/* Decorative dots in image container */}
      <div className="absolute top-3 left-3 flex gap-1.5 z-20">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-700/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-700/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-slate-700/50"></div>
      </div>
      <div className="w-full h-full relative rounded-xl overflow-hidden shadow-inner bg-[#060a13] border border-slate-800/50">
        <img 
          src={item.image} 
          alt={item.title} 
          className="absolute inset-0 w-full h-full object-cover p-1 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
        />
      </div>
    </div>
    
    {/* Content */}
    <div className="p-6 md:p-8 relative z-10">
      <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5">
        <span className="px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold rounded-lg tracking-wider uppercase shadow-sm">
          {item.platform}
        </span>
        {item.date && (
          <span className="text-slate-500 text-[11px] font-bold uppercase tracking-widest flex items-center gap-1.5 before:content-[''] before:w-1 before:h-1 before:bg-slate-600 before:rounded-full">
            {item.date}
          </span>
        )}
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-white mb-3 tracking-tight leading-tight group-hover:text-blue-300 transition-colors duration-300">
        {item.title}
      </h3>
      <p className="text-slate-400 text-sm md:text-sm leading-relaxed mb-8">
        {item.description}
      </p>

      {item.link && (
        <a 
          href={item.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white bg-slate-800/50 hover:bg-blue-600 px-5 py-2.5 rounded-xl transition-all duration-300 border border-slate-700 hover:border-blue-500 group/btn shadow-md w-full justify-center sm:w-auto"
        >
          View Credential
          <FiArrowUpRight className="group-hover/btn:-translate-y-[2px] group-hover/btn:translate-x-[2px] transition-transform" />
        </a>
      )}
    </div>
  </motion.div>
);

export default Certifications;
