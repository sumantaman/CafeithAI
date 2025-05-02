import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Cafe Delight</h3>
            <p>Experience the perfect blend of coffee and comfort in our cozy cafe.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/#menu">Menu</Link></li>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/#reservation">Reservation</Link></li>
              <li><Link to="/#contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Opening Hours</h4>
            <ul className="opening-hours">
              <li>Monday - Friday: 7:00 AM - 8:00 PM</li>
              <li>Saturday: 8:00 AM - 9:00 PM</li>
              <li>Sunday: 8:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Cafe Delight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 