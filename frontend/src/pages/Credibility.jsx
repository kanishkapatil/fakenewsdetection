



import React, { useState } from 'react';
import API from '../api';

const Credibility = () => {
  const [inputText, setInputText] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkCredibility = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    try {
      // Connecting to the core prediction engine
      const response = await API.post('/predict', { text: inputText }); 
      setPrediction(response.data); 
    } catch (err) {
      alert("Credibility server handshake failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <header className="mb-10 text-center lg:text-left">
        <div className="flex items-center gap-3 mb-2 justify-center lg:justify-start">
          <span className="p-2 bg-emerald-600 rounded-lg text-white text-sm">🛡️</span>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Credibility Verifier</h1>
        </div>
        <p className="text-slate-500 font-medium">Cross-referencing linguistic markers against known misinformation patterns.</p>
      </header>

      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Input Card */}
        <div className="bg-white p-8 rounded-[40px] border border-slate-200 shadow-sm text-center">
          <div className="max-w-2xl mx-auto">
            <label className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-6 block">
              Digital Signature Analysis
            </label>
            <input 
              type="text"
              className="w-full bg-slate-50 border-b-2 border-slate-200 p-4 text-xl text-slate-700 focus:border-emerald-500 outline-none mb-8 transition-all text-center placeholder:text-slate-300"
              placeholder="Paste headline or specific claim..."
              onChange={(e) => setInputText(e.target.value)}
            />
            <button 
              onClick={checkCredibility} 
              disabled={loading}
              className="px-12 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100 disabled:opacity-50"
            >
              {loading ? "Scanning Global Database..." : "Verify Credibility"}
            </button>
          </div>
        </div>

        {/* Result Dashboard */}
        {prediction && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in zoom-in-95 duration-500">
            
            {/* Primary Result */}
            <div className={`p-8 rounded-[40px] border-2 flex flex-col items-center justify-center text-center ${
              prediction.prediction === 'Real' 
              ? 'border-emerald-100 bg-emerald-50/30' 
              : 'border-rose-100 bg-rose-50/30'
            }`}>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Final Verdict</span>
              <h2 className={`text-6xl font-black mb-4 ${
                prediction.prediction === 'Real' ? 'text-emerald-500' : 'text-rose-500'
              }`}>
                {prediction.prediction.toUpperCase()}
              </h2>
              <div className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                prediction.prediction === 'Real' ? 'bg-emerald-500 text-white' : 'bg-rose-500 text-white'
              }`}>
                {prediction.prediction === 'Real' ? 'Safe to Distribute' : 'High Risk Content'}
              </div>
            </div>

            {/* Confidence Stats */}
            <div className="bg-white p-8 rounded-[40px] border border-slate-200 flex flex-col justify-center">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Confidence</span>
                  <p className="text-3xl font-black text-slate-900">{(prediction.confidence * 100).toFixed(1)}%</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Integrity Score</span>
                  <p className="text-sm font-bold text-emerald-600">Stable</p>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden mb-4">
                <div 
                  className={`h-full transition-all duration-1000 ${prediction.prediction === 'Real' ? 'bg-emerald-500' : 'bg-rose-500'}`}
                  style={{ width: `${prediction.confidence * 100}%` }}
                />
              </div>
              <p className="text-[10px] text-slate-400 font-medium leading-relaxed italic">
                *Statistical probability based on linguistic variance and metadata cross-checks.
              </p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Credibility;