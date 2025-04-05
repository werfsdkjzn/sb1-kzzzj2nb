import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import NetworkingCourse from './pages/NetworkingCourse.tsx';
import LinuxCourse from './pages/LinuxCourse.tsx';
import LinuxCourse2 from './pages/LinuxCourse2.tsx';
import VirtualMachines from './pages/VirtualMachines.tsx';
import Privacy from './pages/Privacy.tsx';
import Terms from './pages/Terms.tsx';
import Contact from './pages/Contact.tsx';
import Layout from './components/Layout.tsx';
import CookieConsent from './components/CookieConsent';
import './index.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/linux" element={<LinuxCourse />} />
          <Route path="/linux2" element={<LinuxCourse2 />} />
          <Route path="/networking" element={<NetworkingCourse />} />
          <Route path="/machines" element={<VirtualMachines />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <CookieConsent />
      </Layout>
    </Router>
  </StrictMode>
);