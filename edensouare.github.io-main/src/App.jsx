import React from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Research from './pages/Research'
import ProjectDetail from './pages/ProjectDetail'

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 }
}

const Page = ({ children }) => (
  <motion.main
    className="content-area"
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.25 }}
  >
    {children}
  </motion.main>
)

export default function App() {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Page><Home /></Page>} />
          <Route path="/projects" element={<Page><Projects /></Page>} />
          <Route path="/research" element={<Page><Research /></Page>} />
          <Route path="/projects/:slug" element={<Page><ProjectDetail /></Page>} />
          <Route path="/research/:slug" element={<Page><ProjectDetail isResearch /></Page>} />
          {/* Legacy fallbacks from old static pages */}
          <Route path="/lookism.html" element={<Navigate to="/projects/lookism" replace />} />
          <Route path="/alzheimers-mri.html" element={<Navigate to="/projects/alzheimers-mri" replace />} />
          <Route path="/meal-hopper.html" element={<Navigate to="/projects/meal-hopper" replace />} />
          <Route path="/text-classification.html" element={<Navigate to="/research/text-classification" replace />} />
          <Route path="/conversational-agents.html" element={<Navigate to="/research/conversational-agents" replace />} />
          <Route path="/xcel-solutions.html" element={<Navigate to="/research/xcel-solutions" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}
