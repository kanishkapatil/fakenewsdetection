



// import React, { useState } from 'react';
// import API from '../api';
// import { supabase } from '../supabaseClient';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';

// const DocIntel = () => {
//   const [file, setFile] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [result, setResult] = useState(null);
//   const [status, setStatus] = useState('');
//   const [previewUrl, setPreviewUrl] = useState(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setResult(null);
//       setStatus('');
//       if (selectedFile.type.startsWith('image/')) {
//         setPreviewUrl(URL.createObjectURL(selectedFile));
//       } else {
//         setPreviewUrl(null);
//       }
//     }
//   };

//   const processDocument = async () => {
//     if (!file) return;
//     setIsProcessing(true);
//     setStatus('SCANNING...');

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const res = await API.post('/api/doc-intel', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });

//       setResult(res.data);
//       setStatus('COMPLETE');

//       const { data: { user } } = await supabase.auth.getUser();
//       if (user) {
//         await supabase.from('analysis_history').insert([{
//           user_id: user.id,
//           title: `SCAN: ${file.name.substring(0, 20)}`,
//           content: res.data.extracted_text,
//           verdict: res.data.prediction,
//           confidence: res.data.confidence,
//           source_url: 'Uploaded Document'
//         }]);
//       }
//     } catch (err) {
//       console.error("Scan Error:", err);
//       setStatus('ERROR: SERVER UNREACHABLE');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   const downloadPDF = () => {
//     if (!result) return;
//     const doc = new jsPDF();
//     doc.setFontSize(22);
//     doc.text("FORENSIC REPORT", 14, 22);
//     autoTable(doc, {
//       startY: 35,
//       head: [['Metric', 'Evaluation']],
//       body: [
//         ['Verdict', result.prediction.toUpperCase()],
//         ['Confidence', `${(result.confidence * 100).toFixed(2)}%`],
//         ['Keywords', result.top_keywords?.join(', ') || 'None'],
//         ['Content', result.extracted_text]
//       ],
//       headStyles: { fillColor: [30, 41, 59] }
//     });
//     doc.save(`Scan_Report_${Date.now()}.pdf`);
//   };

//   return (
//     <div className="min-h-screen bg-[#FDFDFD] p-6 font-sans text-slate-900">
//       <div className="max-w-3xl mx-auto">
        
//         {/* UPDATED HEADER */}
//         <header className="mb-8 text-center">
//           <h1 className="text-2xl font-black tracking-tight text-slate-900 mb-1 capitalize">
//             Scan Files and Documents
//           </h1>
//           <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
//             Professional Forensic Verification
//           </p>
//         </header>

//         {/* SMALL BOX UPLOAD TERMINAL */}
//         <div className="bg-white border border-slate-200 rounded-[24px] p-6 shadow-sm mb-6 max-w-xl mx-auto">
//           <div className={`relative group border border-dashed rounded-[16px] transition-all duration-300 ${file ? 'border-indigo-400 bg-indigo-50/20' : 'border-slate-300 bg-slate-50/50'}`}>
//             <input type="file" id="file-upload" hidden accept=".pdf, .png, .jpg, .jpeg" onChange={handleFileChange} />
//             <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center py-8 px-4">
//               {previewUrl ? (
//                 <img src={previewUrl} alt="Preview" className="max-h-32 rounded-lg shadow-md border-2 border-white" />
//               ) : (
//                 <div className="text-center">
//                   <div className="text-2xl mb-2 opacity-40">📄</div>
//                   <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
//                     {file ? file.name : "Select Document"}
//                   </p>
//                 </div>
//               )}
//             </label>
//           </div>
          
//           <button 
//             onClick={processDocument}
//             disabled={!file || isProcessing}
//             className="w-full mt-4 py-3 bg-slate-900 text-white rounded-xl font-bold text-[10px] uppercase tracking-widest transition-all hover:bg-indigo-600 disabled:opacity-20 shadow-lg"
//           >
//             {isProcessing ? "PROCESSING..." : "RUN ANALYSIS"}
//           </button>

//           {status && (
//             <p className="text-center text-[9px] font-black text-indigo-500 uppercase mt-3 tracking-widest animate-pulse">
//               {status}
//             </p>
//           )}
//         </div>

//         {/* OUTPUT SECTION */}
//         {result && (
//           <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
            
