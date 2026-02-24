import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 pb-20">
      
      {/* HEADER / NAVIGATION (Synced with About Us) */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-indigo-600 transition-colors group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </button>
            
            <div className="h-4 w-px bg-slate-200 hidden md:block" />

            <div className="text-2xl font-black tracking-tighter text-indigo-600 uppercase">
              TRUTH<span className="text-slate-900">ENGINE</span>
            </div>
          </div>

          <div className="hidden sm:block text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border border-slate-200 px-4 py-1.5 rounded-full">
            Secure Comms Channel
          </div>
        </div>
      </nav>

      {/* HERO SECTION - COMPACT VERSION */}
<section className="pt-32 pb-8 px-8">
  <div className="max-w-5xl mx-auto">
    <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-4 leading-none uppercase">
      Establish <br />
      <span className="text-indigo-600">Contact.</span>
    </h1>
    <p className="text-lg text-slate-500 leading-relaxed font-medium max-w-xl">
      Our operatives are available for technical integration support, enterprise licensing, and forensic methodology inquiries.
    </p>
  </div>
</section>

      {/* MAIN CONTENT GRID */}
      <section className="px-2 py-2">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: INFO PANELS */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 mb-6">Operational HQ</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-medium italic">
                Neural Plaza, Suite 101<br />
                Innovation District<br />
                San Francisco, CA 94103
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 mb-2">Direct Channels</h3>
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <span className="text-lg">📧</span>
                  <span className="text-xs font-black text-slate-800 group-hover:text-indigo-600 tracking-tight transition-colors">OPS@TRUTHENGINE.AI</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer">
                  <span className="text-lg">📱</span>
                  <span className="text-xs font-black text-slate-800 group-hover:text-indigo-600 tracking-tight transition-colors">+1 (555) 010-9921</span>
                </div>
              </div>
            </div>

            {/* STATUS MINI-CARD */}
            <div className="p-6 border-2 border-slate-100 rounded-[32px] bg-white shadow-xl shadow-slate-200/20">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Node Status</span>
              </div>
              <p className="text-[11px] font-black text-slate-900 uppercase">Average Latency: 1.4 Hours</p>
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-8">
            <div className="bg-white border-2 border-slate-100 p-8 md:p-12 rounded-[48px] shadow-2xl shadow-slate-200/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-[100px] -mr-32 -mt-32 opacity-50"></div>
              
              {!submitted ? (
                <form className="relative z-10 space-y-8" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Analyst Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 transition-all text-sm font-bold placeholder:text-slate-300"
                        placeholder="IDENTIFY YOURSELF"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Return Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 transition-all text-sm font-bold placeholder:text-slate-300"
                        placeholder="NAME@AGENCY.COM"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Transmission Subject</label>
                    <div className="relative">
                      <select className="w-full bg-slate-50 border border-slate-100 p-5 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 transition-all text-xs font-black uppercase tracking-widest appearance-none cursor-pointer">
                        <option>Technical Support</option>
                        <option>Enterprise Licensing</option>
                        <option>Forensic Feedback</option>
                        <option>Press Inquiry</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 font-bold">↓</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Detailed Briefing</label>
                    <textarea 
                      required
                      className="w-full h-44 bg-slate-50 border border-slate-100 p-5 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 transition-all text-sm font-medium resize-none leading-relaxed placeholder:text-slate-300"
                      placeholder="Input data for transmission..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-6 bg-slate-900 text-white rounded-[24px] font-black text-xs uppercase tracking-[0.3em] hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200 active:scale-[0.98]"
                  >
                    Execute Transmission
                  </button>
                </form>
              ) : (
                <div className="relative z-10 py-24 text-center animate-in zoom-in-95 duration-500">
                  <div className="w-24 h-24 bg-indigo-600 text-white rounded-[32px] flex items-center justify-center text-4xl mx-auto mb-8 shadow-xl shadow-indigo-200 rotate-6">
                    ✓
                  </div>
                  <h2 className="text-3xl font-black text-slate-900 mb-3 uppercase tracking-tighter">Transmission Encrypted</h2>
                  <p className="text-slate-500 text-sm font-medium max-w-xs mx-auto mb-10">
                    Data packet received. An operative will contact you via your provided return address.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.3em] border-b-2 border-indigo-600 pb-1 hover:text-slate-900 hover:border-slate-900 transition-all"
                  >
                    New Transmission
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER (Synced with About Us) */}
      <footer className="py-20 text-center bg-slate-50/30 border-t border-slate-50 mt-12">
        <div className="text-xl font-black tracking-tighter text-slate-300 uppercase mb-3">
          TRUTHENGINE
        </div>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.5em]">
          © 2026 Neural Forensic Lab • All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Contact;