
// import { useState } from "react";
// import { supabase } from "../supabaseClient";
// import { useNavigate, Link } from "react-router-dom";

// function Signup() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setLoading(true);
    
//     const { error } = await supabase.auth.signUp({
//       email,
//       password,
//     });

//     if (error) {
//       alert(error.message);
//     } else {
//       alert("Registration successful. Please check your email for verification.");
//       navigate("/login");
//     }
//     setLoading(false);
//   };

//   const handleSocialSignup = async (provider) => {
//     const { error } = await supabase.auth.signInWithOAuth({
//       provider: provider,
//       options: { redirectTo: window.location.origin + '/dashboard' }
//     });
//     if (error) alert(error.message);
//   };

//   return (
//     <div className="min-h-screen bg-[#FDFEFF] flex items-center justify-center p-6 relative overflow-hidden">
      
//       {/* --- BACKGROUND BLOBS (Consistent with Home/Login) --- */}
//       <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px]"></div>
//       <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-50 rounded-full blur-[100px]"></div>

//       {/* --- SIGNUP CARD --- */}
//       <div className="w-full max-w-md bg-white/70 backdrop-blur-xl border border-slate-200 p-10 rounded-[40px] shadow-2xl shadow-indigo-100/50 relative z-10">
        
//         <header className="mb-8 text-center">
//           <div className="inline-block px-3 py-1 mb-4 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[10px] font-bold uppercase tracking-widest">
//             New Investigator Node
//           </div>
//           <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Create Account</h2>
//           <p className="text-slate-400 text-sm mt-2 font-medium">Join the Truth Engine network</p>
//         </header>

//         <form onSubmit={handleSignup} className="space-y-5">
//           <div className="space-y-1.5">
//             <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
//             <input
//               type="email"
//               placeholder="name@agency.com"
//               className="w-full bg-white border border-slate-200 p-4 rounded-2xl outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 placeholder:text-slate-300 text-sm"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="space-y-1.5">
//             <label className="text-[11px] font-bold text-slate-400 uppercase tracking-widest ml-1">Set Password</label>
//             <input
//               type="password"
//               placeholder="Min. 6 characters"
//               className="w-full bg-white border border-slate-200 p-4 rounded-2xl outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50 transition-all text-slate-700 placeholder:text-slate-300"
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <button 
//             type="submit"
//             disabled={loading}
//             className="w-full py-4 bg-slate-900 hover:bg-emerald-600 text-white rounded-2xl font-bold text-sm tracking-wide shadow-lg shadow-emerald-100 transition-all active:scale-[0.98] disabled:opacity-50 mt-2"
//           >
//             {loading ? "Registering..." : "Initialize Profile"}
//           </button>
//         </form>

//         {/* --- SOCIAL SIGNUP --- */}
//         <div className="mt-8 relative">
//           <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
//           <div className="relative flex justify-center text-[10px] uppercase tracking-[0.2em] font-bold text-slate-300">
//             <span className="bg-white px-4">Register With</span>
//           </div>
//         </div>

//         <div className="mt-6 grid grid-cols-2 gap-4">
//           <button 
//             onClick={() => handleSocialSignup('google')}
//             className="flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
//           >
//             <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt="Google" />
//             <span className="text-xs font-bold text-slate-600">Google</span>
//           </button>

//           <button 
//             onClick={() => handleSocialSignup('github')}
//             className="flex items-center justify-center gap-2 py-3 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all active:scale-95 shadow-sm"
//           >
//             <img src="https://www.svgrepo.com/show/512317/github-142.svg" className="w-4 h-4" alt="Github" />
//             <span className="text-xs font-bold text-slate-600">GitHub</span>
//           </button>
//         </div>

//         <footer className="mt-8 text-center">
//           <p className="text-slate-400 text-xs font-medium">
//             Already have an account? 
//             <Link to="/login" className="text-indigo-500 font-bold ml-1.5 hover:underline">Sign In</Link>
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import { useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Registration successful. Please check your email for verification.");
      navigate("/login");
    }
    setLoading(false);
  };

  const handleSocialSignup = async (provider) => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithOAuth({
      provider: provider,
      options: { redirectTo: window.location.origin + '/dashboard' }
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

      {/* Background Orbs */}
      <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[80px]"></div>
      <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] bg-emerald-50/50 rounded-full blur-[80px]"></div>

      {/* COMPACT SIGNUP CARD */}
      <div className="w-full max-w-[380px] bg-white/80 backdrop-blur-xl border border-slate-200 p-8 rounded-[32px] shadow-xl relative z-10">
        
        <header className="mb-6 text-center">
          <div className="text-lg font-black tracking-tighter text-slate-900 uppercase mb-2">
            TRUTH<span className="text-indigo-600">ENGINE</span>
          </div>
          <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">SignUp/ Register</h3>
          
        </header>

        <form onSubmit={handleSignup} className="space-y-3.5">
          <div className="space-y-2.5">
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full bg-white border border-slate-100 p-3.5 rounded-xl outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50/50 transition-all text-xs font-medium"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password (Min. 6 chars)"
              required
              className="w-full bg-white border border-slate-100 p-3.5 rounded-xl outline-none focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50/50 transition-all text-xs font-medium"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="w-full py-3.5 bg-slate-900 hover:bg-emerald-600 text-white rounded-xl font-black text-[10px] tracking-widest uppercase transition-all shadow-lg disabled:opacity-50 active:scale-[0.98]"
          >
            {loading ? "Initializing..." : "Create Investigator Profile"}
          </button>
        </form>

        <div className="mt-6 relative text-center">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-100"></div></div>
          <span className="relative bg-white px-3 text-[9px] uppercase tracking-[0.2em] font-black text-slate-300">Continue With</span>
        </div>

        {/* CENTERED GOOGLE BUTTON */}
        <div className="mt-5 flex justify-center">
          <button 
            type="button"
            onClick={() => handleSocialSignup('google')}
            className="w-full flex items-center justify-center gap-3 py-3 bg-white border border-slate-100 rounded-xl hover:bg-slate-50 transition-all shadow-sm active:scale-95 group"
          >
            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt="Google" />
            <span className="text-[11px] font-black text-slate-600 uppercase tracking-tight">Google Access</span>
          </button>
        </div>

        <footer className="mt-6 text-center">
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">
            Member already? 
            <Link to="/login" className="text-indigo-500 font-black hover:underline ml-1">Sign In</Link>
          </p>
        </footer>
      </div>

      {/* Minimalist Footer */}
      <div className="absolute bottom-6 w-full text-center opacity-20">
        <p className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-900">
          v2.0 // Secured Registration
        </p>
      </div>
    </div>
  );
}

export default Signup;