

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// // Import your pages

// import Dashboard from './pages/Dashboard'; 
// import Predict from './pages/Predict'; // Ensure the path matches your file name exactly
// import Summarize from './pages/Summarize';
// import Sentiment from './pages/Sentiment';
// import Credibility from './pages/Credibility';
// import Chatbot from './pages/Chatbot';
// // import Login from './pages/Login'; // Uncomment when ready
// // import Register from './pages/Register'; // Uncomment when ready

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Default Redirect to Dashboard (or Login if you prefer) */}
//         <Route path="/" element={<Navigate to="/dashboard" />} />

//         {/* Module Routes */}
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/summarize" element={<Summarize />} />
//         <Route path="/sentiment" element={<Sentiment />} />
//         <Route path="/credibility" element={<Credibility />} />
//         <Route path="/chatbot" element={<Chatbot />} />
//         <Route path="/predict" element={<Predict />} />
        
//         {/* Auth Routes */}
//         {/* <Route path="/login" element={<Login />} /> */}
//         {/* <Route path="/register" element={<Register />} /> */}

//         {/* 404 Catch-all */}
//         <Route path="*" element={<div className="text-white p-10">Page Not Found</div>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// // Import your pages
// import Home from './pages/Home'; // NEW
// import Signup from './pages/Signup';
// import Login from './pages/Login'; // NEW
// import Dashboard from './pages/Dashboard'; 
// import Predict from './pages/Predict'; 
// import Summarize from './pages/Summarize';
// import Sentiment from './pages/Sentiment';
// import Credibility from './pages/Credibility';
// import Chatbot from './pages/Chatbot';

// function App() {
//   // Simple check: This looks for a 'true' value in your browser's storage
//   const isAuthenticated = () => localStorage.getItem('isAuthenticated') === 'true';

//   return (
//     <Router>
//       <Routes>
//         {/* 1. Root path now shows the Home Page instead of redirecting */}
//         <Route path="/" element={<Home />} />

//         {/* 2. Authentication Route */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} /> {/* Added this route */}

//         {/* 3. Protected Routes: If not logged in, these redirect to /login */}
//         <Route 
//           path="/dashboard" 
//           element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />} 
//         />
        
//         <Route 
//           path="/predict" 
//           element={isAuthenticated() ? <Predict /> : <Navigate to="/login" />} 
//         />

//         {/* Other modules */}
//         <Route path="/summarize" element={<Summarize />} />
//         <Route path="/sentiment" element={<Sentiment />} />
//         <Route path="/credibility" element={<Credibility />} />
//         <Route path="/chatbot" element={<Chatbot />} />
        
//         {/* 404 Catch-all */}
//         <Route path="*" element={<div className="text-white p-10 text-center"><h1>404</h1>Page Not Found</div>} />
//       </Routes>
    
//     </Router>
//   );
// }

// // export default App;



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// // Import Pages
// import Home from './pages/Home';
// import Signup from './pages/Signup';
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard'; 
// import ProjectOverview from './pages/ProjectOverview';
// import Predict from './pages/Predict'; 
// import Summarize from './pages/Summarize';
// import Sentiment from './pages/Sentiment';
// import Credibility from './pages/Credibility';
// import Chatbot from './pages/Chatbot';

// function App() {
//   // Check auth status
//   const isAuthenticated = () => localStorage.getItem('isAuthenticated') === 'true';

//   return (
//     <Router>
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* Protected Dashboard Shell */}
//         <Route 
//           path="/dashboard" 
//           element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
//         >
//           {/* Default view when at /dashboard */}
//           <Route index element={<ProjectOverview />} /> 
          
//           {/* Sub-modules that render inside the dashboard shell */}
//           <Route path="predict" element={<Predict />} />
//           <Route path="summarize" element={<Summarize />} />
//           <Route path="sentiment" element={<Sentiment />} />
//           <Route path="credibility" element={<Credibility />} />
//           <Route path="chatbot" element={<Chatbot />} />
//         </Route>

//         {/* 404 Page */}
//         <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-slate-400 font-bold uppercase">404 | Not Found</div>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import Pages
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; 
import ProjectOverview from './pages/ProjectOverview';
import Predict from './pages/Predict'; 
import Summarize from './pages/Summarize';
import Sentiment from './pages/Sentiment';
import Credibility from './pages/Credibility';
import Chatbot from './pages/Chatbot';
import Vault from './pages/Vault';
import History from "./pages/History";
import DocIntel from './pages/DocIntel';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  // Check auth status
  const isAuthenticated = () => localStorage.getItem('isAuthenticated') === 'true';

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* Protected Dashboard Shell */}
        <Route 
          path="/dashboard" 
          element={isAuthenticated() ? <Dashboard /> : <Navigate to="/login" />}
        >
          {/* Default view when at /dashboard */}
          <Route index element={<ProjectOverview />} /> 
          
          {/* Sub-modules that render inside the dashboard shell */}
          <Route path="predict" element={<Predict />} />
          <Route path="summarize" element={<Summarize />} />
          <Route path="sentiment" element={<Sentiment />} />
          <Route path="credibility" element={<Credibility />} />
          <Route path="chatbot" element={<Chatbot />} />
          <Route path="vault" element={<Vault />} />
          <Route path="history" element={<History />} />
          <Route path="doc-intel" element={<DocIntel />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-slate-400 font-bold uppercase">404 | Not Found</div>} />
      </Routes>
    </Router>
  );
}

export default App;