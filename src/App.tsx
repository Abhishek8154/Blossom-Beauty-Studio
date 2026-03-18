/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Menu, 
  X, 
  Star, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  Heart,
  ShieldCheck,
  UserCheck,
  Award,
  Wallet
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <span className={`text-2xl font-serif font-bold tracking-tight ${isScrolled ? 'text-pink-600' : 'text-white'}`}>
            Blossom <span className="text-pink-400">Beauty</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-pink-500 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="tel:+919082096023"
            className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-pink-200"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-pink-50 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-pink-50 rounded-md"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="tel:+919082096023"
                  className="block w-full text-center bg-pink-500 text-white px-6 py-3 rounded-full text-sm font-semibold"
                >
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-110"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/40 to-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 drop-shadow-lg">
            Blossom <span className="italic text-pink-200">Beauty</span> Studio 🌸🧿
          </h1>
          <p className="text-xl md:text-2xl text-pink-50 font-light mb-10 tracking-wide max-w-2xl mx-auto">
            Glow with Confidence, Shine with Beauty
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="w-full sm:w-auto bg-white text-pink-600 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-pink-50 transition-colors"
            >
              Book Appointment
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+919082096023"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Call Now
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Salon Interior" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-pink-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-pink-200 rounded-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6">Welcome to Blossom Beauty Studio</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              At Blossom Beauty Studio, we believe that every individual deserves to feel radiant and confident. Located in the heart of Mumbai, our studio is a sanctuary of beauty and relaxation.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our team of highly skilled beauticians is dedicated to providing personalized care using only premium products. We maintain the highest standards of hygiene and quality to ensure your complete satisfaction. Whether it's a quick touch-up or a full bridal makeover, we are here to make you shine.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-pink-500" />
                <span className="font-medium text-gray-800">Skilled Experts</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-pink-500" />
                <span className="font-medium text-gray-800">Premium Products</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-pink-500" />
                <span className="font-medium text-gray-800">Hygienic Space</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="text-pink-500" />
                <span className="font-medium text-gray-800">Personalized Care</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Facial & Skin Care",
      description: "Rejuvenate your skin with our premium facials and specialized skin treatments.",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Bridal Makeup",
      description: "Look your absolute best on your special day with our expert bridal makeup services.",
      image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: "Party Makeup",
      description: "Stunning makeup looks for any occasion, from subtle elegance to bold glamour.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Hair Styling & Care",
      description: "Professional cuts, coloring, and styling to give your hair the perfect look and health.",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Waxing & Threading",
      description: "Gentle and precise hair removal services for smooth and flawless skin.",
      image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <CheckCircle2 className="w-6 h-6" />
    },
    {
      title: "Manicure & Pedicure",
      description: "Pamper your hands and feet with our relaxing and beautifying nail treatments.",
      image: "https://images.unsplash.com/photo-1610992015732-2449b0c26670?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      icon: <Sparkles className="w-6 h-6" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-pink-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-4 block">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Premium Services</h2>
            <div className="w-24 h-1 bg-pink-300 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 p-3 rounded-full text-pink-500 shadow-md">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-serif text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <a href="#contact" className="text-pink-500 font-semibold flex items-center hover:text-pink-600 transition-colors">
                  Learn More <ChevronRight size={18} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1522337660859-02fbefca4702?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1512496011931-621d062750d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Visual Tour</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">Our Beauty Gallery</h2>
            <div className="w-24 h-1 bg-pink-300 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/90 p-4 rounded-full text-pink-500 scale-0 group-hover:scale-100 transition-transform duration-500">
                  <Sparkles />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Experienced Beauticians",
      description: "Our team consists of certified professionals with years of experience in the beauty industry.",
      icon: <UserCheck className="w-8 h-8" />
    },
    {
      title: "Premium Products",
      description: "We use only high-quality, international beauty brands to ensure the best results for your skin and hair.",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Hygienic Environment",
      description: "Your safety is our priority. We maintain a strictly clean and sanitized environment at all times.",
      icon: <ShieldCheck className="w-8 h-8" />
    },
    {
      title: "Affordable Packages",
      description: "Get premium beauty services at competitive prices with our specially curated packages.",
      icon: <Wallet className="w-8 h-8" />
    },
    {
      title: "Personalized Services",
      description: "We tailor our treatments to meet your unique beauty needs and preferences.",
      icon: <Star className="w-8 h-8" />
    }
  ];

  return (
    <section className="py-24 bg-pink-900 text-white overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-pink-300 font-semibold tracking-widest uppercase text-sm mb-4 block">Why Blossom</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-500 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
              <p className="text-pink-100/70 leading-relaxed max-w-xs">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      role: "Regular Customer",
      content: "Blossom Beauty Studio is my go-to place for facials. The staff is so professional and the results are always amazing. Highly recommended!",
      rating: 5
    },
    {
      name: "Anjali Gupta",
      role: "Bridal Client",
      content: "They did my bridal makeup and I couldn't have been happier. I felt like a princess! Thank you for making my day so special.",
      rating: 5
    },
    {
      name: "Sneha Patil",
      role: "Party Makeup Client",
      content: "Got my party makeup done here and received so many compliments. The products they use are top-notch and didn't irritate my sensitive skin.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Happy Clients</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-pink-300 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-pink-50 p-10 rounded-3xl relative"
            >
              <div className="absolute -top-5 left-10 bg-pink-500 text-white p-3 rounded-2xl shadow-lg">
                <MessageCircle size={24} />
              </div>
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-8 text-lg leading-relaxed">"{review.content}"</p>
              <div>
                <h4 className="font-bold text-gray-900 text-xl">{review.name}</h4>
                <p className="text-pink-500 text-sm font-medium">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-pink-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-pink-500 font-semibold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-8">Visit Our Studio</h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-5">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-pink-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Our Address</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Shop no 4, Shroff Building, Gokhale Rd, opp. Yamaha showroom, Babasaheb Ambedkar Nagar, Mumbai, Maharashtra 400025
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-pink-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Call Us</h4>
                  <a href="tel:+919082096023" className="text-gray-600 hover:text-pink-500 transition-colors">+91 9082096023</a>
                </div>
              </div>

              <div className="flex items-start space-x-5">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-pink-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">Opening Hours</h4>
                  <p className="text-gray-600">Mon - Sun: 10:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-80 shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m1!1s0x3be7ce902781665f:0x7222146435017e81!2sBlossom%20Beauty%20Studio!5e0!3m2!1sen!2sin!4v1710744608000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-pink-50"
          >
            <h3 className="text-3xl font-serif text-gray-900 mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-5 py-4 bg-pink-50/50 border border-pink-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-5 py-4 bg-pink-50/50 border border-pink-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-5 py-4 bg-pink-50/50 border border-pink-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-pink-200 transition-all transform hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-3xl font-serif font-bold tracking-tight text-pink-400 mb-6 block">
              Blossom <span className="text-white">Beauty</span>
            </span>
            <p className="text-gray-400 leading-relaxed mb-8">
              Premium beauty services in Mumbai. We specialize in bridal makeup, skin care, and hair styling to make you look and feel your best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-pink-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-pink-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://wa.me/919082096023" className="bg-white/10 p-3 rounded-full hover:bg-pink-500 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 border-b border-white/10 pb-4">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-pink-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-pink-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-pink-400 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-pink-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 border-b border-white/10 pb-4">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors">Facial & Skin Care</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors">Bridal Makeup</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors">Hair Styling</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors">Manicure & Pedicure</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-pink-400 transition-colors">Waxing & Threading</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-8 border-b border-white/10 pb-4">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <MapPin className="text-pink-400 shrink-0 mt-1" size={20} />
                <span className="text-gray-400">Shop no 4, Shroff Building, Gokhale Rd, Mumbai - 400025</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="text-pink-400 shrink-0" size={20} />
                <a href="tel:+919082096023" className="text-gray-400 hover:text-pink-400">+91 9082096023</a>
              </li>
              <li className="flex items-center space-x-4">
                <Clock className="text-pink-400 shrink-0" size={20} />
                <span className="text-gray-400">10:00 AM - 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Blossom Beauty Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/919082096023"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-600 transition-colors"
    >
      <MessageCircle size={32} />
    </motion.a>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen font-sans text-gray-900 selection:bg-pink-100 selection:text-pink-600">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
