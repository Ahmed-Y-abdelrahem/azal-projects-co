import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './pages/home/HomePage.jsx';
import AboutPage from './pages/about/AboutPage.jsx';
import ServicesPage from './pages/services/ServicesPage.jsx';
import ProjectsPage from './pages/projects/ProjectsPage.jsx';
import IndustriesPage from './pages/industries/IndustriesPage.jsx';
import HSEPage from './pages/hse/HSEPage.jsx';
import ContactPage from './pages/contact/ContactPage.jsx';
import NotFound from './pages/NotFound.jsx';


function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<HomePage />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/projects" element={<ProjectsPage />} />

        <Route path="/industries" element={<IndustriesPage />} />

        <Route path="/hse" element={<HSEPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;