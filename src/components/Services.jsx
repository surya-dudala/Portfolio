import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/data';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-transparent relative z-10 border-t border-slate-800/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I Do</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
                  className="bg-slate-900/60 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-slate-800/80 hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-2 shadow-2xl hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.2)] group relative overflow-hidden"
                >
                  {/* Subtle inner hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <div className="w-16 h-16 bg-[#040812] rounded-2xl flex items-center justify-center text-3xl text-blue-500 mb-8 group-hover:scale-110 transition-transform duration-500 shadow-inner group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] border border-slate-800/50 relative z-10">
                    <Icon />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors relative z-10">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed relative z-10">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