//             {/* VERDICT BOX */}
//             <div className="bg-white border border-slate-200 p-6 rounded-[24px] shadow-sm flex items-center justify-between">
//               <div>
//                 <p className="text-[9px] font-black uppercase text-slate-400 mb-1 tracking-widest">RESULT:</p>
//                 <h2 className={`text-4xl font-black italic tracking-tighter ${result.prediction === 'Real' ? 'text-emerald-500' : 'text-rose-500'}`}>
//                   {result.prediction.toUpperCase()}
//                 </h2>
//                 <div className="mt-4 flex items-center gap-3">
//                     <span className="text-[10px] font-bold text-slate-500">CONFIDENCE:</span>
//                     <span className="text-[10px] font-black text-slate-900">{(result.confidence * 100).toFixed(1)}%</span>
//                 </div>
//               </div>
//               <button 
//                 onClick={downloadPDF}
//                 className="px-5 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl font-bold text-[9px] uppercase tracking-widest hover:bg-indigo-50 hover:text-indigo-600 transition-all"
//               >
//                 Export Report
//               </button>
//             </div>

//             {/* WHITE BOX KEYWORDS */}
//             <div className="bg-white border border-slate-200 p-6 rounded-[24px] shadow-sm">
//               <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-4">Linguistic Indicators</p>
//               <div className="flex flex-wrap gap-2">
//                 {result.top_keywords?.map((kw, idx) => (
//                   <span key={idx} className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-[10px] font-bold text-slate-600 uppercase tracking-wider shadow-sm">
//                     #{kw}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* CONTENT MANIFEST */}
//             <div className="bg-white border border-slate-200 rounded-[24px] overflow-hidden shadow-sm">
//               <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
//                 <p className="text-[9px] font-black uppercase tracking-widest text-slate-500">Extracted Text Stream</p>
//               </div>
//               <div className="p-6">
//                 <div className="bg-slate-50/30 rounded-xl p-4 border border-slate-100 max-h-48 overflow-y-auto">
//                   <p className="text-xs text-slate-600 leading-relaxed font-serif whitespace-pre-wrap italic">
//                     "{result.extracted_text}"
//                   </p>
//                 </div>
//               </div>
//             </div>

//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DocIntel;





// import React, { useState } from 'react';
// import API from '../api';
// import { supabase } from '../supabaseClient';
// import jsPDF from 'jspdf';
// import autoTable from 'jspdf-autotable';

// const DocIntel = () => {
//   const [file, setFile] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [result, setResult] = useState(null);
//   const [status, setStatus] = useState('');
//   const [previewUrl, setPreviewUrl] = useState(null);

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setResult(null);
//       setStatus('');
//       if (selectedFile.type.startsWith('image/')) {
//         setPreviewUrl(URL.createObjectURL(selectedFile));
//       } else {
//         setPreviewUrl(null);
//       }
//     }
//   };

//   const processDocument = async () => {
//     if (!file) return;
//     setIsProcessing(true);
//     setStatus('Initializing Neural Scan...');

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const res = await API.post('/api/doc-intel', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });

//       setResult(res.data);
//       setStatus('Scan Synchronized.');

//       const { data: { user } } = await supabase.auth.getUser();
//       if (user) {
//         await supabase.from('analysis_history').insert([{
//           user_id: user.id,
//           title: `SCAN: ${file.name.substring(0, 20)}`,
//           content: res.data.extracted_text,
//           verdict: res.data.prediction,
//           confidence: res.data.confidence,
//           source_url: 'Uploaded Document'
//         }]);
//       }
//     } catch (err) {
//       console.error("Scan Error:", err);
//       setStatus('Neural Link Failure.');
//     } finally {
//       setIsProcessing(false);
//     }
//   };

//   const downloadPDF = () => {
//     if (!result) return;
//     const doc = new jsPDF();
//     doc.setFontSize(22);
//     doc.setTextColor(30, 41, 59);
//     doc.text("TRUTHENGINE: FORENSIC REPORT", 14, 22);
    
