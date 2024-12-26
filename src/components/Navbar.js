import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar({ isOpen, toggleMenu }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/'); // Navigate to the home page first
      setTimeout(() => {
        const section = document.getElementById(id);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
          toggleMenu();
        }
      }, 100); // Slight delay to ensure navigation is complete
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        toggleMenu();
      }
    }
  };

  const handleScroll = () => {
    if (location.pathname !== '/') {
      setActiveSection(location.pathname); // For non-home routes, match the route
      return;
    }

    const sections = ['dashboard', 'about', 'projects'];
    let foundSection = '';

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          foundSection = section;
        }
      }
    });

    setActiveSection(foundSection || 'dashboard'); // Default to 'dashboard' if no section is active
  };

  useEffect(() => {
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
    } else {
      setActiveSection(location.pathname); // Explicitly set the active route
    }

    return () => {
      if (location.pathname === '/') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <div className="logo">Portfolio</div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li className={activeSection === 'dashboard' ? 'active' : ''}>
          <button onClick={() => scrollToSection('dashboard')}>Home</button>
        </li>
        <li className={activeSection === 'about' ? 'active' : ''}>
          <button onClick={() => scrollToSection('about')}>About</button>
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''}>
          <button onClick={() => scrollToSection('projects')}>Skills & Projects</button>
        </li>
        <li className={activeSection === 'contact' ? 'active' : ''}>
          <button onClick={() => scrollToSection('contact')}>Contact Me</button>
        </li>
     
      </ul>
    </nav>
  );
}

export default Navbar;
