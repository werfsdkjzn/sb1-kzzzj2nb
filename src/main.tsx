import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import NetworkingCourse from './pages/NetworkingCourse.tsx';
import NetworkingCourse2 from './pages/NetworkingCourse2.tsx';
import NetworkingCourse3 from './pages/NetworkingCourse3.tsx';
import NetworkingCourse4 from './pages/NetworkingCourse4.tsx';
import NetworkingCourse5 from './pages/NetworkingCourse5.tsx';
import LinuxCourse from './pages/LinuxCourse.tsx';
import LinuxCourse2 from './pages/LinuxCourse2.tsx';
import LinuxCliCourse from './pages/LinuxCliCourse.tsx';
import LinuxCliCourse2 from './pages/LinuxCliCourse2.tsx';
import LinuxCliCourse3 from './pages/LinuxCliCourse3.tsx';
import LinuxCliCourse4 from './pages/LinuxCliCourse4.tsx';
import LinuxCliCourse5 from './pages/LinuxCliCourse5.tsx';
import VirtualMachines from './pages/VirtualMachines.tsx';
import Privacy from './pages/Privacy.tsx';
import Terms from './pages/Terms.tsx';
import Contact from './pages/Contact.tsx';
import Roadmap from './pages/Roadmap.tsx';
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
          <Route path="/linux-cli" element={<LinuxCliCourse />} />
          <Route path="/linux-cli2" element={<LinuxCliCourse2 />} />
          <Route path="/linux-cli3" element={<LinuxCliCourse3 />} />
          <Route path="/linux-cli4" element={<LinuxCliCourse4 />} />
          <Route path="/linux-cli5" element={<LinuxCliCourse5 />} />
          <Route path="/networking" element={<NetworkingCourse />} />
          <Route path="/networking2" element={<NetworkingCourse2 />} />
          <Route path="/networking3" element={<NetworkingCourse3 />} />
          <Route path="/networking4" element={<NetworkingCourse4 />} />
          <Route path="/networking5" element={<NetworkingCourse5 />} />
          <Route path="/machines" element={<VirtualMachines />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
        <CookieConsent />
      </Layout>
    </Router>
  </StrictMode>
);