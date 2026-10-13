import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Activities from './components/pages/Media';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';


function App()
{
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    const timer = setTimeout(() => {
      NProgress.done();
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>

  );
}

export default App;
