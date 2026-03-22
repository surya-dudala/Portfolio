import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 min-h-[90vh] flex flex-col justify-center bg-transparent relative z-10 overflow-hidden">
      {/* Subtle UI glowing background element for structure without being overwhelming */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start text-left order-2 lg:order-1"
          >
            <p className="text-blue-500 font-semibold tracking-wide mb-4 text-lg">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              {personalInfo.name}.
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-300 mb-8 leading-tight">
              Full Stack Developer
            </h2>
            <p className="max-w-xl text-slate-400 text-lg leading-relaxed mb-10">
              {personalInfo.aboutText}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/20 hover:bg-blue-500 hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all"
              >
                GitHub Profile
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-lg shadow-lg shadow-blue-600/20 hover:bg-blue-500 hover:shadow-blue-500/30 hover:-translate-y-0.5 transition-all"
              >
                LeetCode Profile
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3.5 bg-slate-800/80 backdrop-blur-sm text-slate-200 border border-slate-700 font-semibold rounded-lg hover:bg-slate-700 hover:text-white hover:-translate-y-0.5 transition-all"
              >
                View Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-3 opacity-20"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-2xl -rotate-3 border border-slate-700/50"></div>
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="absolute inset-0 w-full h-full object-cover object-top rounded-2xl shadow-xl z-10 border border-slate-700/50"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
