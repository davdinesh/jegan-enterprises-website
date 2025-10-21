import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Zap, Target, Clock } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { FEATURES } from '../../utils/constants';

const featureIcons = {
  0: Factory,
  1: Zap,
  2: Target,
  3: Clock,
};

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader title="About Us" />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              With over a decade of expertise in steel fabrication, Jegan
              Enterprises has established itself as a premier provider of custom
              steel solutions. We specialize in both mild steel and stainless
              steel fabrication, delivering exceptional quality across industrial,
              residential, restaurant, kitchen, fencing, and office applications.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Our commitment to precision, durability, and innovation ensures that
              every project meets the highest standards of quality and
              functionality. From concept to completion, we work closely with our
              clients to bring their vision to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {FEATURES.map((feature, index) => {
              const Icon = featureIcons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center" variant="elevated">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2 text-gray-800 dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
