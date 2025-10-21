import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export function SectionHeader({ title, subtitle, className }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('text-center mb-12', className)}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
        {title}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-primary-500 to-primary-400"></div>
      </h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-6 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
