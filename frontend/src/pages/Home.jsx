
// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-[#FDFEFF] flex flex-col items-center justify-center relative overflow-hidden selection:bg-indigo-50">
      
//       {/* --- SOFT PASTEL AESTHETICS --- */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         {/* Soft Pastel Orbs */}
//         <div className="absolute top-[-15%] right-[-5%] w-[500px] h-[500px] bg-purple-50 rounded-full blur-[120px]"></div>
//         <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[100px]"></div>
//         <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-blue-50/60 rounded-full blur-[80px]"></div>
//       </div>

//       {/* Subtle Grid Pattern for Technical Feel */}
//       <div className="absolute inset-0 opacity-[0.15] pointer-events-none" 
//            style={{ backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
//       </div>

//       {/* --- MAIN CONTENT --- */}
//       <div className="relative z-10 text-center px-6 max-w-4xl">
        
//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-slate-200 bg-white/80 backdrop-blur-sm shadow-sm">
//           <span className="flex h-2 w-2 rounded-full bg-indigo-400"></span>
//           <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
//             Truth Engine • Intelligence Suite
//           </span>
//         </div>

//         {/* Hero Section */}
//         <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
//           Analyze Content with <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-400 to-emerald-400">
//             Absolute Clarity.
//           </span>
//         </h1>
        
//         <p className="text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed mb-10">
//           A high-precision **Fake News Detection System** designed to verify 
//           the integrity of digital media using advanced neural linguistics.
//         </p>

//         {/* --- LOGIN BUTTON --- */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button 
//             onClick={() => navigate('/login')}
//             className="group relative px-10 py-4 bg-slate-900 text-white rounded-2xl font-bold text-sm tracking-wide transition-all hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-100 active:scale-95 overflow-hidden"
//           >
//             <span className="relative z-10 flex items-center gap-2">
//               Get Started 
//               <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </span>
//           </button>
          
//           <button className="px-10 py-4 bg-white text-slate-500 border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all shadow-sm">
//             Learn More
//           </button>
//         </div>

//         {/* Simple Trust Metrics */}
//         <div className="mt-16 pt-8 border-t border-slate-100 flex justify-center gap-12 text-slate-400">
//           <div className="text-left">
//             <p className="text-slate-900 font-bold text-lg leading-none">90.1%</p>
//             <p className="text-[10px] uppercase tracking-widest mt-1">Accuracy Rate</p>
//           </div>
//           <div className="text-left">
//             <p className="text-slate-900 font-bold text-lg leading-none">BERT-v4</p>
//             <p className="text-[10px] uppercase tracking-widest mt-1">NLP Model</p>
//           </div>
//           <div className="text-left">
//             <p className="text-slate-900 font-bold text-lg leading-none">Global</p>
//             <p className="text-[10px] uppercase tracking-widest mt-1">Verification</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer Meta */}
//       <div className="absolute bottom-8 left-0 right-0 px-10 flex justify-between items-center opacity-40">
//         <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-500">
//           Truth Engine v2.0
//         </span>
//         <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-slate-500">
//           Secure • Reliable • Transparent
//         </span>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-[#FDFEFF] flex flex-col items-center justify-center relative overflow-hidden selection:bg-indigo-50">
      
//       {/* --- AESTHETIC BACKGROUND --- */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-purple-50 rounded-full blur-[100px]"></div>
//         <div className="absolute bottom-[-5%] left-[-5%] w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[90px]"></div>
//         <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
//              style={{ backgroundImage: `linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
//         </div>
//       </div>

//       {/* --- MAIN CONTENT --- */}
//       <div className="relative z-10 text-center px-6 max-w-4xl">
        
//         {/* Function Badge */}
//         <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-indigo-100 bg-white/80 backdrop-blur-sm shadow-sm">
//           <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
//           <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.25em]">
//             AI-Powered Fake News Detection System
//           </span>
//         </div>

//         {/* Refined Branding - Scaled down from 11rem to 8xl */}
//         <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-[-0.04em] leading-tight mb-4">
//           TRUTH<span className="text-indigo-600">ENGINE</span>
//         </h1>
        
