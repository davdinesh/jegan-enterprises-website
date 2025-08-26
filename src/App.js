import React, { useState, useEffect } from 'react';

export default function JeganEnterprises() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = `New Project Inquiry from ${formData.name}`;
    const body = `New project inquiry received:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Project Type: ${formData.project || 'Not specified'}

Message:
${formData.message}

---
This inquiry was sent from Jegan Enterprises website contact form.`;

    const mailtoLink = `mailto:info@jeganenterprises.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    setShowSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      project: '',
      message: ''
    });

    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const NavBar = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black bg-opacity-98' : 'bg-black bg-opacity-95'}`} style={{backdropFilter: 'blur(10px)'}}>
      <div className="max-w-6xl mx-auto px-8 flex justify-between items-center py-4">
        <button
          onClick={() => scrollToSection('home')}
          className="text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors"
        >
          Jegan Enterprises
        </button>
        
        <ul className="hidden md:flex space-x-8">
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <button
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-white hover:text-orange-500 font-medium transition-colors"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex flex-col space-y-1"
        >
          <span className="w-6 h-0.5 bg-white transition-all"></span>
          <span className="w-6 h-0.5 bg-white transition-all"></span>
          <span className="w-6 h-0.5 bg-white transition-all"></span>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 p-4">
          {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-left text-white hover:text-orange-500 py-2 transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );

  const Hero = () => (
    <section id="home" className="h-screen bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-center text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/10 text-4xl animate-bounce">⚙️</div>
        <div className="absolute top-3/5 right-1/6 text-2xl animate-bounce" style={{animationDelay: '2s'}}>🔧</div>
        <div className="absolute bottom-1/3 left-1/5 text-3xl animate-bounce" style={{animationDelay: '4s'}}>⚡</div>
      </div>
      
      <div className="z-10 max-w-4xl px-8">
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
          Premium Steel Fabrication
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
          Crafting excellence in mild steel and stainless steel solutions for industrial, residential, and commercial projects
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Get Your Quote
        </button>
      </div>
    </section>
  );

  const About = () => (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-12 relative">
          About Us
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mt-4"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              With over a decade of expertise in steel fabrication, Jegan Enterprises has established itself as a premier provider of custom steel solutions. We specialize in both mild steel and stainless steel fabrication, delivering exceptional quality across industrial, residential, restaurant, kitchen, fencing, and office applications.
            </p>
            <p className="text-lg leading-relaxed">
              Our commitment to precision, durability, and innovation ensures that every project meets the highest standards of quality and functionality. From concept to completion, we work closely with our clients to bring their vision to life.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: '🏭', title: '10+ Years Experience', desc: 'Decade of expertise in steel fabrication' },
              { icon: '⚡', title: 'Quality Guarantee', desc: 'Premium materials and craftsmanship' },
              { icon: '🎯', title: 'Custom Solutions', desc: 'Tailored to your specific needs' },
              { icon: '⏰', title: 'Timely Delivery', desc: 'Projects completed on schedule' }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const Services = () => (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-12 relative">
          Our Services
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mt-4"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: '🏭', title: 'Industrial Fabrication', desc: 'Heavy-duty steel structures, machinery components, and industrial equipment fabrication using high-grade mild steel and stainless steel for maximum durability.' },
            { icon: '🏠', title: 'Residential Solutions', desc: 'Custom railings, staircases, decorative elements, and structural components that enhance the beauty and functionality of your home.' },
            { icon: '🍽️', title: 'Restaurant & Kitchen', desc: 'Commercial kitchen equipment, food preparation surfaces, storage solutions, and restaurant fixtures crafted from food-grade stainless steel.' },
            { icon: '🏢', title: 'Office Spaces', desc: 'Modern office furniture, partition systems, reception desks, and architectural elements that create professional work environments.' },
            { icon: '🏡', title: 'Fencing Solutions', desc: 'Security fencing, decorative boundaries, gates, and access control systems for residential and commercial properties.' },
            { icon: '🔧', title: 'Custom Fabrication', desc: 'Specialized steel fabrication projects tailored to unique requirements, from prototypes to large-scale installations.' }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:transform hover:-translate-y-3 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-6xl text-white relative overflow-hidden">
                {service.icon}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20 transform -translate-x-full hover:translate-x-full transition-all duration-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Projects = () => (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-12 relative">
          Featured Projects
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mt-4"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: '🏭', title: 'Manufacturing Plant Structures', desc: 'Complete structural steel framework for manufacturing facilities, including support beams, walkways, and equipment mounts.' },
            { icon: '🏠', title: 'Modern Home Features', desc: 'Custom stainless steel railings, floating staircases, and architectural accents for contemporary residential projects.' },
            { icon: '🍽️', title: 'Commercial Kitchen Setup', desc: 'Complete stainless steel kitchen installation including prep tables, shelving systems, and custom equipment housings.' },
            { icon: '🏢', title: 'Office Interior Solutions', desc: 'Modern steel and glass partition systems, reception desks, and decorative elements for professional environments.' },
            { icon: '🔒', title: 'Security Fencing', desc: 'High-security fencing installation with automated gates and access control for commercial and industrial facilities.' },
            { icon: '⚙️', title: 'Custom Machinery', desc: 'Specialized equipment components and assembly fixtures for various industrial applications and manufacturing lines.' }
          ].map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
              <div className="h-60 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-4xl text-white">
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Contact = () => (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-12 relative">
          Get In Touch
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mt-4"></div>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send Us Your Project Details</h3>
            <div className="space-y-6">
              <div>
                <label className="block font-semibold mb-2 text-gray-800">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-800">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-800">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-800">Project Type</label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleInputChange}
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="industrial">Industrial Fabrication</option>
                  <option value="residential">Residential Solutions</option>
                  <option value="restaurant">Restaurant & Kitchen</option>
                  <option value="office">Office Spaces</option>
                  <option value="fencing">Fencing Solutions</option>
                  <option value="custom">Custom Fabrication</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-2 text-gray-800">Project Description *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  required
                  placeholder="Please describe your project requirements, timeline, and any specific details..."
                  className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                onClick={handleSubmit}
                disabled={!formData.name || !formData.email || !formData.message}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-400 text-white p-4 rounded-xl font-semibold text-lg hover:transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send Request
              </button>
              
              {showSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl">
                  <strong>Thank you!</strong> Your inquiry has been prepared. Your email client should open automatically.
                </div>
              )}
            </div>
          </div>
          
          <div className="bg-gray-800 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            {[
              { icon: '📱', title: 'Phone', info: '+91 99441 04890' },
              { icon: '✉️', title: 'Email', info: 'info@jeganenterprises.com' },
              { icon: '📍', title: 'Location', info: 'Virudhunagar\nTamil Nadu 626001' },
              { icon: '⏰', title: 'Business Hours', info: 'Mon-Fri: 7:00 AM - 6:00 PM\nSat: 8:00 AM - 4:00 PM' }
            ].map((contact, index) => (
              <div key={index} className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4 text-xl">
                  {contact.icon}
                </div>
                <div>
                  <h4 className="font-semibold">{contact.title}</h4>
                  <p className="text-gray-300 whitespace-pre-line">{contact.info}</p>
                </div>
              </div>
            ))}
            
            <div className="mt-8 pt-8 border-t border-gray-600">
              <h4 className="font-semibold mb-4">Why Choose Jegan Enterprises?</h4>
              <ul className="space-y-2">
                {['Free project consultations', 'Competitive pricing', 'Licensed & insured', '24/7 emergency service'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-400 mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white text-center py-8">
      <div className="max-w-6xl mx-auto px-8">
        <p>&copy; 2025 Jegan Enterprises. All rights reserved. | Premium Steel Fabrication Services</p>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}