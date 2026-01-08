import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // This is the "Mission/Features" section
import Origins from './components/Origins'; // NEW: The "About Us" Section
import Squads from './components/Squads';
import Gallery from './components/Gallery'; // NEW: The Gallery Section
import Footer from './components/Footer';


function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 selection:bg-cyan-500/30">
      <Navbar />
      <main>
        <Hero />
        
        {/* Order of sections */}
        <Origins />  {/* Who we are */}
        <About />    {/* What we do (Mission) */}
        <Squads />   {/* Roles */}
        <Gallery />  {/* Proof of work */}
        
      </main>
      <Footer />
    </div>
  );
}

export default App;