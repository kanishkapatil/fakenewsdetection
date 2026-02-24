import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';

const HistorySidebar = ({ refreshTrigger }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data, error } = await supabase
      .from('analysis_history')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) console.error("Error fetching history:", error.message);
    else setHistory(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchHistory();
  }, [refreshTrigger]); // Re-runs when refreshTrigger changes

  return (
    <div className="w-full h-full bg-slate-50 border-r border-slate-200 p-4 overflow-y-auto">
      <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">Forensic Library</h3>
      
      {loading ? (
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map(i => <div key={i} className="h-20 bg-slate-200 rounded-2xl" />)}
        </div>
      ) : (
        <div className="space-y-3">
          {history.map((item) => (
            <div key={item.id} className="p-4 bg-white border border-slate-200 rounded-2xl hover:shadow-md transition-all cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <span className={`text-[8px] font-black px-2 py-0.5 rounded uppercase ${
                  item.verdict === 'Real' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                }`}>
                  {item.verdict}
                </span>
                <span className="text-[9px] text-slate-400 font-medium">
                  {new Date(item.created_at).toLocaleDateString()}
                </span>
              </div>
              <p className="text-xs font-bold text-slate-800 line-clamp-2">{item.title || "Untitled Analysis"}</p>
              <p className="text-[10px] text-slate-400 mt-1">{Math.round(item.confidence * 100)}% Confidence</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HistorySidebar;