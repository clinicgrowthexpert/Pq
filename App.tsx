import React from 'react';
import { MessageCircle, Phone, Mail } from 'lucide-react';

export default function App() {
  const WA = "https://wa.me/918766279595";
  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 text-center">
      <nav className="mb-10 text-xl font-bold text-cyan-400">Clinic Growth Expert</nav>
      <h1 className="text-4xl font-bold mb-6">Meet Our Team</h1>
      <div className="space-y-4 mb-10">
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">Alok - Founder</div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">Rahul - SEO</div>
        <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">Aman - Marketing</div>
      </div>
      <div className="p-8 bg-cyan-500/10 rounded-3xl border border-cyan-500/20">
        <p className="text-2xl font-bold mb-4">Contact: +91 8766279595</p>
        <a href={WA} className="inline-block bg-cyan-500 text-black px-8 py-3 rounded-full font-bold">WhatsApp Us</a>
      </div>
      <footer className="mt-20 text-gray-500">© 2026 Clinic Growth Expert</footer>
    </div>
  );
}