//         {/* Core Purpose Statement */}
//         <h2 className="text-xl md:text-3xl font-bold text-slate-400 tracking-tight mb-8">
//           Advanced Neural Forensics for <br />
//           <span className="text-slate-800">Combatting Digital Misinformation.</span>
//         </h2>

//         <p className="text-base md:text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed mb-10">
//           A high-precision forensic suite utilizing BERT architecture to analyze 
//           linguistic patterns and verify news integrity across 100+ languages.
//         </p>

//         {/* Action Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <button 
//             onClick={() => navigate('/login')}
//             className="group px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-100 active:scale-95"
//           >
//             <span className="flex items-center gap-2">
//               START ANALYSIS 
//               <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </span>
//           </button>
          
//           <button className="px-10 py-4 bg-white text-slate-500 border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all shadow-sm">
//             HOW IT WORKS
//           </button>
//         </div>

//         {/* Logic Overview Diagram Placeholder */}
        

//         {/* Trust Metrics */}
//         <div className="mt-16 pt-8 border-t border-slate-100 flex justify-center gap-10 md:gap-16 text-slate-400">
//           <div className="text-left">
//             <p className="text-slate-900 font-black text-xl leading-none">94.8%</p>
//             <p className="text-[9px] font-bold uppercase tracking-widest mt-1.5">Model Accuracy</p>
//           </div>
//           <div className="text-left">
//             <p className="text-slate-900 font-black text-xl leading-none">BERT-v4</p>
//             <p className="text-[9px] font-bold uppercase tracking-widest mt-1.5">Neural Core</p>
//           </div>
//           <div className="text-left">
//             <p className="text-slate-900 font-black text-xl leading-none">Global</p>
//             <p className="text-[9px] font-bold uppercase tracking-widest mt-1.5">Source Scans</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer Branding */}
//       <div className="absolute bottom-6 w-full px-10 flex justify-between items-center opacity-30 pointer-events-none">
//         <span className="text-[8px] font-black tracking-[0.4em] uppercase text-slate-500 italic">Integrity Nodes Active</span>
//         <span className="text-[8px] font-black tracking-[0.4em] uppercase text-slate-500">v2.0 Forensic Build</span>
//       </div>
//     </div>
//   );
// };

// export default Home;







// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen bg-[#FDFEFF] flex flex-col items-center justify-center relative overflow-hidden selection:bg-indigo-50">
      
//       {/* --- AESTHETIC BACKGROUND --- */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-[-5%] right-[-5%] w-[500px] h-[500px] bg-purple-50 rounded-full blur-[100px]"></div>
//         <div className="absolute bottom-[-5%] left-[-5%] w-[600px] h-[600px] bg-emerald-50 rounded-full blur-[90px]"></div>
//         <div className="absolute inset-0 opacity-[0.08] pointer-events-none" 
//              style={{ backgroundImage: `linear-gradient(#64748b 1px, transparent 1px), linear-gradient(90deg, #64748b 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
//         </div>
//       </div>

//       {/* --- MAIN CONTENT --- */}
//       <div className="relative z-10 text-center px-6 max-w-6xl py-20">
        
//         {/* Function Badge */}
//         <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-indigo-100 bg-white/80 backdrop-blur-sm shadow-sm">
//           <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
//           <span className="text-indigo-600 text-[10px] font-black uppercase tracking-[0.25em]">
//             AI-ML Powered Fake News Detection System
//           </span>
//         </div>

//         {/* Refined Branding */}
//         <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-[-0.04em] leading-tight mb-4">
//           TRUTH<span className="text-indigo-600">ENGINE</span>
//         </h1>
        
//         {/* Core Purpose Statement */}
//         <h2 className="text-xl md:text-3xl font-bold text-slate-400 tracking-tight mb-8">
//           Advanced Neural Forensics for <br />
//           <span className="text-slate-800">Combatting Digital Misinformation.</span>
//         </h2>

