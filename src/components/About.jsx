import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Trophy } from 'lucide-react';

const features = [
  {
    icon: Trophy,
    title: "Hackathons",
    desc: "24-hour endurance coding battles solving real-world challenges.",
  },
  {
    icon: Users,
    title: "Seminars",
    desc: "Talks from Industry leaders from all over the globe.",
  },
  {
    icon: Target,
    title: "Skill Forge",
    desc: "Frequently workshops on GenAI, LLMs, and System Design.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Mission
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            "Empowering the next generation of AI Heroes." <br/>
            We bridge the gap between academic theory and industrial AI application through gamified learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-500/50 transition-colors group"
            >
              <div className="w-14 h-14 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                <feature.icon className="text-cyan-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;