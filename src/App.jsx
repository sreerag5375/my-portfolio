import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        
        {/* Project Case Study Pages */}
        <Route path="/work/textlens" element={<ProjectDetail />} />
        <Route path="/work/ecommerce-platform" element={<ProjectDetail />} />
        <Route path="/work/mobile-banking" element={<ProjectDetail />} />
        <Route path="/work/saas-dashboard" element={<ProjectDetail />} />

        {/* Catch all project routes */}
        <Route path="/work/:projectSlug" element={<ProjectDetail />} />
        
        {/* 404 Fallback */}
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App
