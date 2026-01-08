import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import { Aperture } from 'lucide-react';

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-slate-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Aperture className="text-cyan-400 w-5 h-5 animate-spin-slow" />
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">
                System Visual Logs
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Mission Archive
            </h2>
          </motion.div>
          
          <p className="text-gray-500 text-sm mt-4 md:mt-0 font-mono">
            
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:contrast-125"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 mb-2 text-xs font-bold text-black bg-cyan-400 rounded-sm uppercase tracking-wider">
                  {img.category}
                </span>
                <p className="text-white font-medium text-lg leading-tight">
                  {img.caption}
                </p>
              </div>

              {/* Tech Decor: Corners */}
              <div className="absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 w-2 h-2 border-b-2 border-l-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <button className="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:bg-white/5 hover:border-white transition-all text-sm uppercase tracking-wide">
                View All Archives
             </button>
        </div>

      </div>
    </section>
  );
};

export default Gallery;