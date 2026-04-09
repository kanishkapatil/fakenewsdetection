
import { useEffect } from "react";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import { supabase } from "../supabaseClient";

export default function Dashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  const logout = async () => {
    await supabase.auth.signOut();
    localStorage.removeItem('isAuthenticated');
    navigate("/");
  };

  // Main functional navigation items
  const navItems = [
    { id: "overview", label: "Project Home", icon: "🏠", path: "/dashboard" },
    { id: "predict", label: "News Detection", icon: "🔍", path: "/dashboard/predict" },
    { id: "docintel", label: "DocIntel Scan", icon: "📄", path: "/dashboard/doc-intel" }, // Added DocIntel
    { id: "summarize", label: "Summarization", icon: "📝", path: "/dashboard/summarize" },
    { id: "sentiment", label: "Sentiment", icon: "📊", path: "/dashboard/sentiment" },
    { id: "credibility", label: "Credibility", icon: "🛡️", path: "/dashboard/credibility" },
    { id: "chatbot", label: "AI Chatbot", icon: "🤖", path: "/dashboard/chatbot" },
    { id: "about", label: "About Us", icon: "ⓘ", path: "/dashboard/about" },

  ];

  // Secondary items for the bottom section
  const bottomItems = [
    { id: "history", label: "History", icon: "📜", path: "/dashboard/history" },
  ];

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* --- SIDEBAR --- */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0">
        <div className="p-8">
          <h2 className="text-xl font-black text-slate-900 tracking-tighter">
            TRUTH<span className="text-indigo-500">ENGINE</span>
          </h2>
        </div>

        {/* --- MAIN NAVIGATION --- */}
        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                location.pathname === item.path
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span className="text-lg">{item.icon}</span> {item.label}
            </Link>
          ))}
        </nav>

        {/* --- ACCOUNT & HISTORY SECTION --- */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <p className="px-4 text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Account & Archive</p>
          
          {/* History Moved Here */}
          {bottomItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`w-full flex items-center gap-3 px-4 py-3 mb-1 rounded-xl text-sm font-bold transition-all ${
                location.pathname === item.path
                  ? "bg-white text-indigo-600 shadow-sm border border-slate-100"
                  : "text-slate-500 hover:bg-white hover:text-slate-900"
              }`}
            >
              <span>{item.icon}</span> {item.label}
            </Link>
          ))}

          <button 
            onClick={logout} 
            className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-rose-500 hover:bg-rose-50 rounded-xl transition-all"
          >
            <span>🚪</span> Logout
          </button>
        </div>
      </aside>

      {/* --- CONTENT AREA --- */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-10">
          <Outlet /> 
        </div>
      </main>
    </div>
  );
}