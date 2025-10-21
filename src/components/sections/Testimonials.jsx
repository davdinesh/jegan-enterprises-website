import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Card } from '../ui/Card';
import { SectionHeader } from '../ui/SectionHeader';
import { TESTIMONIALS } from '../../utils/constants';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="Client Testimonials"
          subtitle="What our clients say about working with us"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Slider {...settings} className="testimonials-slider">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <Card className="p-8 h-full" variant="elevated">
                  <Quote className="w-12 h-12 text-primary-500 mb-4" />

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t border-gray-200 dark:border-dark-700 pt-4">
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                    <p className="text-sm text-primary-500">
                      {testimonial.company}
                    </p>
                  </div>
                </Card>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
}
