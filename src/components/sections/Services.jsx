import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Home, UtensilsCrossed, Building2, Fence, Settings } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { SERVICES } from '../../utils/constants';

const serviceIcons = {
  industrial: Factory,
  residential: Home,
  restaurant: UtensilsCrossed,
  office: Building2,
  fencing: Fence,
  custom: Settings,
};

export function Services() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="Our Services"
          subtitle="Comprehensive steel fabrication solutions tailored to your needs"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = serviceIcons[service.id];
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full flex flex-col" variant="elevated">
                  <div className="relative h-48 bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center overflow-hidden group">
                    <Icon className="w-16 h-16 text-white z-10" />
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 flex-1">
                      {service.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
