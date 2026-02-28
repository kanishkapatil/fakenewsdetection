

import React, { useState } from 'react';
import API from '../api';
import { supabase } from '../supabaseClient';

// --- XAI BREAKDOWN COMPONENT ---
const XAIRationale = ({ text, prediction }) => {
  const getLogic = () => {
    const isClickbait = /shocking|magic|unbelievable|revealed|won't believe/i.test(text);
    const isShort = text.split(' ').length < 15;
    const hasCaps = /[A-Z]{4,}/.test(text);

    return [
      { 
        label: "Linguistic Style", 
        val: isShort ? "Fragmented" : "Descriptive",
        impact: isShort ? "Neutral" : "Positive"
      },
      { 
        label: "Sensationalism", 
        val: isClickbait ? "High Alert" : "Neutral",
        impact: isClickbait ? "Negative" : "Positive"
      },
      { 
        label: "Formatting DNA", 
        val: hasCaps ? "Aggressive" : "Standard",
        impact: hasCaps ? "Negative" : "Neutral"
      }
    ];
  };

  return (
    <div className="bg-slate-900 p-6 rounded-[32px] text-white shadow-2xl shadow-indigo-200/20">
      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
        Neural Logic Breakdown
      </p>
      <div className="space-y-4">
        {getLogic().map((item, i) => (
          <div key={i} className="flex justify-between items-center border-b border-slate-800 pb-3">
            <div>
              <p className="text-[11px] font-bold text-slate-300">{item.label}</p>
              <p className="text-[10px] text-slate-500">{item.val}</p>
            </div>
            <span className={`text-[9px] font-black px-2 py-0.5 rounded ${
              item.impact === 'Negative' ? 'bg-rose-500/20 text-rose-400' : 
              item.impact === 'Positive' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-700 text-slate-400'
            }`}>
              {item.impact === 'Negative' ? '🚩 RISK' : '✅ SAFE'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Predict = () => {
  const [inputText, setInputText] = useState('');
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [scrapeStatus, setScrapeStatus] = useState('');

  const handleScrape = async () => {
    if (!url) return;
    setLoading(true);
    setScrapeStatus('Connecting to source...');
    try {
      const res = await API.post('/scrape', { url });
      setInputText(res.data.text);
      setScrapeStatus('Content synchronized successfully.');
    } catch (err) {
      setScrapeStatus('Scrape failed. Please paste text manually.');
    }
    setLoading(false);
  };

 const handlePredict = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    try {
      // 1. Get Prediction from Flask
      const res = await API.post('/predict', { text: inputText });
      setResult(res.data);

      // 2. CHECK AUTHENTICATION
      const { data: { user }, error: authError } = await supabase.auth.getUser();
      
      if (authError || !user) {
        console.error("AUTH ERROR: Data not stored because no user is logged in.");
        return;
      }

      // 3. ATTEMPT INSERT
      console.log("Attempting to save for User ID:", user.id);
      
      const { error: insertError } = await supabase
        .from('analysis_history')
        .insert([{
          user_id: user.id,
          title: url ? url.split('/')[2] : "Neural Analysis",
          content: inputText,
          verdict: res.data.prediction || "Unknown",
          confidence: parseFloat(res.data.confidence) || 0, // Ensure it's a number
          source_url: url || 'Manual Entry',
          explanation: { logic: "TRUTHENGINE v1.0" }
        }]);
      
      if (insertError) {
        // THIS WILL TELL US THE EXACT PROBLEM
        console.error("SUPABASE INSERT ERROR:", insertError.message);
        console.error("ERROR CODE:", insertError.code);
        alert(`Storage Failed: ${insertError.message}`);
      } else {
        console.log("✅ SUCCESS: Forensic record secured in Supabase.");
      }

    } catch (err) {
      console.error("DIAGNOSTIC ENGINE ERROR:", err);
    } finally {
      setLoading(false);
    }
  };
  const downloadReport = async () => {
    try {
      const response = await API.post('/generate_report', {
        text: inputText,
        prediction: result.prediction,
        confidence: result.confidence,
        keywords: result.top_keywords,
        verdict: result.external_verification?.verdict || "No external match found."
      }, { responseType: 'blob' });

      const blobURL = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = blobURL;
      link.setAttribute('download', `TRUTHENGINE_Report_${Date.now()}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(blobURL);
    } catch (err) {
      alert("Report generation failed.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <header className="mb-12 flex justify-between items-center">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="p-2 bg-indigo-600 rounded-lg text-white">🔍</span>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 uppercase">
                TRUTH<span className="text-indigo-600">ENGINE</span>
              </h1>
            </div>
            <p className="text-slate-500 font-medium italic text-sm">Forensic Analysis & News Integrity Suite</p>
          </div>
          {scrapeStatus && (
            <div className="text-[10px] font-black uppercase text-indigo-500 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100">
              {scrapeStatus}
            </div>
          )}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Input Area */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
              <div className="flex gap-2 mb-4">
                <input 
                  className="flex-grow bg-slate-50 border border-slate-200 p-4 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 transition-all text-sm"
                  placeholder="Paste news URL here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <button 
                  onClick={handleScrape}
                  disabled={loading || !url}
                  className="px-6 bg-white border border-slate-200 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 disabled:opacity-30"
                >
                  Fetch
                </button>
              </div>
              <textarea
                className="w-full h-80 bg-slate-50 border border-slate-200 p-6 rounded-2xl outline-none focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 resize-none text-sm leading-relaxed"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Or paste article content for forensic analysis..."
              />
              <button 
                onClick={handlePredict} 
                disabled={loading}
                className="w-full mt-4 py-5 bg-slate-900 text-white rounded-2xl font-black tracking-widest hover:bg-indigo-600 transition-all uppercase shadow-xl shadow-slate-200"
              >
                {loading ? "Processing Neural Layers..." : "Execute Forensic Check"}
              </button>
            </div>
          </div>

          {/* Results Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {result ? (
              <div className="sticky top-8 space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                
                {/* Score Card */}
                <div className="p-8 bg-white rounded-[32px] border-2 border-slate-100 shadow-xl">
                  <h2 className={`text-6xl font-black mb-4 ${result.prediction === 'Real' ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {result.prediction.toUpperCase()}
                  </h2>
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-[10px] font-black uppercase text-slate-400">
                      <span>Neural Confidence</span>
                      <span>{(result.confidence * 100).toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div 
                        className={`h-full transition-all duration-1000 ${result.prediction === 'Real' ? 'bg-emerald-400' : 'bg-rose-400'}`}
                        style={{ width: `${result.confidence * 100}%` }}
                      />
                    </div>
                  </div>
                  <button onClick={downloadReport} className="w-full py-3 bg-slate-50 text-slate-600 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-slate-100 transition-all">
                    Export Forensic PDF
                  </button>
                </div>

                <XAIRationale text={inputText} prediction={result.prediction} />

                {/* Keyword Pills */}
                <div className="bg-white p-6 rounded-[32px] border border-slate-200 shadow-sm">
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Linguistic Extraction</p>
                  <div className="flex flex-wrap gap-2">
                    {result.top_keywords?.map((word, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold">
                        #{word.toUpperCase()}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              <div className="h-full min-h-[400px] border-2 border-dashed border-slate-200 rounded-[32px] flex flex-col items-center justify-center p-10 text-center opacity-50">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4 text-xl">⏳</div>
                <p className="text-slate-400 font-black uppercase text-[10px] tracking-widest leading-relaxed">
                  Awaiting Input...<br/>Ready for neural evaluation
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predict;