import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components and pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Docs from './pages/Docs';
import Contact from './pages/Contact';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
