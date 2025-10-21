import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Wrench, Zap } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Settings, delay: 0, position: 'top-1/4 left-1/10' },
    { Icon: Wrench, delay: 2, position: 'top-3/5 right-1/6' },
    { Icon: Zap, delay: 4, position: 'bottom-1/3 left-1/5' },
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700 dark:from-black dark:via-dark-900 dark:to-dark-800 flex items-center justify-center text-center text-white relative overflow-hidden pt-20"
    >
      {/* Animated Background Icons */}
      <div className="absolute inset-0 opacity-10">
        {floatingIcons.map(({ Icon, delay, position }, index) => (
          <motion.div
            key={index}
            className={`absolute ${position}`}
            initial={{ y: 0 }}
            animate={{ y: [-20, 20, -20] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: delay,
              ease: 'easeInOut',
            }}
          >
            <Icon className="w-12 h-12 md:w-16 md:h-16" />
          </motion.div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-dark-900/50"></div>

      {/* Content */}
      <div className="z-10 max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-400 bg-clip-text text-transparent">
            Premium Steel Fabrication
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-300 leading-relaxed"
        >
          Crafting excellence in mild steel and stainless steel solutions for
          industrial, residential, and commercial projects
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" onClick={() => scrollToSection('contact')}>
            Get Your Quote
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: '10+', label: 'Years Experience' },
            { value: '500+', label: 'Projects Completed' },
            { value: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
