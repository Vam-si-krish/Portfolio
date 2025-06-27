// src/App.js

import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Resume from './components/Resume';
import './App.scss';

function App() {
  const location = useLocation();

  // This useEffect will run whenever the location (URL) changes
  useEffect(() => {
    // Check if the gtag function is available on the window object
    if (typeof window.gtag === 'function') {
      // Send a pageview event to Google Analytics
      window.gtag('config', 'G-WY8R209E7L', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]); // The dependency array ensures it runs on every location change

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;



// import { Route, Routes } from 'react-router-dom'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'
// import Layout from './components/Layout'
// import Portfolio from './components/Portfolio'
// import Projects from './components/Projects'
// import Resume from './components/Resume'

// // import Dashboard from './components/Dashboard'
// import './App.scss'

// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index  element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/experience" element={<Portfolio />} />
//           <Route path="/resume" element={<Resume />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/contact" element={<Contact />} />

//           {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//         </Route>
//       </Routes>
//     </>
//   )
// }

// export default App
