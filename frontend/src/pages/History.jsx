// import React, { useState, useEffect } from 'react';
// import { supabase } from '../supabaseClient';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';

// export default function History() {
//   const [logs, setLogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [expandedRow, setExpandedRow] = useState(null);

//   useEffect(() => {
//     fetchLogs();
//   }, []);

//   const fetchLogs = async () => {
//     try {
//       setLoading(true);
//       const { data: { user } } = await supabase.auth.getUser();
      
//       if (!user) {
//         console.error("No authenticated user found");
//         return;
//       }

//       const { data, error } = await supabase
//         .from('analysis_history')
//         .select('*')
//         .eq('user_id', user.id)
//         .order('created_at', { ascending: false });
      
//       if (error) throw error;
//       setLogs(data || []);
//     } catch (err) {
//       console.error("Error fetching vault:", err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteLog = async (id) => {
//     if (window.confirm("Permanently delete this forensic record?")) {
//       const { error } = await supabase.from('analysis_history').delete().eq('id', id);
//       if (!error) setLogs(logs.filter(log => log.id !== id));
//     }
//   };

//   const downloadPDF = (log) => {
//     const doc = new jsPDF();
//     doc.setFontSize(18);
//     doc.text("TRUTHENGINE Forensic Report", 14, 22);
//     doc.setFontSize(10);
//     doc.setTextColor(100);
//     doc.text(`ID: ${log.id} | Date: ${new Date(log.created_at).toLocaleString()}`, 14, 30);

//     autoTable(doc, {
//       startY: 40,
//       head: [['Metric', 'Value']],
//       body: [
//         ['Verdict', log.verdict.toUpperCase()],
//         ['Source', log.source_url || 'Manual Input'],
//         ['Content', log.content]
//       ],
//       headStyles: { fillColor: [79, 70, 229], fontStyle: 'bold' },
//       styles: { cellPadding: 5, fontSize: 10, overflow: 'linebreak' }
//     });
//     doc.save(`TRUTHENGINE_Report_${log.id.slice(0, 5)}.pdf`);
//   };

//   return (
//     <div className="p-8 max-w-6xl mx-auto min-h-screen bg-white">
//       {/* Header Section */}
//       <div className="flex justify-between items-end mb-12">
//         <div>
//           <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2">VAULT</h1>
//           <div className="flex items-center gap-2">
//             <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
//             <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
//               {logs.length} Secured Forensic Logs
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Table Area */}
//       <div className="bg-white border border-slate-100 rounded-[32px] shadow-sm overflow-hidden">
//         {loading ? (
//           <div className="py-24 text-center">
//             <div className="inline-block w-8 h-8 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
//             <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Decrypting Records...</p>
//           </div>
//         ) : logs.length === 0 ? (
//           <div className="py-24 text-center">
//             <p className="text-slate-300 font-bold uppercase tracking-widest text-sm">No forensic data found in the archive.</p>
//           </div>
//         ) : (
//           <table className="w-full text-left">
//             <thead>
//               <tr className="bg-slate-50/50 border-b border-slate-100">
//                 <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Status</th>
//                 <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Snippet</th>
//                 <th className="p-6 text-right text-[10px] font-black uppercase text-slate-400 tracking-widest">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-50">
//               {logs.map((log) => (
//                 <React.Fragment key={log.id}>
//                   <tr className="group hover:bg-slate-50 transition-all cursor-pointer" onClick={() => setExpandedRow(expandedRow === log.id ? null : log.id)}>
//                     <td className="p-6">
//                       <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase ${
//                         log.verdict.toLowerCase() === 'real' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
//                       }`}>
//                         ● {log.verdict}
//                       </span>
//                     </td>
//                     <td className="p-6">
//                       <p className="text-sm font-semibold text-slate-700 line-clamp-1 max-w-md">
//                         {log.content}
//                       </p>
//                     </td>
//                     <td className="p-6 text-right">
//                       <div className="flex justify-end gap-3">
//                         <button onClick={(e) => { e.stopPropagation(); downloadPDF(log); }} className="p-2 text-slate-400 hover:text-indigo-600 transition-colors">
//                           📥
//                         </button>
//                         <button onClick={(e) => { e.stopPropagation(); deleteLog(log.id); }} className="p-2 text-slate-400 hover:text-rose-500 transition-colors">
//                           🗑️
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
                  
