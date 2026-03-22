import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/data';
import { FaGraduationCap, FaBook, FaAward } from 'react-icons/fa';

const iconMap = {
  FaGraduationCap: FaGraduationCap,
  FaBook: FaBook,
  FaAward: FaAward,
};

const Education = () => {
  return (
    <section id="education" className="py-24 bg-transparent border-t border-slate-800/30 relative overflow-hidden z-10">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          
          <div className="mb-20 text-center md:text-left">
            <span className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-3 block">Academic History</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">Education</h2>
          </div>
          
          <div className="relative">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-slate-800 -translate-x-1/2"></div>
            
            {/* Left Line for Mobile */}
            <div className="md:hidden absolute left-4 top-4 bottom-4 w-px bg-slate-800"></div>

            <div className="space-y-12 md:space-y-8">
              {education.map((item, index) => {
                const isLeft = index % 2 === 0;
                const Icon = iconMap[item.icon] || FaGraduationCap;
                
                // Determine node styling based on activity tracking in image
                const nodeOuterClass = item.isActive ? 'border-indigo-500 bg-[#020617] shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'border-slate-700 bg-[#020617]';
                
                return (
                  <div key={item.id} className="relative flex flex-col md:flex-row items-center justify-center w-full min-h-[160px]">
                    
                    {/* Node on Line */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full border-2 -translate-x-1/2 z-10 hidden md:block" style={{borderColor: item.isActive ? 'rgb(99 102 241)' : 'rgb(51 65 85)', backgroundColor: '#020617'}}></div>
                    <div className="md:hidden absolute left-4 w-4 h-4 rounded-full border-2 -translate-x-1/2 z-10" style={{borderColor: item.isActive ? 'rgb(99 102 241)' : 'rgb(51 65 85)', backgroundColor: '#020617'}}></div>

                    {/* Left Content Column (Card if left, Year if right-aligned content) */}
                    <div className={`w-full md:w-1/2 flex ${isLeft ? 'justify-end md:pr-12' : 'justify-start md:pl-12'} hidden md:flex items-center`}>
                      {isLeft ? (
                        <div className="w-full">
                          <EducationCard item={item} Icon={Icon} isLeft={isLeft} />
                        </div>
                      ) : (
                        <span className="text-slate-300 font-bold tracking-widest text-sm translate-x-12">
                          {item.duration}
                        </span>
                      )}
                    </div>

                    {/* Right Content Column (Year if left-aligned content, Card if right) */}
                    <div className={`w-full md:w-1/2 flex ${!isLeft ? 'justify-start md:pl-12' : 'justify-end md:pr-12'} hidden md:flex items-center`}>
                      {!isLeft ? (
                        <div className="w-full">
                          <EducationCard item={item} Icon={Icon} isLeft={isLeft} />
                        </div>
                      ) : (
                        <span className="text-slate-300 font-bold tracking-widest text-sm -translate-x-12">
                          {item.duration}
                        </span>
                      )}
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden w-full pl-12">
                      <div className="mb-3">
                        <span className="text-slate-300 font-bold tracking-widest text-sm">{item.duration}</span>
                      </div>
                      <EducationCard item={item} Icon={Icon} isLeft={true} />
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

// Reusable card component for cleaner code
const EducationCard = ({ item, Icon, isLeft }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="bg-slate-900/40 backdrop-blur-xl rounded-[2rem] border border-slate-800/80 p-8 hover:border-indigo-500/40 transition-all duration-500 hover:-translate-y-1 shadow-2xl hover:shadow-[0_10px_30px_rgba(99,102,241,0.15)] group relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0"></div>
    <div className="flex justify-between items-start w-full mb-3 gap-4 relative z-10">
      <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{item.institution}</h3>
      <span className={`px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap shadow-sm shrink-0 ${item.gradeColor}`}>
        {item.grade}
      </span>
    </div>
    
    <h4 className="text-indigo-400 font-semibold mb-6 flex flex-wrap relative z-10">{item.degree}</h4>
    
    <div className="flex justify-between w-full items-center mb-5 relative z-10">
      <p className="text-slate-500 text-xs font-medium flex items-center gap-2">
        <span className="w-[3px] h-[3px] rounded-full bg-slate-600"></span>
        {item.location}
      </p>
      <div className="w-10 h-10 rounded-lg border border-indigo-500/20 flex items-center justify-center text-indigo-400 bg-indigo-500/5 shadow-sm">
        <Icon size={18} />
      </div>
    </div>

    <p className="text-slate-400 text-sm leading-relaxed text-left relative z-10">
      {item.description}
    </p>
  </motion.div>
);

export default Education;