//         <p className="text-base md:text-lg text-slate-500 font-medium max-w-xl mx-auto leading-relaxed mb-10">
//           A high-precision Fake News Detection System utilizing BERT-v4 forensics to deconstruct linguistic patterns and verify news integrity across multiple languages.
//         </p>

//         {/* Action Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
//           <button 
//             onClick={() => navigate('/login')}
//             className="group px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-100 active:scale-95"
//           >
//             <span className="flex items-center gap-2">
//               START ANALYSIS 
//               <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
//               </svg>
//             </span>
//           </button>
          
//           <button className="px-10 py-4 bg-white text-slate-500 border border-slate-200 rounded-2xl font-bold text-sm hover:bg-slate-50 transition-all shadow-sm">
//             DOCUMENTATION
//           </button>
//         </div>

//         {/* --- NEW FEATURES GRID --- */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-16">
//           <FeatureCard 
//             title="News Detection" 
//             desc="Real-time verification of articles against verified global datasets using BERT."
//             icon="🔍"
//           />
//           <FeatureCard 
//             title="Smart Summarization" 
//             desc="Distill lengthy articles into core facts while removing clickbait sensationalism."
//             icon="📝"
//           />
//           <FeatureCard 
//             title="Sentiment Analysis" 
//             desc="Identify emotional bias and polarising language designed to manipulate."
//             icon="🧠"
//           />
//           <FeatureCard 
//             title="Report Generation" 
//             desc="Export detailed forensic PDF reports with accuracy scores and source lineage."
//             icon="📊"
//           />
//           <FeatureCard 
//             title="Multilingual Support" 
//             desc="Neural cross-referencing and verification across different global languages"
//             icon="🌐"
//           />
//           <FeatureCard 
//             title="Forensic Chatbot" 
//             desc="Interact with our neural core to query specific claims within the text."
//             icon="🤖"
//           />
//         </div>

//         {/* Trust Metrics */}
//         <div className="pt-8 border-t border-slate-100 flex justify-center gap-10 md:gap-16 text-slate-400">
//           <div className="text-left">
//             <p className="text-slate-900 font-black text-xl leading-none">91.8%</p>
//             <p className="text-[9px] font-bold uppercase tracking-widest mt-1.5">Model Accuracy</p>
//           </div>
//           <div className="text-left">
//             <p className="text-slate-900 font-black text-xl leading-none">BERT-v4</p>
//             <p className="text-[9px] font-bold uppercase tracking-widest mt-1.5">Neural Core</p>
//           </div>
//           <div className="text-left">
//             <p className="text-slate-900 font-black text-xl leading-none">Global</p>
//             <p className="text-[9px] font-bold uppercase tracking-widest mt-1.5">Source Scans</p>
//           </div>
//         </div>
//       </div>

//       {/* Footer Branding */}
//       <div className="absolute bottom-6 w-full px-10 flex justify-between items-center opacity-30 pointer-events-none">
//         <span className="text-[8px] font-black tracking-[0.4em] uppercase text-slate-500 italic">Integrity Nodes Active</span>
//         <span className="text-[8px] font-black tracking-[0.4em] uppercase text-slate-500">v2.0 Forensic Build</span>
//       </div>
//     </div>
//   );
// };

// /* Helper Component for Features */
// const FeatureCard = ({ title, desc, icon }) => (
//   <div className="p-6 bg-white/50 border border-slate-100 rounded-3xl hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-50/50 transition-all group">
//     <div className="text-2xl mb-4 group-hover:scale-110 transition-transform inline-block">{icon}</div>
//     <h3 className="text-slate-900 font-black text-sm uppercase tracking-wider mb-2">{title}</h3>
//     <p className="text-slate-500 text-xs leading-relaxed font-medium">{desc}</p>
//   </div>
// );

// export default Home;

