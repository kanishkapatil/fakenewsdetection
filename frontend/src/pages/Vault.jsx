import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function Vault() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('analysis_history')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });
        setLogs(data || []);
      }
    };
    fetchLogs();
  }, []);

  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-700">
      <header className="mb-8">
        <h1 className="text-3xl font-black text-slate-900">Neural History Vault</h1>
        <p className="text-slate-500 font-medium">Complete forensic archive of all analyzed news metadata.</p>
      </header>

      <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="p-6 text-[10px] font-black uppercase text-slate-400">Verdict</th>
              <th className="p-6 text-[10px] font-black uppercase text-slate-400">Headline Content</th>
              <th className="p-6 text-[10px] font-black uppercase text-slate-400">Confidence</th>
              <th className="p-6 text-[10px] font-black uppercase text-slate-400">Timestamp</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {logs.map((log) => (
              <tr key={log.id} className="hover:bg-slate-50/50 transition-all group">
                <td className="p-6">
                  <span className={`px-3 py-1 rounded-lg text-[9px] font-black uppercase ${log.verdict === 'Real' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                    {log.verdict}
                  </span>
                </td>
                <td className="p-6">
                  <p className="font-bold text-slate-800 text-sm group-hover:text-indigo-600 transition-colors">{log.title}</p>
                </td>
                <td className="p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                      <div className="bg-indigo-500 h-full" style={{width: `${log.confidence * 100}%`}}></div>
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">{Math.round(log.confidence * 100)}%</span>
                  </div>
                </td>
                <td className="p-6 text-[10px] text-slate-400 font-bold uppercase italic">
                  {new Date(log.created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {logs.length === 0 && (
          <div className="p-20 text-center text-slate-400 font-black uppercase text-xs tracking-widest">
            Vault is currently empty
          </div>
        )}
      </div>
    </div>
  );
}
