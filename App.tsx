import React from 'react';
import { Instagram, Facebook, MessageCircle, Phone, Mail, Star } from 'lucide-react';

const App = () => {
  const WHATSAPP_LINK = "https://wa.me/918766279595";

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-white p-1 rounded-lg">
            <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
          </div>
          <span className="font-bold text-xl">Clinic Growth Expert</span>
        </div>
      </nav>

      {/* --- MEET OUR TEAM SECTION --- */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "10px", color: "#ffffff" }}>Meet Our Team</h2>
        <p style={{ color: "#94a3b8", marginBottom: "40px", fontSize: "1.1rem" }}>The experts dedicated to your clinic's success</p>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "25px" }}>
          
          {/* Card Alok */}
          <div style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "24px", padding: "30px", width: "100%", maxWidth: "340px", backdropFilter: "blur(12px)" }}>
            <div style={{ width: "80px", height: "80px", background: "rgba(0, 242, 254, 0.1)", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #00f2fe" }}>
              <span style={{ fontSize: "2rem" }}>👤</span>
            </div>
            <h3 style={{ color: "#fff", fontSize: "1.5rem", margin: "0 0 5px" }}>Alok</h3>
            <p style={{ color: "#00f2fe", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>Founder & Web Developer</p>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.5", marginTop: "15px" }}>Building high-performance digital platforms for modern clinics.</p>
          </div>

          {/* Card Rahul */}
          <div style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "24px", padding: "30px", width: "100%", maxWidth: "340px", backdropFilter: "blur(12px)" }}>
            <div style={{ width: "80px", height: "80px", background: "rgba(0, 242, 254, 0.1)", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #00f2fe" }}>
              <span style={{ fontSize: "2rem" }}>📈</span>
            </div>
            <h3 style={{ color: "#fff", fontSize: "1.5rem", margin: "0 0 5px" }}>Rahul</h3>
            <p style={{ color: "#00f2fe", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>SEO Specialist</p>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.5", marginTop: "15px" }}>Expert in Google rankings and search visibility.</p>
          </div>

          {/* Card Aman */}
          <div style={{ background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "24px", padding: "30px", width: "100%", maxWidth: "340px", backdropFilter: "blur(12px)" }}>
            <div style={{ width: "80px", height: "80px", background: "rgba(0, 242, 254, 0.1)", borderRadius: "50%", margin: "0 auto 20px", display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid #00f2fe" }}>
              <span style={{ fontSize: "2rem" }}>🚀</span>
            </div>
            <h3 style={{ color: "#fff", fontSize: "1.5rem", margin: "0 0 5px" }}>Aman</h3>
            <p style={{ color: "#00f2fe", fontWeight: "bold", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "1px" }}>Marketing Expert</p>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem", lineHeight: "1.5", marginTop: "15px" }}>Lead generation specialist for healthcare providers.</p>
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="py-20 px-4">
        <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "32px", padding: "40px 20px", textAlign: "center", border: "1px solid rgba(255,255,255,0.1)", maxWidth: "600px", margin: "0 auto", backdropFilter: "blur(10px)" }}>
          <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Clinic?</h2>
          <div className="flex flex-col gap-4 items-center">
             <a href="tel:+918766279595" className="flex items-center gap-2 text-xl hover:text-cyan-400 transition-colors">
               <Phone className="w-6 h-6" /> +91 8766279595
             </a>
             <a href="mailto:clinicgrowthexpert@gmail.com" className="flex items-center gap-2 text-xl hover:text-cyan-400 transition-colors">
               <Mail className="w-6 h-6" /> clinicgrowthexpert@gmail.com
             </a>
             <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" style={{ marginTop: "20px", background: "linear-gradient(to right, #06b6d4, #14b8a6)", color: "white", padding: "15px 35px", borderRadius: "50px", fontWeight: "bold", textDecoration: "none" }}>
               Chat on WhatsApp
             </a>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Clinic Growth Expert. All rights reserved.</p>
      </footer>

    </div>
  );
};

export default App;
                       
