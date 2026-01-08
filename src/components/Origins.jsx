import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../constants';
import { Fingerprint } from 'lucide-react';

const Origins = () => {
  return (
    <section id="origins" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-2 mb-6">
            <Fingerprint className="text-purple-500 w-6 h-6" />
            <span className="text-purple-400 font-mono tracking-widest uppercase text-sm">
              Origin
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Forged in the heart of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Greater Noida
            </span>
          </h2>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            AI-HEROES wasn't built in a boardroom. It started with the vision to make every student skilled. We realized that while these pool of students are full of talent, they lacked a unified <strong>League</strong> to channel their energy.
          </p>
          
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Today, we are a collective of developers, designers, and entrepreneur united by a single code: <strong>To build systems that matter.</strong> We don't just write code; we architect the future.
          </p>

          <button className="text-white border-b border-purple-500 pb-1 hover:text-purple-400 transition-colors">
            Read Full Manifesto &rarr;
          </button>
        </motion.div>

        {/* Right: Stats Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-900/50 border border-white/10 rounded-2xl flex flex-col justify-center items-center text-center group hover:border-purple-500/50 transition-all duration-300"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Origins;