//     const tableRes = autoTable(doc, {
//       startY: 35,
//       head: [['Metric', 'Evaluation']],
//       body: [
//         ['Verdict', result.prediction.toUpperCase()],
//         ['Confidence', `${(result.confidence * 100).toFixed(2)}%`],
//         ['Keywords', result.top_keywords?.join(', ') || 'None'],
//         ['Content', result.extracted_text]
//       ],
//       headStyles: { fillColor: [79, 70, 229] }
//     });
//     doc.save(`Forensic_Report_${Date.now()}.pdf`);
//   };

//   return (
//     <div className="min-h-screen bg-slate-50 text-slate-900 p-8 font-sans">
//       <div className="max-w-4xl mx-auto">
        
//         {/* HEADER SECTION */}
//         <header className="mb-12 flex justify-between items-end">
//           <div>
//             <h1 className="text-4xl font-black tracking-tight text-slate-900">
//               DOC<span className="text-indigo-600">INTEL</span>
//             </h1>
//             <p className="text-sm font-bold uppercase tracking-widest text-slate-400 mt-1">
//               Automated Forensic Verification
//             </p>
//           </div>
//           <div className="text-right">
//              <span className={`text-[10px] font-black px-3 py-1 rounded-full border ${status.includes('ERROR') ? 'bg-rose-50 border-rose-200 text-rose-500' : 'bg-indigo-50 border-indigo-200 text-indigo-600'}`}>
//                 {status || "SYSTEM READY"}
//              </span>
//           </div>
//         </header>

//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
//           {/* UPLOAD TERMINAL (LEFT) */}
//           <div className="md:col-span-5">
//             <div className="bg-white border border-slate-200 rounded-[32px] p-6 shadow-xl shadow-slate-200/50">
//               <div className={`relative group border-2 border-dashed rounded-[24px] transition-all duration-500 overflow-hidden ${file ? 'border-indigo-400 bg-indigo-50/30' : 'border-slate-200 bg-slate-50/50'}`}>
//                 <input type="file" id="file-upload" hidden accept=".pdf, .png, .jpg, .jpeg" onChange={handleFileChange} />
//                 <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center py-12 px-6 text-center">
//                   {previewUrl ? (
//                     <img src={previewUrl} alt="Preview" className="max-h-48 rounded-xl shadow-2xl border-4 border-white transform group-hover:scale-105 transition-transform" />
//                   ) : (
//                     <div>
//                       <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-4 text-3xl group-hover:-translate-y-1 transition-transform">
//                         📄
//                       </div>
//                       <p className="text-xs font-black text-slate-600 uppercase tracking-widest">
//                         {file ? file.name : "Inject Document"}
//                       </p>
//                       <p className="text-[10px] text-slate-400 mt-2 uppercase">PDF, PNG, JPG (MAX 10MB)</p>
//                     </div>
//                   )}
//                 </label>
//               </div>
              
//               <button 
//                 onClick={processDocument}
//                 disabled={!file || isProcessing}
//                 className="w-full mt-6 py-4 bg-indigo-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all hover:bg-slate-900 disabled:opacity-30 shadow-lg shadow-indigo-100"
//               >
//                 {isProcessing ? "ANALYZING NEURAL DATA..." : "RUN FORENSIC SCAN"}
//               </button>
//             </div>
//           </div>

//           {/* RESULTS DASHBOARD (RIGHT) */}
//           <div className="md:col-span-7">
//             {!result ? (
//               <div className="h-full border-2 border-dashed border-slate-200 rounded-[32px] flex flex-col items-center justify-center p-12 text-slate-300">
//                 <div className="text-5xl mb-4">🔬</div>
//                 <p className="font-bold uppercase tracking-widest text-[11px]">Awaiting Data Injection</p>
//               </div>
//             ) : (
//               <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-700">
                
//                 {/* VERDICT CARD */}
//                 <div className="bg-white border border-slate-200 p-8 rounded-[32px] shadow-sm relative overflow-hidden">
//                   <div className="absolute top-0 right-0 p-6">
//                      <button onClick={downloadPDF} className="p-3 bg-slate-50 rounded-xl hover:bg-indigo-50 text-indigo-600 transition-colors border border-slate-100">
//                         📥
//                      </button>
//                   </div>
                  
//                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Neural Verdict</p>
//                   <h2 className={`text-6xl font-black italic tracking-tighter ${result.prediction === 'Real' ? 'text-emerald-500' : 'text-rose-500'}`}>
//                     {result.prediction.toUpperCase()}
//                   </h2>

