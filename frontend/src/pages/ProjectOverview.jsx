
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { supabase } from '../supabaseClient';

// export default function ProjectOverview() {
//   const navigate = useNavigate();
//   const [showProfile, setShowProfile] = useState(false);
//   const [user, setUser] = useState(null);

//   // High-Authority Indian & Global News Agencies (Original Branding)
//   const verifiedAgencies = [
//     { name: 'PTI News', url: 'https://www.ptinews.com', domain: 'ptinews.com' },
//     { name: 'ANI News', url: 'https://www.aninews.in', domain: 'aninews.in' },
//     { name: 'Reuters', url: 'https://www.reuters.com', domain: 'reuters.com' },
//     { name: 'BBC News', url: 'https://www.bbc.com/news', domain: 'bbc.com' },
//     { name: 'The Hindu', url: 'https://www.thehindu.com', domain: 'thehindu.com' },
//     { name: 'Bloomberg', url: 'https://www.bloomberg.com', domain: 'bloomberg.com' }
//   ];

//   useEffect(() => {
//     const getAccountData = async () => {
//       const { data: { user } } = await supabase.auth.getUser();
//       setUser(user);
//     };
//     getAccountData();
//   }, []);

//   return (
//     <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 relative pb-20 px-4 md:px-0">
      
//       {/* --- COMMAND HEADER --- */}
//       <header className="mb-10 flex justify-between items-start">
//         <div>
//           <div className="flex items-center gap-2 mb-1">
//             <span className="relative flex h-3 w-3">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
//             </span>
//             <h1 className="text-4xl font-black text-slate-900 tracking-tight">System Status: Active</h1>
//           </div>
//           <p className="text-slate-500 font-medium ml-5 uppercase text-[11px] tracking-widest italic border-l-2 border-indigo-500 pl-3">
//             Indian Forensic Node: 091-Alpha
//           </p>
//         </div>

//         <div className="relative">
//           <button 
//             onClick={() => setShowProfile(!showProfile)}
//             className="w-12 h-12 bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center text-slate-900 text-xl shadow-sm hover:border-indigo-500 hover:text-indigo-600 transition-all font-black"
//           >
//             {user?.email?.charAt(0).toUpperCase() || "U"}
//           </button>

//           {/* PROFILE DROPDOWN */}
//           {showProfile && (
//             <div className="absolute right-0 mt-4 w-72 bg-white border border-slate-200 rounded-[32px] shadow-2xl z-50 p-6 animate-in zoom-in-95 duration-200">
//               <div className="mb-6">
//                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Analyst Identity</p>
//                 <p className="text-sm font-bold text-slate-900 truncate">{user?.email}</p>
//                 <p className="text-[9px] text-emerald-500 font-black uppercase mt-1">● Session Authenticated</p>
//               </div>
//               <div className="space-y-2 pt-4 border-t border-slate-100">
//                 <button 
//                   onClick={() => navigate('/dashboard/vault')}
//                   className="w-full text-left px-4 py-3 rounded-xl hover:bg-slate-50 text-sm font-bold text-slate-600 flex items-center gap-3 transition-all"
//                 >
//                   <span>📂</span> Access Archive
//                 </button>
//                 <button 
//                   onClick={() => supabase.auth.signOut()}
//                   className="w-full text-left px-4 py-3 rounded-xl hover:bg-rose-50 text-sm font-bold text-rose-500 flex items-center gap-3 transition-colors"
//                 >
//                   <span>🚪</span> Terminate Session
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* --- MISSION BRIEFING --- */}
//       <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-10 rounded-[40px] shadow-sm relative overflow-hidden mb-8">
//         <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-100 rounded-full blur-[100px] -mr-40 -mt-40 opacity-40"></div>
//         <div className="relative z-10">
//           <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2">
//             <span className="w-4 h-px bg-indigo-600"></span> Current Directive
//           </h3>
//           <h2 className="text-3xl font-extrabold text-slate-900 mb-6 max-w-2xl leading-tight">
//             Hybrid Neural Verification of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Regional & Global News</span>.
//           </h2>
//           <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
//             Our diagnostic engine applies **BERT-based linguistic modeling** against real-time signals. The whitelisted agencies below represent the gold-standard baselines for news integrity and cross-lingual fact-checking.
//           </p>
//         </div>
//       </div>

