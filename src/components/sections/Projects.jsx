import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Home, UtensilsCrossed, Building2, Lock, Settings } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { PROJECTS } from '../../utils/constants';

const projectIcons = {
  industrial: Factory,
  residential: Home,
  restaurant: UtensilsCrossed,
  office: Building2,
  fencing: Lock,
  custom: Settings,
};

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="Featured Projects"
          subtitle="Showcasing our expertise across diverse industries"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
            const Icon = projectIcons[project.category];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full group">
                  <div className="relative h-60 bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center overflow-hidden">
                    <Icon className="w-12 h-12 text-white z-10" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-400 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center p-6">
                        <p className="text-sm font-medium">View Details</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
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