//                   <div className="mt-8 space-y-3">
//                     <div className="flex justify-between items-end">
//                        <span className="text-[10px] font-black text-slate-400 uppercase">Forensic Confidence</span>
//                        <span className="text-lg font-black text-slate-900">{(result.confidence * 100).toFixed(1)}%</span>
//                     </div>
//                     <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
//                        <div 
//                         className={`h-full transition-all duration-1000 ease-out ${result.prediction === 'Real' ? 'bg-emerald-400' : 'bg-rose-400'}`}
//                         style={{ width: `${result.confidence * 100}%` }}
//                        />
//                     </div>
//                   </div>
//                 </div>

//                 {/* KEYWORDS */}
//                 <div className="bg-white border border-slate-200 p-6 rounded-[32px] shadow-sm">
//                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Structural Indicators</p>
//                   <div className="flex flex-wrap gap-2">
//                     {result.top_keywords?.map((kw, idx) => (
//                       <span key={idx} className="px-4 py-2 bg-indigo-50/50 border border-indigo-100 text-indigo-600 rounded-xl text-[10px] font-bold uppercase">
//                         #{kw}
//                       </span>
//                     ))}
//                   </div>
//                 </div>

//                 {/* TEXT STREAM */}
//                 <div className="bg-slate-900 border border-slate-800 p-6 rounded-[32px] shadow-2xl">
//                   <div className="flex items-center gap-2 mb-4">
//                     <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
//                     <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Extracted Content Manifest</p>
//                   </div>
//                   <div className="max-h-40 overflow-y-auto pr-2 custom-scrollbar">
//                     <p className="text-xs text-slate-300 leading-relaxed font-mono opacity-80 whitespace-pre-wrap">
//                       {result.extracted_text}
//                     </p>
//                   </div>
//                 </div>

//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DocIntel;