//       {/* --- VERIFIED SOURCES GRID (ORIGINAL COLOR LOGOS) --- */}
//       <section className="bg-white border border-slate-200 p-8 rounded-[40px] shadow-sm mb-8">
//         <div className="flex justify-between items-center mb-8 ml-2">
//           <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-400">Forensic-Grade Verified Sources</h3>
//           <span className="bg-emerald-50 text-emerald-700 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter border border-emerald-100">Whitelisted Active</span>
//         </div>
        
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
//           {verifiedAgencies.map((agency) => (
//             <a 
//               key={agency.name}
//               href={agency.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="group flex flex-col items-center gap-4"
//             >
//               <div className="w-full h-24 bg-white rounded-[28px] flex items-center justify-center p-6 border border-slate-100 shadow-sm group-hover:shadow-xl group-hover:shadow-indigo-500/10 group-hover:border-indigo-200 transition-all duration-300">
//                 <img 
//                   src={`https://logo.clearbit.com/${agency.domain}?size=256`} 
//                   onError={(e) => {
//                     e.target.src = `https://www.google.com/s2/favicons?domain=${agency.domain}&sz=128`;
//                   }}
//                   alt={agency.name} 
//                   className="max-w-full max-h-full object-contain scale-100 group-hover:scale-110 transition-transform duration-500" 
//                 />
//               </div>
//               <span className="text-[9px] font-black text-slate-400 group-hover:text-indigo-600 tracking-widest uppercase transition-colors">{agency.name}</span>
//             </a>
//           ))}
//         </div>
//       </section>

//       {/* --- SYSTEM STATS & LOG NAVIGATION --- */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="p-8 bg-slate-900 rounded-[32px] text-white flex flex-col justify-between min-h-[160px] relative overflow-hidden group">
//           <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
//           <div>
//             <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-1">Detection Precision</p>
//             <p className="text-4xl font-black italic">98.4%</p>
//           </div>
//           <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-4">
//              <div className="bg-gradient-to-r from-indigo-500 to-emerald-500 h-full w-[98.4%]"></div>
//           </div>
//         </div>
        
//         {/* CLICKING THIS OPENS THE NEW PAGE */}
//         <button 
//           onClick={() => navigate('/dashboard/vault')}
//           className="p-8 rounded-[32px] border border-slate-200 bg-white text-slate-600 hover:border-indigo-400 hover:shadow-2xl hover:shadow-indigo-100 transition-all text-left flex flex-col justify-center min-h-[160px] group relative overflow-hidden"
//         >
//           <div className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-50 rounded-full blur-2xl -mr-12 -mb-12 group-hover:bg-indigo-100 transition-all"></div>
//           <p className="font-black text-[10px] uppercase tracking-widest mb-1 text-indigo-600">Archive Vault</p>
//           <p className="text-2xl font-black leading-tight text-slate-900">Forensic Logs</p>
//           <p className="text-[10px] mt-2 font-bold opacity-60 uppercase group-hover:opacity-100 transition-opacity">Open Full History Page →</p>
//         </button>

//         <div className="p-8 bg-white border border-slate-200 rounded-[32px] shadow-sm flex flex-col justify-center min-h-[160px]">
//           <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px] mb-1">Export Logic</p>
//           <p className="text-2xl font-black text-slate-900">FPDF.Engine</p>
//           <p className="text-[10px] text-emerald-500 font-black mt-2 uppercase tracking-tighter flex items-center gap-2">
//             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> System Ready
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }





import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

export default function ProjectOverview() {
  // const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [user, setUser] = useState(null);

  const verifiedAgencies = [
    { name: 'PTI News', url: 'https://www.ptinews.com', domain: 'ptinews.com' },
    { name: 'ANI News', url: 'https://www.aninews.in', domain: 'aninews.in' },
    { name: 'Reuters', url: 'https://www.reuters.com', domain: 'reuters.com' },
    { name: 'BBC News', url: 'https://www.bbc.com/news', domain: 'bbc.com' },
    { name: 'The Hindu', url: 'https://www.thehindu.com', domain: 'thehindu.com' },
    { name: 'Bloomberg', url: 'https://www.bloomberg.com', domain: 'bloomberg.com' }
  ];

  useEffect(() => {
    const getAccountData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getAccountData();
  }, []);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 relative pb-20 px-4 md:px-0">
      
      {/* --- TOP BRANDING BAR --- */}
      
      <div className="flex justify-between items-center mb-2 border-b border-slate-100 pb-6">
        <div className="text-4xl font-black tracking-tighter text-slate-900 uppercase">
          TRUTH<span className="text-indigo-600">ENGINE</span>
          <br></br><span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.3em] mt-0.5">Verify. Protect. Decide.</span>
        </div>
        
      </div>

      {/* --- COMMAND HEADER --- */}
      <header className="mb-7 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-600"></span>
            </span>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">System Status: Active</h1>
          </div>
         
        </div>

        <div className="relative">
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className="w-12 h-12 bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-center text-slate-900 text-xl shadow-sm hover:border-indigo-500 hover:text-indigo-600 transition-all font-black"
          >
            {user?.email?.charAt(0).toUpperCase() || "U"}
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-4 w-72 bg-white border border-slate-200 rounded-[32px] shadow-2xl z-50 p-6 animate-in zoom-in-95 duration-200">
              <div className="mb-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Analyst Identity</p>
                <p className="text-sm font-bold text-slate-900 truncate">{user?.email}</p>
                <p className="text-[9px] text-emerald-500 font-black uppercase mt-1">● Session Authenticated</p>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <button 
                  onClick={() => supabase.auth.signOut()}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-rose-50 text-sm font-bold text-rose-500 flex items-center gap-3 transition-colors"
                >
                  <span>🚪</span> Terminate Session
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* --- MISSION BRIEFING --- */}
      {/* <div className="bg-gradient-to-br from-white to-slate-50 border border-slate-200 p-10 rounded-[40px] shadow-sm relative overflow-hidden mb-8">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-100 rounded-full blur-[100px] -mr-40 -mt-40 opacity-40"></div>
        <div className="relative z-10">
          <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-[10px] mb-4 flex items-center gap-2">
            <span className="w-4 h-px bg-indigo-600"></span> Current Directive
          </h3>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-6 max-w-2xl leading-tight">
            Hybrid Neural Verification of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Regional & Global News</span>.
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-3xl">
            Our diagnostic engine applies **BERT-based linguistic modeling** against real-time signals to detect synthetic patterns.
          </p>
        </div>
      </div> */}

      {/* --- CONDENSED HORIZONTAL MISSION BRIEFING --- */}
