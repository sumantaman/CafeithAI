import React from 'react';
import { motion } from 'framer-motion';
import './Map.css';

const Map = () => {
  return (
    <section id="location" className="map-section">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Find Us
        </motion.h2>
        
        <motion.div 
          className="map-container"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Cafe Location"
          ></iframe>
          
          <div className="location-info">
            <h3>Visit Our Cafe</h3>
            <p>123 Coffee Street</p>
            <p>New York, NY 10001</p>
            <p>Phone: (555) 123-4567</p>
            <div className="hours">
              <h4>Opening Hours</h4>
              <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
              <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Map; 