import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const featuresRef = useRef(null);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100 flex flex-col items-center overflow-x-hidden">
      
      {/* --- HEADER --- */}
      <nav className="fixed top-0 w-full z-50 px-8 py-4 flex justify-between items-center backdrop-blur-md bg-white/90 border-b border-slate-100">
        <div className="flex flex-col items-center cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-slate-900 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <span className="font-black text-xl tracking-tighter text-slate-900 uppercase">
              TRUTH<span className="text-indigo-600">ENGINE</span>
            </span>
          </div>
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-0.5">Verify. Protect. Decide.</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <button onClick={scrollToFeatures} className="text-sm font-bold text-slate-500 hover:text-indigo-600 uppercase tracking-widest transition-colors">Features</button>
          <Link to="/about" className="text-sm font-bold text-slate-500 hover:text-indigo-600 uppercase tracking-widest transition-colors">About Us</Link>
          <Link to="/contact" className="text-sm font-bold text-slate-500 hover:text-indigo-600 uppercase tracking-widest transition-colors">Contact Us</Link>
          <div className="h-5 w-px bg-slate-100 mx-2" />
          <button onClick={() => navigate('/login')} className="text-sm font-black text-slate-900 hover:text-indigo-600 uppercase tracking-widest transition-colors">Login</button>
          <button onClick={() => navigate('/signup')} className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-black rounded-xl hover:bg-slate-900 transition-all shadow-lg shadow-indigo-100 uppercase tracking-widest">Sign Up</button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 w-full flex flex-col items-center text-center">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-slate-900 leading-none mb-4 uppercase">
            TRUTH<span className="text-indigo-600">ENGINE</span>
          </h1>
          <p className="text-lg md:text-2xl font-bold text-slate-400 mb-10 tracking-[0.4em] uppercase">
            Verify. Protect. Decide.
          </p>
          
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 leading-tight mb-6 max-w-3xl mx-auto">
            A High-Precision <span className="text-indigo-600">Fake News Detection System</span> <br />
            Utilizing BERT-v4 Forensics.
          </h2>

          <p className="text-base md:text-lg text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed mb-10">
            Analyze linguistic patterns and verify integrity across **100+ languages**. 
            Integrated with sentiment mapping, smart summarization, and automated forensic reporting.
          </p>

          <div className="flex justify-center mb-16">
            <button onClick={() => navigate('/login')} className="group px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-sm tracking-[0.2em] hover:bg-indigo-600 transition-all shadow-2xl flex items-center gap-4 active:scale-95">
              START FORENSIC SCAN
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Neural Scan Visual */}
        
      </section>

      {/* --- FEATURES GRID --- */}
      <section ref={featuresRef} className="py-20 px-6 bg-slate-50/50 w-full flex flex-col items-center border-t border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.5em] mb-4">Core Intelligence</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16">Unified Forensic Suite</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <FeatureCard title="News Detection" desc="High-precision verification against global datasets using BERT-v4." icon="🔍" />
            <FeatureCard title="Summarization" desc="Distill core facts while removing sensational noise automatically." icon="📝" />
            <FeatureCard title="Sentiment Analysis" desc="Identify emotional triggers designed for narrative manipulation." icon="🧠" />
            <FeatureCard title="Forensic Reporting" desc="Generate verifiable PDF audits with deep source lineage." icon="📊" />
            <FeatureCard title="100+ Languages" desc="Neural cross-referencing across global languages via mBERT." icon="🌐" />
            <FeatureCard title="Neural Chatbot" desc="Interrogate specific claims through our interactive forensic core." icon="🤖" />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="w-full py-12 border-t border-slate-100 flex flex-col items-center gap-6 bg-white">
        <div className="flex gap-10 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
            <Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link>
            <Link to="/api" className="hover:text-indigo-600 transition-colors">Docs</Link>
        </div>
        <p className="text-[8px] font-black tracking-[0.6em] uppercase text-slate-200">
          TRUTHENGINE // Build v2.0 // Neural Nodes Active
        </p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, desc, icon }) => (
  <div className="p-8 bg-white border border-slate-100 rounded-[32px] hover:border-indigo-600 hover:shadow-2xl transition-all group shadow-sm">
    <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{icon}</div>
    <h3 className="text-slate-900 font-black text-lg uppercase tracking-tight mb-2">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed font-medium">{desc}</p>
  </div>
);

export default Home;