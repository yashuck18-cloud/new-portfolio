import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, subtitle, align = 'left' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-center md:text-left'}`}>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-neon tracking-wider uppercase text-sm font-semibold mb-2"
      >
        {subtitle}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold text-white relative inline-block"
      >
        {children}
        <span className={`absolute -bottom-2 h-1 bg-neon rounded-full ${align === 'center' ? 'left-1/2 -translate-x-1/2 w-24' : 'left-0 w-1/3'}`}></span>
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
