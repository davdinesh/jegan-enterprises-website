import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Input, TextArea, Select, Label, FormError } from '../ui/Input';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import { COMPANY_INFO, WHY_CHOOSE_US, PROJECT_TYPES } from '../../utils/constants';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  project: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    try {
      // EmailJS configuration
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone || 'Not provided',
        project_type: data.project || 'Not specified',
        message: data.message,
        to_email: COMPANY_INFO.email,
      };

      // Replace with your EmailJS credentials
      // Sign up at https://www.emailjs.com/ and get your credentials
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      toast.success('Thank you! Your message has been sent successfully.');
      reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again or contact us directly.');
    }
  };

  const contactInfo = [
    { icon: Phone, title: 'Phone', info: COMPANY_INFO.phone },
    { icon: Mail, title: 'Email', info: COMPANY_INFO.email },
    {
      icon: MapPin,
      title: 'Location',
      info: `${COMPANY_INFO.location}\n${COMPANY_INFO.state} ${COMPANY_INFO.pincode}`,
    },
    {
      icon: Clock,
      title: 'Business Hours',
      info: `${COMPANY_INFO.businessHours.weekdays}\n${COMPANY_INFO.businessHours.saturday}`,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeader
          title="Get In Touch"
          subtitle="Let's discuss your steel fabrication project"
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8" variant="elevated">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
                Send Us Your Project Details
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label required>Full Name</Label>
                  <Input
                    {...register('name')}
                    error={errors.name}
                    placeholder="John Doe"
                  />
                  <FormError>{errors.name?.message}</FormError>
                </div>

                <div>
                  <Label required>Email Address</Label>
                  <Input
                    {...register('email')}
                    type="email"
                    error={errors.email}
                    placeholder="john@example.com"
                  />
                  <FormError>{errors.email?.message}</FormError>
                </div>

                <div>
                  <Label>Phone Number</Label>
                  <Input
                    {...register('phone')}
                    type="tel"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <Label>Project Type</Label>
                  <Select {...register('project')}>
                    <option value="">Select a service</option>
                    {PROJECT_TYPES.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </Select>
                </div>

                <div>
                  <Label required>Project Description</Label>
                  <TextArea
                    {...register('message')}
                    rows={5}
                    error={errors.message}
                    placeholder="Please describe your project requirements, timeline, and any specific details..."
                  />
                  <FormError>{errors.message?.message}</FormError>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-dark-800 text-white h-full">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <div key={index} className="flex items-start">
                      <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{contact.title}</h4>
                        <p className="text-gray-300 whitespace-pre-line">
                          {contact.info}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-8 border-t border-gray-600">
                <h4 className="font-semibold mb-4">Why Choose Jegan Enterprises?</h4>
                <ul className="space-y-3">
                  {WHY_CHOOSE_US.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
