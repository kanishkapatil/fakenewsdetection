import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const team = [
    { name: "Kanishka Patil"},
    { name: "Simran Shaikh"},
    { name: "Arya Patil"},
    { name: "Diya Patil"}
  ];

  const languages = [
    { lang: 'English', type: 'Native Support' },
    { lang: 'Spanish', type: 'Global Reach' },
    { lang: 'French', type: 'European' },
    { lang: 'Portuguese', type: 'Americas' },
    { lang: 'German', type: 'Central Europe' },
    { lang: 'Hindi', type: 'South Asia' },
    { lang: 'Marathi', type: 'Regional' },
    { lang: 'And More', type: '10+ Total' }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100 pb-20">
      
      {/* HEADER / NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            {/* BACK BUTTON */}
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
            Forensic Intelligence Suite v1.0
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-40 pb-16 px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900 mb-8 leading-none uppercase">
            Precision in every <br />
            <span className="text-indigo-600">Decision.</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-2">
              <p className="text-xl text-slate-500 leading-relaxed font-medium">
                <strong>TRUTHENGINE</strong> is a high-performance analytical suite designed to dismantle 
                the infrastructure of misinformation. By utilizing advanced 
                <strong> Natural Language Processing (NLP)</strong>, we bridge the gap between 
                raw data and verifiable truth.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm">
              <h3 className="text-indigo-600 font-black text-xs uppercase tracking-widest mb-3">Core Engine</h3>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                Analyzing linguistic DNA via TF-IDF vectorization and semantic weight calculation to ensure high-fidelity classification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL MANIFESTO */}
      <section className="py-12 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white p-10 md:p-16 rounded-[48px] border-2 border-slate-100 shadow-xl shadow-slate-200/20">
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.4em] mb-10 text-center">
              Technical Manifesto
            </h2>
            <div className="space-y-10">
              <p className="text-2xl md:text-3xl leading-snug font-bold text-slate-900 tracking-tight">
                In an era defined by synthetic media, 
                <strong> TRUTHENGINE</strong> serves as a critical defense layer. 
                Our platform utilizes state-of-the-art 
                <strong> computational linguistics</strong> to dismantle deceptive narratives.
              </p>
              
              

              <p className="text-lg leading-relaxed text-slate-500 font-medium">
                Unlike traditional fact-checking, our architecture employs <strong>Explainable AI (XAI)</strong> to perform deep-tissue scans. By analyzing "linguistic fingerprints"—including abnormal punctuation density and sensationalist semantic weights—we provide an evidence-based verdict.
              </p>

              <p className="text-lg leading-relaxed text-slate-500 font-medium">
                Our mission is to bridge the gap between human intuition and machine precision across <strong>10+ major languages</strong>. We believe transparency is the ultimate antidote to deception.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MULTILINGUAL GRID */}
      <section className="py-20 px-8 bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.4em] mb-4">Global Reach</h2>
            <h3 className="text-4xl font-black tracking-tight uppercase">Neural Bridges</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {languages.map((item, i) => (
              <div key={i} className="p-8 bg-white border border-slate-200 rounded-[24px] hover:border-indigo-600 hover:shadow-xl transition-all text-center group">
                <p className="font-black text-slate-900 text-lg mb-1 group-hover:text-indigo-600 transition-colors">{item.lang}</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{item.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-24 px-8 border-t border-slate-100 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.4em] mb-4">Project Architects</h2>
            <h3 className="text-4xl font-black tracking-tight uppercase">The Minds Behind TRUTHENGINE</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map((member, i) => (
              <div key={i} className="group text-center">
                <div className="w-24 h-24 bg-slate-50 border border-slate-100 rounded-[32px] mb-6 mx-auto flex items-center justify-center text-3xl text-slate-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                  👤
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-1">{member.name}</h4>
                <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest leading-loose">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 text-center bg-slate-50/30 border-t border-slate-50">
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

export default AboutUs;