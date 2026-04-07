import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', href, onClick, download, target, className = '' }) => {
  const baseStyles = "px-6 py-3 rounded-md font-medium transition-all duration-300 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-neon/10 text-neon border border-neon shadow-[0_0_10px_rgba(57,255,20,0.2)] hover:bg-neon hover:text-black hover:shadow-[0_0_20px_rgba(57,255,20,0.6)]",
    secondary: "bg-transparent text-white border border-gray-700 hover:border-neon hover:text-neon glass",
  };

  const Component = href ? motion.a : motion.button;
  
  return (
    <Component
      href={href}
      onClick={onClick}
      download={download}
      target={target}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};

export default Button;
