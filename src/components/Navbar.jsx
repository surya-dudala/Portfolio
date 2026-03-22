import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { personalInfo } from '../data/data';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Projects', to: 'projects' },
  { name: 'Coding', to: 'coding' },
  { name: 'Training', to: 'training' },
  { name: 'Certifications', to: 'certifications' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#020617]/70 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="home" smooth={true} duration={500} className="text-xl font-bold tracking-tight text-white cursor-pointer">
          {personalInfo.name.split(' ')[0]}<span className="text-blue-500">.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-blue-400 font-semibold"
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" className="text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
