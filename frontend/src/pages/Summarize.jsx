
// import React, { useState } from 'react';
// import API from '../api'; // Adjust path as needed

// const Summarize = () => {
//   const [text, setText] = useState('');
//   const [result, setResult] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSummarize = async () => {
//     if (!text.trim()) {
//       setError("Please enter some text to summarize.");
//       return;
//     }

//     setLoading(true);
//     setError('');
//     setResult('');

//     try {
//       // Sending data to your POST /summarize endpoint
//       const response = await API.post('/summarize', { text: text });
//       setResult(response.data.summary); 
//     } catch (err) {
//       setError(err.response?.data?.error || "Backend is unreachable. Check your Flask server.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#0f172a] text-white p-8 font-sans">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
//           AI Text Summarizer
//         </h1>
//         <p className="text-gray-400 mb-8">Condense long articles into bite-sized insights instantly.</p>

//         {/* Input Card - Glassmorphism */}
//         <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl shadow-xl mb-8">
//           <textarea
//             className="w-full h-48 bg-transparent border border-white/10 rounded-xl p-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
//             placeholder="Paste your news article or long text here..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
          
//           {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}

//           <button
//             onClick={handleSummarize}
//             disabled={loading}
//             className={`mt-4 px-8 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-500/20 ${
//               loading 
//               ? "bg-gray-600 cursor-not-allowed" 
//               : "bg-blue-600 hover:bg-blue-500 active:scale-95"
//             }`}
//           >
//             {loading ? "Processing..." : "Summarize Content"}
//           </button>
//         </div>

//         {/* Result Card - Glowing Effect */}
//         {result && (
//           <div className="animate-fade-in bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/30 p-8 rounded-2xl relative">
//             <div className="absolute -top-4 left-6 bg-blue-600 px-3 py-1 rounded text-xs font-bold tracking-widest uppercase">
//               Summary Result
//             </div>
//             <p className="text-gray-200 leading-relaxed text-lg">
//               {result}
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Summarize;




import React, { useState } from 'react';
import API from '../api';

const Summarize = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSummarize = async () => {
    if (!text.trim()) {
      setError("Please enter the analysis payload to condense.");
      return;
    }

    setLoading(true);
    setError('');
    setResult('');

    try {
      const response = await API.post('/summarize', { text: text });
      setResult(response.data.summary); 
    } catch (err) {
      setError(err.response?.data?.error || "Neural pipeline unreachable.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="p-2 bg-cyan-500 rounded-lg text-white text-sm">📝</span>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Neural Summarization</h1>
        </div>
        <p className="text-slate-500 font-medium">Condense extensive articles into forensic-grade intelligence reports.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Input Section */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm relative">
            <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-3 block">
              Source Content
            </label>
            <textarea
              className="w-full h-80 bg-slate-50 border border-slate-200 p-6 rounded-2xl outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-50 transition-all text-slate-700 resize-none text-sm leading-relaxed"
              placeholder="Paste long-form text here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            
            {error && <p className="text-rose-500 mt-3 text-xs font-bold ml-1 uppercase tracking-tighter">{error}</p>}

            <button
              onClick={handleSummarize}
              disabled={loading}
              className={`w-full mt-6 py-4 rounded-2xl font-black text-xs tracking-widest uppercase transition-all shadow-xl shadow-cyan-100 ${
                loading 
                ? "bg-slate-100 text-slate-400 cursor-not-allowed" 
                : "bg-slate-900 text-white hover:bg-cyan-600"
              }`}
            >
              {loading ? "Optimizing Tokens..." : "Initialize Summarization"}
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="relative">
          {result ? (
            <div className="bg-white p-8 rounded-[32px] border border-cyan-100 shadow-xl shadow-cyan-50/50 animate-in zoom-in-95 duration-300 h-full relative overflow-hidden">
              {/* Decorative Background Element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <span className="px-3 py-1 bg-cyan-50 text-cyan-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                    Summary Output
                  </span>
                  <button 
                    onClick={copyToClipboard}
                    className="text-slate-400 hover:text-cyan-500 transition-colors"
                    title="Copy to clipboard"
                  >
                    {copied ? (
                      <span className="text-[10px] font-bold text-emerald-500 uppercase">Copied!</span>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                      </svg>
                    )}
                  </button>
                </div>
                
                <p className="text-slate-600 leading-relaxed text-sm font-medium flex-1 overflow-y-auto">
                  {result}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-50 flex items-center justify-between">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span className="w-2 h-2 rounded-full bg-cyan-200"></span>
                    <span className="w-2 h-2 rounded-full bg-cyan-100"></span>
                  </div>
                  <span className="text-[9px] text-slate-300 font-bold uppercase tracking-widest">
                    LLM-Enhanced Verification
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[400px] border-2 border-dashed border-slate-200 rounded-[32px] flex flex-col items-center justify-center p-12 text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-2xl mb-4 grayscale opacity-50">📑</div>
              <h4 className="text-slate-900 font-bold mb-2">Awaiting Payload</h4>
              <p className="text-xs text-slate-400 leading-relaxed max-w-[200px]">
                Enter text in the primary node to begin extraction.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Summarize;