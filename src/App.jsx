import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import CodingProfile from './components/CodingProfile';
import Education from './components/Education';
import Training from './components/Training';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="bg-[#020617] min-h-screen text-slate-100 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden w-full">
      {/* Global Ambient Glow Effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>
      
      <Navbar />
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <CodingProfile />
        <Education />
        <Training />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
