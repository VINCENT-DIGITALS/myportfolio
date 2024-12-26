import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/style.css';
import './App.css';
import Navbar from './components/Navbar';

import Footer from './components/Footer';
import Sections from './components/Sections';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const socialLinks = {
    github: "https://github.com/VINCENT-DIGITALS",
    linkedin: "https://www.linkedin.com/in/john-vincent-macayanan-024a03324/",
    facebook: "https://www.facebook.com/Itsvincentlang/",
  };
  return (
    <Router basename="/my-portfolio">
      <div className="App">
        <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
        <Routes>
          <Route path="/" element={<Sections />} />
        </Routes>
        <Footer socialLinks={socialLinks} />
      </div>
    </Router>
  );
}

export default App;
