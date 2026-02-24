// import { useNavigate } from "react-router-dom";

// export default function ModuleCard({ title }) {
//   const navigate = useNavigate();

//   const routeMap = {
//     "Summarization": "/summarize",
//     "Fake News Detection": "/predict",
//     "Sentiment Analysis": "/sentiment",
//     "AI Chatbot": "/chatbot",
//     "Credibility Checker": "/credibility",
//   };

//   return (
//     <div
//       onClick={() => navigate(routeMap[title])}
//       className="glass-card cursor-pointer hover:scale-105 transition"
//     >
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-gray-400 mt-2">Click to open module</p>
//     </div>
//   );
// }






// import { useNavigate } from "react-router-dom";

// export default function ModuleCard({ title }) {
//   const navigate = useNavigate();

//   const routeMap = {
//     "Fake News Detection": "/fake-news",
//     "Summarization": "/summarize",
//     "Sentiment Analysis": "/sentiment",
//     "AI Chatbot": "/chatbot",
//     "Credibility Checker": "/credibility",
//   };

//   return (
//     <div
//       onClick={() => navigate(routeMap[title])}
//       className="glass-card cursor-pointer hover:scale-105 transition"
//     >
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-gray-400 mt-2">Click to open module</p>
//     </div>
//   );
// }


import { useNavigate } from "react-router-dom";

export default function ModuleCard({ title, route }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className="bg-white/5 border border-white/10 p-6 rounded-xl cursor-pointer
                 hover:scale-105 hover:border-pink-500 transition-all"
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="text-gray-400 mt-2">Click to open module</p>
    </div>
  );
}