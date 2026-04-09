

import React, { useState } from 'react';
import API from '../api';

const Sentiment = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const response = await API.post('/sentiment', { text });
      setResult(response.data.sentiment); 
    } catch (err) {
      console.error("Sentiment Engine Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Helper to map sentiment to visuals
  const getSentimentTheme = () => {
    switch (result) {
      case 'Positive': return { color: 'text-emerald-500', bg: 'bg-emerald-50', border: 'border-emerald-100', icon: '😊' };
      case 'Negative': return { color: 'text-rose-500', bg: 'bg-rose-50', border: 'border-rose-100', icon: '😡' };
      default: return { color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-100', icon: '😐' };
    }
  };

  const theme = getSentimentTheme();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="p-2 bg-violet-600 rounded-lg text-white text-sm">📊</span>
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Sentiment Analysis</h1>
        </div>
        <p className="text-slate-500 font-medium">Detect emotional bias and linguistic polarity within the text.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Input Card */}
        <div className="lg:col-span-2">
          <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
            <label className="text-[11px] font-black uppercase tracking-widest text-slate-400 ml-1 mb-3 block">
              Emotional Payload
            </label>
            <textarea 
              className="w-full h-64 bg-slate-50 border border-slate-200 rounded-2xl p-6 focus:border-violet-400 focus:ring-4 focus:ring-violet-50 outline-none transition-all text-sm leading-relaxed text-slate-700 resize-none"
              placeholder="Paste text to decode emotional underlying..."
              onChange={(e) => setText(e.target.value)}
            />
            <button 
              onClick={handleAnalyze} 
              disabled={loading} 
              className="w-full mt-6 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs tracking-[0.2em] uppercase hover:bg-violet-600 transition-all shadow-xl shadow-violet-100 disabled:opacity-50"
            >
              {loading ? "Decoding Emotion..." : "Run Polarity Scan"}
            </button>
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-1">
          {result ? (
            <div className={`p-8 rounded-[32px] border-2 shadow-xl ${theme.border} ${theme.bg} animate-in zoom-in-95 duration-300 text-center sticky top-8`}>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-4">Detected Bias</span>
              
              <div className="text-6xl mb-4">{theme.icon}</div>
              
              <h2 className={`text-4xl font-black mb-2 ${theme.color}`}>
                {result.toUpperCase()}
              </h2>
              
              <p className="text-xs text-slate-500 font-medium mb-8">
                The linguistic structure suggests a <span className="font-bold">{result.toLowerCase()}</span> emotional trajectory.
              </p>

              {/* Simple Polarity Bar */}
              <div className="flex items-center gap-2 px-4">
                <div className={`h-1.5 flex-1 rounded-full ${result === 'Negative' ? theme.color : 'bg-slate-200'}`}></div>
                <div className={`h-1.5 flex-1 rounded-full ${result === 'Neutral' ? theme.color : 'bg-slate-200'}`}></div>
                <div className={`h-1.5 flex-1 rounded-full ${result === 'Positive' ? theme.color : 'bg-slate-200'}`}></div>
              </div>
              <div className="flex justify-between mt-2 text-[9px] font-black text-slate-300 uppercase tracking-tighter px-4">
                <span>Negative</span>
                <span>Neutral</span>
                <span>Positive</span>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[300px] border-2 border-dashed border-slate-200 rounded-[32px] flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-2xl mb-4 grayscale opacity-40">🧠</div>
              <h4 className="text-slate-900 font-bold mb-2 text-sm">Neural Standby</h4>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Waiting for text input to perform multi-class sentiment classification.
              </p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Sentiment;