import React, { useState } from 'react';
import API from '../api';
import { supabase } from '../supabaseClient';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const DocIntel = () => {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);
  const [status, setStatus] = useState('');
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setResult(null);
      setStatus('');
      if (selectedFile.type.startsWith('image/')) {
        setPreviewUrl(URL.createObjectURL(selectedFile));
      } else {
        setPreviewUrl(null);
      }
    }
  };

  const processDocument = async () => {
    if (!file) return;
    setIsProcessing(true);
    setStatus('Initializing Neural Scan...');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await API.post('/api/doc-intel', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setResult(res.data);
      setStatus('Scan Synchronized.');

      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('analysis_history').insert([{
          user_id: user.id,
          title: `SCAN: ${file.name.substring(0, 20)}`,
          content: res.data.extracted_text,
          verdict: res.data.prediction,
          confidence: res.data.confidence,
          source_url: 'Uploaded Asset'
        }]);
      }
    } catch (err) {
      console.error("Scan Error:", err);
      setStatus('Neural Link Failure.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadPDF = () => {
    if (!result) return;
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("TRUTHENGINE: FORENSIC REPORT", 14, 22);
    autoTable(doc, {
      startY: 35,
      head: [['Metric', 'Evaluation']],
      body: [
        ['Verdict', result.prediction.toUpperCase()],
        ['Confidence', `${(result.confidence * 100).toFixed(2)}%`],
        ['Keywords', result.top_keywords?.join(', ') || 'None'],
        ['Content', result.extracted_text]
      ],
      headStyles: { fillColor: [30, 41, 59] }
    });
    doc.save(`Scan_Report_${Date.now()}.pdf`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <header className="mb-12 flex justify-between items-end">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="p-2 bg-slate-900 rounded-lg text-white">🛡️</span>
              <h1 className="text-3xl font-black tracking-tighter text-slate-900 uppercase">
                DOC<span className="text-indigo-600">INTEL</span>
              </h1>
            </div>
            <p className="text-slate-500 font-medium italic text-sm">Automated Document Forensics</p>
          </div>
          <div className="text-right">
             <span className={`text-[10px] font-black px-4 py-2 rounded-full border-2 ${status.includes('ERROR') ? 'bg-rose-50 border-rose-200 text-rose-500' : 'bg-white border-slate-200 text-slate-400'}`}>
                {status || "SYSTEM IDLE"}
             </span>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* UPLOAD TERMINAL (LEFT) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border-2 border-slate-100 p-8 rounded-[40px] shadow-xl shadow-slate-200/50">
              <div className={`relative group border-2 border-dashed rounded-[32px] transition-all duration-500 overflow-hidden ${file ? 'border-indigo-400 bg-indigo-50/20' : 'border-slate-300 bg-slate-50'}`}>
                <input type="file" id="file-upload" hidden accept=".pdf, .png, .jpg, .jpeg" onChange={handleFileChange} />
                <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center justify-center py-20 px-6 text-center">
                  {previewUrl ? (
                    <div className="relative">
                      <img src={previewUrl} alt="Preview" className="max-h-64 rounded-2xl shadow-2xl border-2 border-white transform group-hover:scale-[1.02] transition-transform" />
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="w-20 h-20 bg-white border-2 border-slate-800 rounded-3xl flex items-center justify-center mx-auto text-4xl shadow-sm">📄</div>
                      <div>
                        <p className="text-sm font-black text-slate-800 uppercase tracking-widest">
                          {file ? file.name : "Inject Asset"}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-2 font-bold uppercase">Click to browse forensic documents</p>
                      </div>
                    </div>
                  )}
                </label>
              </div>
              
              <button 
                onClick={processDocument}
                disabled={!file || isProcessing}
                className={`w-full mt-8 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl
                  ${isProcessing ? 'bg-slate-100 text-slate-400' : 'bg-slate-900 text-white hover:bg-slate-800 active:scale-95'}`}
              >
                {isProcessing ? "Analyzing Neural Layers..." : "Execute Forensic Scan"}
              </button>
            </div>

            {/* EXTRACTED TEXT (White Background Version) */}
            {result && (
              <div className="bg-white border-2 border-slate-800 p-8 rounded-[40px] shadow-sm animate-in slide-in-from-bottom-8 duration-700">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-slate-400"></div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Extracted Content Manifest</p>
                </div>
                <div className="max-h-64 overflow-y-auto pr-2 custom-scrollbar">
                  <p className="text-xs text-slate-700 leading-relaxed font-mono whitespace-pre-wrap">
                    {result.extracted_text}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* RESULTS SIDEBAR (RIGHT) */}
          <div className="lg:col-span-5 space-y-6">
            {!result ? (
              <div className="h-full min-h-[500px] border-2 border-dashed border-slate-300 rounded-[40px] flex flex-col items-center justify-center p-12 text-center opacity-40">
                <div className="text-6xl mb-6">🔬</div>
                <p className="text-slate-500 font-black uppercase text-[11px] tracking-widest leading-relaxed">
                  Awaiting Data Injection...<br/>Ready for neural evaluation
                </p>
              </div>
            ) : (
              <div className="sticky top-8 space-y-6 animate-in fade-in slide-in-from-right-8 duration-700">
                
                {/* Score Card */}
                <div className="p-10 bg-white rounded-[40px] border-2 border-slate-800 shadow-xl relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-6">
                      <button onClick={downloadPDF} className="p-3 bg-slate-100 rounded-xl hover:bg-slate-200 border border-slate-300">
                        📥
                      </button>
                   </div>
                  
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Neural Verdict</p>
                  <h2 className={`text-7xl font-black italic tracking-tighter ${result.prediction === 'Real' ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {result.prediction.toUpperCase()}
                  </h2>

                  <div className="mt-8 space-y-4">
                    <div className="flex justify-between items-end">
                       <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Confidence Integrity</span>
                       <span className="text-2xl font-black text-slate-900">{(result.confidence * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden border border-slate-200 p-0.5">
                       <div 
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${result.prediction === 'Real' ? 'bg-emerald-500' : 'bg-rose-500'}`}
                        style={{ width: `${result.confidence * 100}%` }}
                       />
                    </div>
                  </div>
                </div>

                {/* Keyword Markers */}
                <div className="bg-white p-8 rounded-[40px] border-2 border-slate-800 shadow-sm">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 underline decoration-slate-800 underline-offset-8">Structural Indicators</p>
                  <div className="flex flex-wrap gap-2">
                    {result.top_keywords?.map((kw, idx) => (
                      <span key={idx} className="px-5 py-2.5 bg-slate-100 text-slate-800 rounded-2xl text-[10px] font-black uppercase border border-slate-200">
                        #{kw}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocIntel;