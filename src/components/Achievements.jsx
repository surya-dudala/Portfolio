import React from 'react';
import { achievements } from '../data/data';

const Achievements = () => {
  return (
    <section className="py-16 bg-transparent relative z-10 border-t border-slate-800/30">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center divide-x divide-slate-800/50">
          {achievements.map((item) => (
            <div key={item.id} className="px-4">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {item.count}{item.suffix}
              </h3>
              <p className="text-slate-400 text-sm md:text-base font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
