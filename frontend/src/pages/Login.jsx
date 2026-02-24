
// import { useState } from "react";
// import { supabase } from "../supabaseClient";
// import { useNavigate, Link } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   // REAL LOGIN (Email/Password)
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     const { data, error } = await supabase.auth.signInWithPassword({ email, password });

//     if (error) {
//       alert(error.message);
//     } else if (data?.user) {
//       localStorage.setItem('isAuthenticated', 'true');
//       window.location.href = "/dashboard"; // Using href to force App.js to refresh
//     }
//     setLoading(false);
//   };

//   // DUMMY GOOGLE LOGIN
//   const handleDummyGoogle = () => {
//     setLoading(true);
//     // Simulate a network delay for realism
//     setTimeout(() => {
//       localStorage.setItem('isAuthenticated', 'true');
//       window.location.href = "/dashboard"; 
//     }, 800);
//   };

//   return (
//     <div className="min-h-screen bg-[#FDFEFF] flex items-center justify-center p-6 relative overflow-hidden">
//       {/* Background Orbs */}
//       <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px]"></div>
//       <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[100px]"></div>

//       <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] shadow-2xl relative z-10">
//         <header className="mb-8 text-center">
//           <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Welcome Back</h2>
//           <p className="text-slate-400 text-sm mt-2">Enter credentials or use social access</p>
//         </header>

//         <form onSubmit={handleLogin} className="space-y-5">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full bg-white border border-slate-200 p-4 rounded-2xl outline-none focus:border-indigo-400 transition-all text-sm"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full bg-white border border-slate-200 p-4 rounded-2xl outline-none focus:border-indigo-400 transition-all text-sm"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button 
//             type="submit"
//             className="w-full py-4 bg-slate-900 hover:bg-indigo-600 text-white rounded-2xl font-bold transition-all"
//           >
//             {loading ? "Processing..." : "Sign In"}
//           </button>
//         </form>

//         <div className="mt-8 relative text-center">
//           <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
//           <span className="relative bg-white px-4 text-[10px] uppercase tracking-widest font-bold text-slate-300">Or Continue With</span>
//         </div>

//         {/* --- THE DUMMY BUTTON --- */}
//         <div className="mt-6">
//           <button 
//             type="button"
//             onClick={handleDummyGoogle}
//             className="w-full flex items-center justify-center gap-3 py-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all shadow-sm active:scale-95"
//           >
//             <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
//             <span className="text-sm font-bold text-slate-600">Continue with Google</span>
//           </button>
//         </div>

//         <p className="mt-8 text-center text-xs text-slate-400">
//           New here? <Link to="/signup" className="text-indigo-500 font-bold hover:underline">Create Account</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      alert(error.message);
    } else if (data?.user) {
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = "/dashboard";
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/dashboard'
      }
    });

    if (error) alert(error.message);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#FDFEFF] flex flex-col items-center justify-center p-4 relative overflow-hidden selection:bg-indigo-50">
      
      {/* COMPACT BACK BUTTON */}
      <button 
        onClick={() => navigate('/')} 
        className="absolute top-6 left-6 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-indigo-600 transition-colors group z-20"
      >
        <svg className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back
      </button>

      {/* Background Orbs (Smaller Blur) */}
      <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-emerald-50/50 rounded-full blur-[80px]"></div>

      {/* TIGHTER CONTAINER */}
      <div className="w-full max-w-[380px] bg-white/80 backdrop-blur-xl border border-slate-200 p-8 rounded-[32px] shadow-xl relative z-10">
        <header className="mb-6 text-center">
          <div className="text-lg font-black tracking-tighter text-slate-900 uppercase mb-2">
            TRUTH<span className="text-indigo-600">ENGINE</span>
          </div>
          <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase">Login</h2>
          <p className="text-slate-400 text-[11px] font-bold mt-1 tracking-tight uppercase">Forensic Intelligence Access</p>
        </header>

        <form onSubmit={handleLogin} className="space-y-3.5">
          <div className="space-y-2.5">
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full bg-white border border-slate-100 p-3.5 rounded-xl outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50/50 transition-all text-xs font-medium"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full bg-white border border-slate-100 p-3.5 rounded-xl outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50/50 transition-all text-xs font-medium"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-black text-[10px] tracking-widest uppercase transition-all shadow-lg disabled:opacity-50 active:scale-[0.98]"
          >
            {loading ? "Authenticating..." : "Login"}
          </button>
        </form>

        <div className="mt-6 relative text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
          <span className="relative bg-white px-3 text-[9px] uppercase tracking-[0.2em] font-black text-slate-300">OAuth Gate</span>
        </div>

        {/* --- GOOGLE BUTTON (Smaller) --- */}
        <div className="mt-5">
          <button 
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 py-3 bg-white border border-slate-100 rounded-xl hover:bg-slate-50 transition-all shadow-sm active:scale-95 group"
          >
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt="Google" />
            <span className="text-[11px] font-black text-slate-600 uppercase tracking-tight">Continue with Google</span>
          </button>
        </div>

        <p className="mt-6 text-center text-[10px] text-slate-400 font-bold uppercase tracking-wide">
          New? <Link to="/signup" className="text-indigo-500 font-black hover:underline ml-1">Create Account</Link>
        </p>
      </div>

      {/* Minimalist Footer */}
      <div className="absolute bottom-6 w-full text-center opacity-20">
        <p className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-900">
          v2.0 // Secured Auth
        </p>
      </div>
    </div>
  );
}

export default Login;