<div className="bg-gradient-to-r from-white to-slate-50 border border-slate-200 p-6 rounded-[30px] shadow-sm relative overflow-hidden mb-6 flex flex-col md:flex-row md:items-center gap-6">
  {/* Background glow scaled down and repositioned */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-100 rounded-full blur-[80px] -mr-32 -mt-32 opacity-40"></div>
  
  <div className="relative z-10 flex-shrink-0">
    <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-[9px] flex items-center gap-2">
      <span className="w-4 h-px bg-indigo-600"></span> Current Directive
    </h3>
  </div>

  <div className="relative z-10 flex-1 border-slate-200 md:border-l md:pl-6">
    <h2 className="text-lg font-extrabold text-slate-900 leading-tight mb-1">
      Hybrid Neural Verification of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Regional & Global News</span>.
    </h2>
    <p className="text-slate-500 text-sm leading-normal">
      Our diagnostic engine applies **BERT-based linguistic modeling** against real-time signals to detect synthetic patterns.
    </p>
  </div>
</div>
      
      {/* --- VERIFIED SOURCES GRID --- */}
      <section className="bg-white border border-slate-200 p-8 rounded-[40px] shadow-sm mb-8">
        <div className="flex justify-between items-center mb-5 ml-2">
          <h3 className="text-[11px] font-black uppercase tracking-widest text-slate-900">Explore News</h3>
          <span className="bg-emerald-50 text-emerald-700 text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-tighter border border-emerald-100">Whitelisted Active</span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {verifiedAgencies.map((agency) => (
            <a 
              key={agency.name}
              href={agency.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4"
            >
              <div className="w-full h-24 bg-white rounded-[28px] flex items-center justify-center p-6 border border-slate-100 shadow-sm group-hover:shadow-xl group-hover:shadow-indigo-500/10 group-hover:border-indigo-200 transition-all duration-300">
                <img 
                  src={`https://logo.clearbit.com/${agency.domain}?size=256`} 
                  onError={(e) => {
                    e.target.src = `https://www.google.com/s2/favicons?domain=${agency.domain}&sz=128`;
                  }}
                  alt={agency.name} 
                  className="max-w-full max-h-full object-contain scale-100 group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <span className="text-[9px] font-black text-slate-400 group-hover:text-indigo-600 tracking-widest uppercase transition-colors">{agency.name}</span>
            </a>
          ))}
        </div>
      </section>

{/* --- SYSTEM STATS GRID --- */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  {[
    { label: 'Neural Scans (24h)', val: '12,842', trend: '+12%', icon: '⚡' },
    { label: 'Synthetic Patterns Detected', val: '431', trend: 'High Alert', icon: '🛡️' },
    { label: 'Forensic Confidence Avg.', val: '91.8%', trend: 'Stable', icon: '🎯' }
  ].map((stat, i) => (
    <div key={i} className="bg-white border-2 border-slate-100 p-6 rounded-[30px] shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <span className="text-2xl">{stat.icon}</span>
        <span className={`text-[9px] font-black px-2 py-1 rounded-full ${stat.trend.includes('+') ? 'bg-emerald-50 text-emerald-600' : 'bg-indigo-50 text-indigo-600'}`}>
          {stat.trend}
        </span>
      </div>
      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{stat.label}</p>
      <p className="text-3xl font-black text-slate-900">{stat.val}</p>
    </div>
  ))}
</div>
      
    </div>
  );
}

