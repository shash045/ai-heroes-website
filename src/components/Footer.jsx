import React from 'react';
import { Zap, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <Zap className="w-6 h-6 text-cyan-400 fill-cyan-400" />
              <span className="text-xl font-bold text-white">AI-HEROES</span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              Forging the future of Artificial Intelligence.
            </p>
          </div>
          
          <div className="flex gap-6">
            {[Github,Twitter,Linkedin].map((Icon, a) => (
              <a key={a} href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>© 2026 AI-Heroes Community</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;