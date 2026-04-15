/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
j */

import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, CheckCircle2, Star, ExternalLink, Instagram, Facebook, Phone, Mail, ChevronRight, Activity, Globe, TrendingUp, Users } from 'lucide-react';

const WHATSAPP_LINK = "https://wa.me/918766279595";

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen text-white selection:bg-cyan-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b-0 border-white/10 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <img src="/logo.png" alt="Clinic Growth Expert Logo" className="relative h-12 w-12 rounded-xl object-contain bg-white p-1 shadow-xl ring-1 ring-white/10" />
            </div>
            <span className="font-bold text-xl tracking-tight">Clinic Growth Expert</span>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-2.5 rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat Now</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-cyan-300 text-sm font-medium mb-8"
        >
          <Star className="w-4 h-4 fill-cyan-300" />
          <span>100+ Clinics Served</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight"
        >
          We Help Clinics <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
            Get More Patients
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl"
        >
          High-converting websites + Google growth for clinics. Turn visitors into loyal patients on autopilot.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold"
          >
            <MessageCircle className="w-6 h-6" />
            Get Free Demo Website
            <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-400 text-lg">Everything you need to dominate your local market.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe className="w-10 h-10 text-cyan-400" />,
              title: "Website Development",
              desc: "Premium, lightning-fast, and mobile-optimized websites designed to convert."
            },
            {
              icon: <TrendingUp className="w-10 h-10 text-teal-400" />,
              title: "Google Growth",
              desc: "Advanced SEO and local ranking strategies to put you at the top of search results."
            },
            {
              icon: <Users className="w-10 h-10 text-cyan-400" />,
              title: "Lead Generation",
              desc: "Automated WhatsApp funnel systems to capture and nurture patient leads instantly."
            }
          ].map((service, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300 h-full">
                <div className="bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-gray-400 text-lg">Choose the perfect plan for your clinic's growth.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Basic Plan */}
          <FadeIn delay={0.1}>
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-2">Basic</h3>
              <div className="text-4xl font-bold mb-6">₹4,999</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>1 Page Website</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>WhatsApp Integration</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Mobile Optimized</span>
                </li>
              </ul>
              <a href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hi, I am interested in the Basic Plan (₹4,999) for my clinic.")}`} target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-6 rounded-full glass-card text-center font-medium hover:bg-white/10 transition-colors">
                Get Started
              </a>
            </div>
          </FadeIn>

          {/* Standard Plan */}
          <FadeIn delay={0.2}>
            <div className="glass-card p-8 rounded-3xl border-cyan-500/50 relative transform md:-translate-y-4" style={{ boxShadow: '0 0 40px rgba(34, 211, 238, 0.15)' }}>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-teal-500 px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 whitespace-nowrap">
                Most Popular 🔥
              </div>
              <h3 className="text-2xl font-semibold mb-2">Standard</h3>
              <p className="text-cyan-300 text-sm mb-4">Best Value for Clinics</p>
              <div className="text-4xl font-bold mb-6">₹9,999</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Multi-page Website</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Basic SEO Setup</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Contact System</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>WhatsApp Integration</span>
                </li>
              </ul>
              <a href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hi, I am interested in the Standard Plan (₹9,999) for my clinic.")}`} target="_blank" rel="noopener noreferrer" className="glow-button block w-full py-3 px-6 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 text-center font-semibold">
                Get Started
              </a>
            </div>
          </FadeIn>

          {/* Premium Plan */}
          <FadeIn delay={0.3}>
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-semibold mb-2">Premium</h3>
              <div className="text-4xl font-bold mb-6">₹14,999</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Full Custom Website</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Advanced SEO</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Lead Funnel</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Marketing Automation</span>
                </li>
              </ul>
              <a href={`${WHATSAPP_LINK}?text=${encodeURIComponent("Hi, I am interested in the Premium Plan (₹14,999) for my clinic.")}`} target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-6 rounded-full glass-card text-center font-medium hover:bg-white/10 transition-colors">
                Get Started
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Work</h2>
            <p className="text-gray-400 text-lg">See the results we deliver for our clients.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Radhey Dental Clinic",
              link: "https://radhey-dental-clinic-xfc36869.durable.site/",
              image: "/project1.png"
            },
            {
              name: "Smile Dental Clinic",
              link: "https://smile-dental-clinic-7kyg8740.durable.site/",
              image: "/project2.png"
            }
          ].map((project, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="glass-card rounded-3xl overflow-hidden group">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">{project.name}</h3>
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    View Live Site
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Client Success</h2>
            <p className="text-gray-400 text-lg">Don't just take our word for it.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              text: "Got 30+ new patients in 1 month! The WhatsApp funnel is a game changer for our clinic.",
              author: "Dr. Sharma",
              role: "Lead Dentist"
            },
            {
              text: "Best marketing service for clinics! Our website looks incredibly premium and ranks #1 locally.",
              author: "Dr. Patel",
              role: "Clinic Owner"
            }
          ].map((testimonial, i) => (
            <FadeIn key={i} delay={i * 0.2}>
              <div className="glass-card p-8 rounded-3xl relative h-full flex flex-col">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="text-xl text-gray-300 mb-8 italic flex-grow">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-lg">{testimonial.author}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* --- Meet Our Team Section --- */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", marginBottom: "10px", color: "#ffffff" }}>Meet Our Team</h2>
        <p style={{ color: "#94a3b8", marginBottom: "40px", fontSize: "1.1rem" }}>The experts dedicated to your clinic's success</p>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "25px" }}>
          
          <div style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", padding: "30px", width: "100%", maxWidth: "340px", backdropFilter: "blur(15px)" }}>
            <div style={{ width: "80px", height: "80px", background: "linear-gradient(135deg, #1e293b, #0f172a)", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #00f2fe" }}>
              <span style={{ fontSize: "2rem" }}>👤</span>
            </div>
            <h3 style={{ color: "#fff", fontSize: "1.4rem", margin: "0 0 5px" }}>Alok</h3>
            <p style={{ color: "#00f2fe", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>Founder & Web Developer</p>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.5", marginTop: "15px" }}>Building high-performance digital platforms for clinics.</p>
          </div>

          <div style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", padding: "30px", width: "100%", maxWidth: "340px", backdropFilter: "blur(15px)" }}>
            <div style={{ width: "80px", height: "80px", background: "linear-gradient(135deg, #1e293b, #0f172a)", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #00f2fe" }}>
              <span style={{ fontSize: "2rem" }}>📈</span>
            </div>
            <h3 style={{ color: "#fff", fontSize: "1.4rem", margin: "0 0 5px" }}>Rahul</h3>
            <p style={{ color: "#00f2fe", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>SEO Specialist</p>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.5", marginTop: "15px" }}>Expert in Google rankings and clinic search visibility.</p>
          </div>

          <div style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "20px", padding: "30px", width: "100%", maxWidth: "340px", backdropFilter: "blur(15px)" }}>
            <div style={{ width: "80px", height: "80px", background: "linear-gradient(135deg, #1e293b, #0f172a)", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #00f2fe" }}>
              <span style={{ fontSize: "2rem" }}>🚀</span>
            </div>
            <h3 style={{ color: "#fff", fontSize: "1.4rem", margin: "0 0 5px" }}>Aman</h3>
            <p style={{ color: "#00f2fe", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>Marketing Expert</p>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.5", marginTop: "15px" }}>Lead generation specialist for healthcare providers.</p>
          </div>
        </div>
      </section>
        
                    
      {/* Contact & Socials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-16 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Grow Your Clinic?</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <a href="tel:8766279595" className="flex items-center gap-3 text-xl hover:text-cyan-400 transition-colors">
                <Phone className="w-6 h-6" />
                +91 8766279595
              </a>
              <a href="mailto:clinicgrowthexpert@gmail.com" className="flex items-center gap-3 text-xl hover:text-cyan-400 transition-colors">
                <Mail className="w-6 h-6" />
                clinicgrowthexpert@gmail.com
              </a>
            </div>
            
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold mb-12"
            >
              <MessageCircle className="w-6 h-6" />
              Chat on WhatsApp
            </a>

            <div className="flex justify-center gap-6">
              <a href="https://www.instagram.com/clinicgrowthexpertofficial?igsh=MW5iYWhjNjM1Y2Nkcw==" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-full hover:bg-white/10 transition-colors group">
                <Instagram className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a href="https://www.facebook.com/share/1CULAQ3rD4/" target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-full hover:bg-white/10 transition-colors group">
                <Facebook className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="p-4 glass-card rounded-full hover:bg-white/10 transition-colors group">
                <MessageCircle className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
                              
