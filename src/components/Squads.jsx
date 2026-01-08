import React from 'react';
import { motion } from 'framer-motion';
import { SQUADS } from '../constants';

const Squads = () => {
  return (
    <section id="squads" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
          >
            CHOOSE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">ALLIANCE</span>
          </motion.h2>
          <p className="text-gray-400">Find where your skills belong in our ecosystem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SQUADS.map((squad, index) => (
            <SquadCard key={squad.id} squad={squad} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SquadCard = ({ squad, index }) => {
  const Icon = squad.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03, 
        backgroundColor: "rgba(30, 41, 59, 0.8)",
      }}
      className="relative group p-8 rounded-3xl bg-slate-900 border border-white/10 overflow-hidden"
      style={{
        boxShadow: "0 0 0 rgba(0,0,0,0)",
      }}
    >
      {/* Dynamic Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at center, ${squad.color}, transparent 70%)`
        }}
      />
      
      {/* Hover Border Glow */}
      <motion.div 
         className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
         style={{
            boxShadow: `inset 0 0 20px ${squad.color}30, 0 0 15px ${squad.color}40`
         }}
      />

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div 
            className="p-3 rounded-xl bg-slate-800"
            style={{ color: squad.color }}
          >
            <Icon size={32} />
          </div>
          <span 
            className="text-xs font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5"
          >
            {squad.persona}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2">{squad.title}</h3>
        <p className="text-gray-400 mb-6 h-12">{squad.focus}</p>

        {/* Quote Reveal on Hover */}
        <div className="relative h-16 overflow-hidden">
             <div className="absolute top-0 left-0 w-full transform transition-transform duration-500 group-hover:-translate-y-20">
                <div className="h-1 bg-white/10 rounded-full w-full mt-2 overflow-hidden">
                    <div 
                        className="h-full w-1/3" 
                        style={{ backgroundColor: squad.color }} 
                    />
                </div>
             </div>
             <div className="absolute top-20 left-0 w-full transform transition-transform duration-500 group-hover:-translate-y-20">
                <p className="italic text-sm font-medium" style={{ color: squad.secondaryColor }}>
                    "{squad.quote}"
                </p>
             </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Squads;