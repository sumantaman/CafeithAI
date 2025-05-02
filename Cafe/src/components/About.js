import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="section-title"
          >
            Our Story
          </motion.h2>
          <div className="about-grid">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3>Crafting Perfect Moments</h3>
              <p>
                At Café Delight, we believe that every cup of coffee tells a story.
                Our journey began with a simple passion for creating the perfect
                coffee experience. Today, we continue to serve our community with
                the same dedication and love for quality.
              </p>
              <p>
                Our expert baristas carefully select and roast the finest coffee
                beans, ensuring that every sip brings joy and comfort to our
                customers. We take pride in creating a warm and welcoming
                atmosphere where memories are made and friendships are nurtured.
              </p>
            </motion.div>
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop&q=60" alt="Café Interior" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 