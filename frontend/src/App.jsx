// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Dashboard from "./pages/Dashboard";
// import Summarize from "./pages/Summarize";
// import Predict from "./pages/Predict";
// import Sentiment from "./pages/Sentiment";
// import Credibility from "./pages/Credibility";
// import Chatbot from "./pages/Chatbot";

// import Login from "./pages/Login";
// import Register from "./pages/Register";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />

//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         <Route path="/summarize" element={<Summarize />} />
//         <Route path="/predict" element={<Predict />} />
//         <Route path="/sentiment" element={<Sentiment />} />
//         <Route path="/credibility" element={<Credibility />} />
//         <Route path="/chatbot" element={<Chatbot />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }




// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import Summarize from "./pages/Summarize";
// import Sentiment from "./pages/Sentiment";
// import FakeNews from "./pages/FakeNews";
// import Credibility from "./pages/Credibility";
// import Chatbot from "./pages/Chatbot";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />

//         {/* Modules */}
//         <Route path="/summarize" element={<Summarize />} />
//         <Route path="/sentiment" element={<Sentiment />} />
//         <Route path="/fake-news" element={<FakeNews />} />
//         <Route path="/credibility" element={<Credibility />} />
//         <Route path="/chatbot" element={<Chatbot />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }





// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import Summarize from "./pages/Summarize";

// import Login from "./pages/Login";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/summarize" element={<Summarize />} />
//         <Route path="/sentiment" element={<Sentiment />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }




// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import FakeNews from "./pages/FakeNews";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/fake-news" element={<FakeNews />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }






// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";

// import FakeNews from "./pages/FakeNews";
// import Summarize from "./pages/Summarize";
// import Sentiment from "./pages/Sentiment";
// import Credibility from "./pages/Credibility";
// import Chatbot from "./pages/Chatbot";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* Auth */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {/* Dashboard */}
//         <Route path="/" element={<Dashboard />} />

//         {/* Modules */}
//         <Route path="/fake-news" element={<FakeNews />} />
//         <Route path="/summarize" element={<Summarize />} />
//         <Route path="/sentiment" element={<Sentiment />} />
//         <Route path="/credibility" element={<Credibility />} />
//         <Route path="/chatbot" element={<Chatbot />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }





// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";

// import Predict from "./pages/Predict";
// import Summarize from "./pages/Summarize";
// import Sentiment from "./pages/Sentiment";
// import Credibility from "./pages/Credibility";
// import Chatbot from "./pages/Chatbot";
// import HistoryPage from './pages/HistoryPage';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="history" element={<HistoryPage />} />

//         {/* MODULE ROUTES */}
//         <Route path="/predict" element={<Predict />} />
//         <Route path="/summarize" element={<Summarize />} />
//         <Route path="/sentiment" element={<Sentiment />} />
//         <Route path="/credibility" element={<Credibility />} />
//         <Route path="/chatbot" element={<Chatbot />} />
//         {/* <Route path="history" element={<HistoryPage />} /> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }





import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

// Dashboard Components
import ProjectOverview from "./pages/ProjectOverview"; // Ensure this is imported!
import Predict from "./pages/Predict";
import Summarize from "./pages/Summarize";
import Sentiment from "./pages/Sentiment";
import Credibility from "./pages/Credibility";
import Chatbot from "./pages/Chatbot";
import Vault from "./pages/Vault";
import About from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Top-Level Routes (No Sidebar) */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} /> 

        {/* --- NESTED DASHBOARD ROUTES --- */}
        <Route path="/dashboard" element={<Dashboard />}>
          
          {/* 1. Set ProjectOverview as the DEFAULT page */}
          <Route index element={<ProjectOverview />} />

          {/* 2. Child routes (Accessible via /dashboard/vault, etc.) */}
          <Route path="predict" element={<Predict />} />
          <Route path="summarize" element={<Summarize />} />
          <Route path="sentiment" element={<Sentiment />} />
          <Route path="credibility" element={<Credibility />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="vault" element={<Vault />} />
          
          {/* If you have a separate About page inside the dashboard */}
          <Route path="about" element={<About />} />
        </Route>

        {/* Global 404 Catch-all */}
        <Route path="*" element={<div className="p-20 text-center font-black text-slate-400 uppercase tracking-widest">404 - Node Not Found</div>} />
        {/* Add this as the very last route before </Routes> */}
<Route path="*" element={
  <div className="p-20 text-center">
    <h1 className="text-9xl font-black text-slate-200">404</h1>
    <p className="text-slate-500">Current Path: {window.location.pathname}</p>
    <p className="text-indigo-600 font-bold">If this says /dashboard/vault, your App.jsx Route is the problem.</p>
  </div>
} />
      </Routes>
    </BrowserRouter>
  );
}