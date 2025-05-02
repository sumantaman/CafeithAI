import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const handleLogout = () => {
    setShowLogoutConfirm(true);
  };

  const confirmLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    setShowLogoutConfirm(false);
    navigate('/login');
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Cafe Delight
          </motion.span>
        </Link>

        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#menu" onClick={() => scrollToSection('menu')}>Menu</a>
          <a href="#about" onClick={() => scrollToSection('about')}>About</a>
          <a href="#reservation" onClick={() => scrollToSection('reservation')}>Reservation</a>
          <a href="#location" onClick={() => scrollToSection('location')}>Location</a>
          <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
          {isAuthenticated ? (
            <div className="user-actions">
              <button onClick={handleLogout} className="btn btn-logout">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-login">
              Login
            </Link>
          )}
        </div>

        <button
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {showLogoutConfirm && (
        <div className="logout-confirm-overlay">
          <div className="logout-confirm-box">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to logout?</p>
            <div className="logout-confirm-buttons">
              <button onClick={confirmLogout} className="btn btn-confirm">
                Yes, Logout
              </button>
              <button onClick={cancelLogout} className="btn btn-cancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 