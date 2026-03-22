import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    setTimeout(() => {
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-transparent relative z-10 border-t border-slate-800/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          
          <div className="text-center mb-16">
            <span className="text-blue-500 font-bold tracking-widest text-sm uppercase">GET IN TOUCH</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">Let's Connect</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Whether you have a question, a project idea, or just want to explore opportunities, I'm always open to discussing new things!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Side: Contact Info Card */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg rounded-2xl p-8 md:p-10 flex flex-col hover:border-white/20 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Info</h3>
              <p className="text-slate-400 mb-10 leading-relaxed">
                Reach out to me directly through email or phone. I'm actively looking for new roles and excited to connect with you!
              </p>
              
              <div className="space-y-6 flex-1">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-5 text-slate-300 hover:text-white group transition-colors">
                  <div className="w-12 h-12 bg-slate-900/60 rounded-xl border border-slate-700/50 flex items-center justify-center text-blue-500 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all">
                    <FaEnvelope size={20} />
                  </div>
                  <span className="font-medium text-lg tracking-wide">{personalInfo.email}</span>
                </a>
                
                <a href={`tel:${personalInfo.phone || '+91-7207707133'}`} className="flex items-center gap-5 text-slate-300 hover:text-white group transition-colors">
                  <div className="w-12 h-12 bg-slate-900/60 rounded-xl border border-slate-700/50 flex items-center justify-center text-blue-500 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all">
                    <FaPhone size={20} />
                  </div>
                  <span className="font-medium text-lg tracking-wide">{personalInfo.phone || '+91-7207707133'}</span>
                </a>

                <div className="flex items-center gap-5 text-slate-300 group">
                  <div className="w-12 h-12 bg-slate-900/60 rounded-xl border border-slate-700/50 flex items-center justify-center text-blue-500 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <span className="font-medium text-lg tracking-wide">India</span>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-800">
                <p className="text-sm font-semibold text-slate-500 mb-5 uppercase tracking-wide">Social Profiles</p>
                <div className="flex flex-wrap gap-4">
                  <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-5 py-3 bg-slate-900/60 border border-slate-700/50 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-600 transition-all hover:-translate-y-1 shadow-sm">
                    <FaGithub size={20} />
                    <span className="font-medium text-sm">GitHub</span>
                  </a>
                  <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-5 py-3 bg-slate-900/60 border border-slate-700/50 rounded-xl text-slate-400 hover:text-white hover:bg-blue-900/30 hover:border-blue-700/50 transition-all hover:-translate-y-1 shadow-sm">
                    <FaLinkedin size={20} className="text-blue-500" />
                    <span className="font-medium text-sm">LinkedIn</span>
                  </a>
                  <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" className="flex items-center gap-3 px-5 py-3 bg-slate-900/60 border border-slate-700/50 rounded-xl text-slate-400 hover:text-white hover:bg-yellow-900/20 hover:border-yellow-700/50 transition-all hover:-translate-y-1 shadow-sm">
                    <SiLeetcode size={20} className="text-yellow-500" />
                    <span className="font-medium text-sm">LeetCode</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form Card */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg rounded-2xl p-8 md:p-10 hover:border-white/20 transition-colors duration-300">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6 h-full">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-300 tracking-wide">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-900/50 border border-slate-700/80 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300 tracking-wide">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    placeholder="john@example.com"
                    className="w-full bg-slate-900/50 border border-slate-700/80 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
                
                <div className="flex flex-col gap-2 flex-1">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300 tracking-wide">Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    placeholder="Let's build something amazing together..."
                    className="w-full h-full min-h-[140px] bg-slate-900/50 border border-slate-700/80 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'Sending...'}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-blue-500/25 mt-2 disabled:opacity-70 tracking-wide"
                >
                  {status === 'Sending...' ? 'Sending...' : 'Send Message'}
                </button>
                
                {status && status !== 'Sending...' && (
                  <p className="text-green-400 text-center font-medium mt-1">{status}</p>
                )}
                
                <p className="text-slate-500 text-sm text-center mt-2 font-medium italic">
                  I usually reply faster than my code compiles 😄
                </p>
              </form>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