//                   {/* Expanded Content View */}
//                   {expandedRow === log.id && (
//                     <tr className="bg-slate-50/30">
//                       <td colSpan="3" className="p-8">
//                         <div className="bg-white border border-slate-100 p-6 rounded-2xl shadow-inner">
//                           <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-4">Forensic Breakdown</h4>
//                           <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-wrap">
//                             {log.content}
//                           </p>
//                           {log.source_url && (
//                             <div className="mt-4 pt-4 border-t border-slate-50">
//                               <p className="text-[10px] font-bold text-slate-400 mb-1">SOURCE IDENTIFIED</p>
//                               <a href={log.source_url} target="_blank" rel="noreferrer" className="text-xs text-indigo-500 hover:underline break-all">
//                                 {log.source_url}
//                               </a>
//                             </div>
//                           )}
//                         </div>
//                       </td>
//                     </tr>
//                   )}
//                 </React.Fragment>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function History() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedRow, setExpandedRow] = useState(null);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) return;

      const { data, error } = await supabase
        .from('analysis_history')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setLogs(data || []);
    } catch (err) {
      console.error("Vault Retrieval Error:", err.message);
    } finally {
      setLoading(false);
    }
  };
const deleteLog = async (id) => {
  if (window.confirm("⚠️ Irreversible Action: Purge this forensic record?")) {
    try {
      const { error } = await supabase
        .from('analysis_history')
        .delete()
        .eq('id', id);

      if (error) {
        throw error;
      }

      // Success: Update the local state
      setLogs(logs.filter(log => log.id !== id));
      
      // Optional: Close expanded row if that was the one deleted
      if (expandedRow === id) setExpandedRow(null);

    } catch (err) {
      alert(`Delete failed: ${err.message}`);
      console.error("Purge Error:", err);
    }
  }
};

  const downloadPDF = (log) => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("TRUTHENGINE FORENSIC REPORT", 14, 20);
    
    doc.setFontSize(10);
    doc.setTextColor(150);
    doc.text(`Record ID: ${log.id}`, 14, 30);
    doc.text(`Timestamp: ${new Date(log.created_at).toLocaleString()}`, 14, 35);

    autoTable(doc, {
      startY: 45,
      head: [['Forensic Metric', 'Neural Evaluation']],
      body: [
        ['Verdict Status', log.verdict.toUpperCase()],
        ['Neural Confidence', `${(log.confidence * 100).toFixed(2)}%`],
        ['Source Origin', log.source_url || 'Manual Entry'],
        ['Analyzed Content', log.content]
      ],
      headStyles: { fillColor: [79, 70, 229], fontStyle: 'bold' },
      styles: { cellPadding: 6, fontSize: 10, overflow: 'linebreak' },
      columnStyles: { 0: { fontStyle: 'bold', width: 40 } }
    });

    doc.save(`TRUTHENGINE_Report_${log.id.slice(0, 8)}.pdf`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 p-8 font-sans animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="flex justify-between items-end mb-12 border-b border-slate-100 pb-8">
          <div>
            <h1 className="text-4xl font-black tracking-tighter text-slate-900 mb-2">
              THE <span className="text-indigo-600">VAULT</span>
            </h1>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              {logs.length} Archived Intelligence Records
            </p>
          </div>
          <button 
            onClick={fetchLogs}
            className="p-3 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all text-sm"
            title="Sync Vault"
          >
            🔄
          </button>
        </div>

        {/* DATA GRID */}
        <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-sm">
          {loading ? (
            <div className="py-32 text-center">
              <div className="inline-block w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Decrypting Archives...</p>
            </div>
          ) : logs.length === 0 ? (
            <div className="py-32 text-center bg-slate-50/50">
              <p className="text-slate-400 font-bold uppercase tracking-widest text-xs italic">No forensic records detected in the neural cloud.</p>
            </div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/80 border-b border-slate-200">
                  <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Verdict</th>
                  <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Intelligence Preview</th>
                  <th className="p-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">Confidence</th>
                  <th className="p-6 text-right text-[10px] font-black uppercase text-slate-400 tracking-widest">Forensic Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {logs.map((log) => (
                  <React.Fragment key={log.id}>
                    <tr 
                      className={`hover:bg-slate-50/80 transition-all cursor-pointer ${expandedRow === log.id ? 'bg-indigo-50/30' : ''}`}
                      onClick={() => setExpandedRow(expandedRow === log.id ? null : log.id)}
                    >
                      <td className="p-6">
                        <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase border ${
                          log.verdict === 'Real' ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-rose-50 text-rose-600 border-rose-100'
                        }`}>
                          {log.verdict}
                        </span>
                      </td>
                      <td className="p-6">
                        <p className="font-bold text-slate-800 text-xs line-clamp-1 max-w-xs">
                          {log.content}
                        </p>
                        <p className="text-[9px] text-slate-400 font-medium mt-1 uppercase tracking-tighter">
                          {new Date(log.created_at).toLocaleDateString()}
                        </p>
                      </td>
                      <td className="p-6">
                        <div className="flex items-center gap-2">
                          <div className="w-12 bg-slate-200 h-1 rounded-full overflow-hidden">
                            <div 
                              className="bg-indigo-500 h-full" 
                              style={{ width: `${(log.confidence || 0) * 100}%` }}
                            />
                          </div>
                          <span className="text-[10px] font-black text-slate-500">{(log.confidence * 100).toFixed(0)}%</span>
                        </div>
                      </td>
                      <td className="p-6">
                        <div className="flex justify-end gap-2" onClick={e => e.stopPropagation()}>
                          <button onClick={() => downloadPDF(log)} className="p-2.5 bg-white border border-slate-200 rounded-xl hover:border-indigo-500 hover:text-indigo-600 transition-all shadow-sm">
                            📥
                          </button>
                          <button onClick={() => deleteLog(log.id)} className="p-2.5 bg-white border border-slate-200 rounded-xl hover:border-rose-500 hover:text-rose-600 transition-all shadow-sm">
                            🗑️
                          </button>
                        </div>
                      </td>
                    </tr>
                    
                    {/* EXPANDED CONTENT SECTION */}
                    {expandedRow === log.id && (
                      <tr className="bg-slate-50/50">
                        <td colSpan="4" className="p-8 animate-in slide-in-from-top-2 duration-300">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="md:col-span-2 space-y-4">
                              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-inner">
                                <h4 className="text-[10px] font-black uppercase text-indigo-500 mb-3 tracking-widest">Analyzed Text Body</h4>
                                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                                  {log.content}
                                </p>
                              </div>
                              {log.source_url && (
                                <div className="text-[10px] font-bold text-slate-400 bg-white border border-slate-200 p-3 rounded-xl inline-block">
                                  🔗 SOURCE IDENTIFIED: <span className="text-indigo-500 break-all">{log.source_url}</span>
                                </div>
                              )}
                            </div>
                            
                            <div className="space-y-4">
                              <div className="bg-slate-900 p-6 rounded-2xl text-white shadow-xl">
                                <h4 className="text-[9px] font-black uppercase text-indigo-400 mb-4 tracking-widest">Neural Parameters</h4>
                                <div className="space-y-3">
                                  <div className="flex justify-between border-b border-slate-800 pb-2">
                                    <span className="text-[10px] text-slate-400">Model Version</span>
                                    <span className="text-[10px] font-bold">TRUTHENGINE v1.0</span>
                                  </div>
                                  <div className="flex justify-between border-b border-slate-800 pb-2">
                                    <span className="text-[10px] text-slate-400">Analysis Mode</span>
                                    <span className="text-[10px] font-bold">NLP / Forensics</span>
                                  </div>
                                  <div className="flex justify-between border-b border-slate-800 pb-2">
                                    <span className="text-[10px] text-slate-400">Export Ready</span>
                                    <span className="text-[10px] font-bold text-emerald-400">YES</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}