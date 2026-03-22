import React from 'react';
import { personalInfo } from '../data/data';

const Footer = () => {
  return (
    <footer className="bg-transparent relative z-10 py-8 border-t border-slate-800/30 text-center">
      <p className="text-slate-500 text-sm">
        Designed & Built by <span className="text-slate-300 font-medium">{personalInfo.name}</span>
      </p>
    </footer>
  );
};

export default Footer;
