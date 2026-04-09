

import React, { useState, useEffect, useRef } from 'react';
import API from '../api';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "System Online. I am the Truth Engine Assistant. How can I help you analyze misinformation today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  useEffect(scrollToBottom, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { text: input, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await API.post('/chatbot', { message: input });
      setMessages(prev => [...prev, { text: response.data.reply, isBot: true }]);
    } catch (err) {
      setMessages(prev => [...prev, { text: "Protocol Error: Unable to reach the neural gateway. Please check your connection.", isBot: true }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-160px)] animate-in fade-in duration-700">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <span className="p-2 bg-slate-900 rounded-lg text-white text-xs">🤖</span>
            <h1 className="text-2xl font-black tracking-tight text-slate-900">AI Investigator</h1>
          </div>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Neural Language Model / Alpha-7</p>
        </div>
        <div className="flex gap-2">
           <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
           <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Live Link</span>
        </div>
      </header>

      {/* Chat Container */}
      <div className="flex-1 bg-white border border-slate-200 rounded-[32px] shadow-sm flex flex-col overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-slate-50 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10"></div>
        
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} animate-in slide-in-from-bottom-2 duration-300`}>
              <div className={`max-w-[75%] p-5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.isBot 
                ? 'bg-slate-50 border border-slate-100 text-slate-700 rounded-tl-none' 
                : 'bg-indigo-600 text-white rounded-tr-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl rounded-tl-none">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-6 bg-slate-50/50 border-t border-slate-100">
          <div className="relative flex items-center group">
            <input 
              className="w-full bg-white border border-slate-200 rounded-2xl py-4 px-6 pr-16 focus:ring-4 focus:ring-indigo-50 focus:border-indigo-400 outline-none transition-all text-sm text-slate-700 shadow-sm"
              placeholder="Query the Truth Engine..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button 
              onClick={sendMessage} 
              disabled={loading}
              className="absolute right-2 p-3 bg-slate-900 text-white rounded-xl hover:bg-indigo-600 transition-all active:scale-95 disabled:opacity-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-300 mt-4 font-bold uppercase tracking-[0.2em]">
            Powered by Generative Forensic Intelligence
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;