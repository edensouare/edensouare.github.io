import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Saetbyeol from './components/Saetbyeol';
import Projects from './components/Works';
import About from './components/About';
import ProjectDetail from './components/WorkDetail';
import ScrollToTop from './components/ScrollToTop';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {

  return (
    <AnimatePresence mode="wait">
      <Routes>
        {/* Default landing page */}
        <Route path="/" element={<Navigate to="/saetbyeol" />} />

        {/* Saetbyeol page */}
        <Route path="/saetbyeol" element={<Saetbyeol />} />
        <Route path="/projects" element={<Projects Header variant="white" />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/about" element={<About Header variant="white" />} />
        
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes/>
    </Router>
  );
}

export default App;
