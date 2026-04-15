import React from 'react';
import { MessageCircle, Phone, Mail, ArrowRight, Shield, Zap, Globe } from 'lucide-react';

export default function App() {
  const WA = "https://wa.me/918766279595";
  return (
    <div className="min-h-screen bg-[#020202] text-white font-sans selection:bg-cyan-500/30">
      {/* Premium Navbar */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto border-b border-white/5 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center font-black text-black shadow-lg shadow-cyan-500/20">C</div>
          <span className="font-bold text-2xl tracking-tighter">CLINIC GROWTH <span className="text-cyan-400">EXPERT</span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <h1 className="text-6xl font-black mb-8 leading-tight bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">MEET THE <br/>STRATEGISTS</h1>
        <p className="text-gray-400 max-w-lg mx-auto mb-16 text-xl leading-relaxed">We don't just build websites; we build patient-generating machines for elite clinics.</p>
        
        <div className="grid gap-8 max-w-xl mx-auto">
          {[
            { n: "Alok", r: "Founder & Lead Architect", d: "Digital Infrastructure Specialist", i: "👤" },
            { n: "Rahul", r: "Search Authority Lead", d: "Google Ranking & SEO Expert", i: "📈" },
            { n: "Aman", r: "Growth Strategist", d: "Direct Response Marketing Lead", i: "🚀" }
          ].map((m) => (
            <div key={m.n} className="group p-10 bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] text-left hover:border-cyan-500/50 transition-all shadow-2xl">
              <div className="text-4xl mb-6 bg-cyan-500/10 w-16 h-16 flex items-center justify-center rounded-2xl border border-cyan-500/20">{m.i}</div>
              <h3 className="text-3xl font-black mb-1">{m.n}</h3>
              <p className="text-cyan-400 font-bold text-sm uppercase tracking-widest mb-4">{m.r}</p>
              <p className="text-gray-500 font-medium">{m.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-md mx-auto bg-white p-12 rounded-[3.5rem] text-black text-center shadow-[0_40px_100px_rgba(255,255,255,0.05)]">
          <h2 className="text-4xl font-black mb-6 leading-none">READY FOR <br/>DOMINATION?</h2>
          <p className="font-bold mb-10 text-gray-600">Scale your revenue with our proven systems.</p>
          <a href={WA} className="flex items-center justify-center gap-3 bg-black text-white px-10 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform">
            WHATSAPP NOW <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      <footer className="py-12 text-center text-gray-700 font-bold uppercase tracking-tighter text-sm">
        <p>© 2026 CLINIC GROWTH EXPERT • PREMIERE HEALTHCARE AGENCY</p>
      </footer>
    </div>
  );
}
