import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, leetcodeStats } from '../data/data';
import { SiLeetcode } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'W1', solved: 2 },
  { name: 'W2', solved: 3 },
  { name: 'W3', solved: 4 },
  { name: 'W4', solved: 3 },
  { name: 'W5', solved: 5 },
  { name: 'W6', solved: 6 },
  { name: 'W7', solved: 4 },
  { name: 'W8', solved: 7 },
  { name: 'W9', solved: 8 },
  { name: 'W10', solved: 6 },
  { name: 'W11', solved: 9 },
  { name: 'W12', solved: 10 },
];

const CodingProfile = () => {
  return (
    <section id="coding" className="py-20 bg-transparent relative z-10 border-t border-slate-800/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Coding Profile</h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Main Card Container */}
          <div className="bg-slate-900 border border-slate-800 rounded-[20px] p-6 md:p-8 shadow-xl">
            
            {/* Header Row */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500 shrink-0">
                  <SiLeetcode size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">LeetCode</h3>
              </div>
              <a 
                href={personalInfo.socials.leetcode} 
                target="_blank" 
                rel="noreferrer"
                className="px-5 py-2.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/20 transition-colors flex items-center gap-2 text-sm"
              >
                View Profile <FaExternalLinkAlt size={12} />
              </a>
            </div>

            {/* 4 Stat Boxes Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-slate-900/40 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 hover:border-blue-500/30 transition-colors shadow-lg flex flex-col justify-center">
                <p className="text-slate-400 text-sm font-medium mb-1">Total Solved</p>
                <p className="text-3xl font-bold text-white">{leetcodeStats.total}</p>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 hover:border-blue-500/30 transition-colors shadow-lg flex flex-col justify-center">
                <p className="text-slate-400 text-sm font-medium mb-1">Easy</p>
                <p className="text-3xl font-bold text-slate-200">{leetcodeStats.easy}</p>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 hover:border-blue-500/30 transition-colors shadow-lg flex flex-col justify-center">
                <p className="text-slate-400 text-sm font-medium mb-1">Medium</p>
                <p className="text-3xl font-bold text-slate-200">{leetcodeStats.medium}</p>
              </div>
              <div className="bg-slate-900/40 backdrop-blur-md p-5 rounded-xl border border-slate-800/80 hover:border-blue-500/30 transition-colors shadow-lg flex flex-col justify-center">
                <p className="text-slate-400 text-sm font-medium mb-1">Hard</p>
                <p className="text-3xl font-bold text-slate-200">{leetcodeStats.hard}</p>
              </div>
            </div>

            {/* Chart Container */}
            <div className="bg-slate-900/40 backdrop-blur-xl border border-slate-800/80 rounded-xl p-5 md:p-8 shadow-2xl hover:border-blue-500/20 transition-all">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-slate-200 font-bold text-lg">Weekly Solved Trend</h4>
                <span className="text-slate-500 text-sm font-medium">Last 12 weeks</span>
              </div>
              
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorSolved" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#64748b', fontSize: 12}} 
                      dy={10} 
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{fill: '#64748b', fontSize: 12}} 
                      tickCount={5}
                    />
                    <Tooltip 
                      contentStyle={{backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '8px'}}
                      itemStyle={{color: '#fff', fontWeight: 'bold'}}
                      labelStyle={{color: '#94a3b8', marginBottom: '4px'}}
                      cursor={{stroke: '#334155', strokeWidth: 1, strokeDasharray: '3 3'}}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="solved" 
                      stroke="#3b82f6" 
                      strokeWidth={3} 
                      fillOpacity={1} 
                      fill="url(#colorSolved)" 
                      activeDot={{ r: 6, fill: '#3b82f6', stroke: '#0f172a', strokeWidth: 2 }} 
                      dot={{ r: 4, fill: '#3b82f6', stroke: '#0f172a', strokeWidth: 2 }} 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/60">
                <p className="text-slate-300 font-semibold mb-1">Consistency over intensity - steady growth every week.</p>
                <p className="text-slate-500 text-xs">Stats synced from public profile overview.</p>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfile;
