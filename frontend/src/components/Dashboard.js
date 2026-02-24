// import React from "react";
// import {
//   BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer
// } from "recharts";
// import { motion } from "framer-motion";

// const Dashboard = ({ result, sentiment }) => {
//   if (!result) return null;

//   const confidenceData = [
//     { name: "Fake", value: result.prediction === "Fake" ? result.confidence : 1 - result.confidence },
//     { name: "Real", value: result.prediction === "Real" ? result.confidence : 1 - result.confidence }
//   ];

//   const keywordData = result.top_keywords.map(k => ({
//     keyword: k,
//     score: Math.random() * 100 // visual weight (TF-IDF inspired)
//   }));

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 40 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className="dashboard"
//     >
//       <h2>📊 Analysis Dashboard</h2>

//       {/* Prediction */}
//       <div className="card">
//         <h3>Prediction</h3>
//         <p><b>{result.prediction}</b></p>
//         <p>Confidence: {result.confidence}</p>
//       </div>

//       {/* Probability Chart */}
//       <div className="card">
//         <h3>Fake vs Real Probability</h3>
//         <ResponsiveContainer width="100%" height={250}>
//           <BarChart data={confidenceData}>
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="value" fill="#6C63FF" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Keyword Importance */}
//       <div className="card">
//         <h3>Keyword Importance</h3>
//         <ResponsiveContainer width="100%" height={250}>
//           <BarChart data={keywordData}>
//             <XAxis dataKey="keyword" />
//             <YAxis />
//             <Tooltip />
//             <Bar dataKey="score" fill="#00C9A7" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>

//       {/* Sentiment */}
//       {sentiment && (
//         <div className="card">
//           <h3>Sentiment</h3>
//           <p>{sentiment.sentiment}</p>
//           <p>Confidence: {sentiment.confidence}</p>
//         </div>
//       )}
//     </motion.div>
//   );
// };

// export default Dashboard;





import { supabase } from "../supabaseClient";

export default function Dashboard() {
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      <h1>Fake News Detection Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>

      {/* Modules will come here */}
    </div>
  );
}
