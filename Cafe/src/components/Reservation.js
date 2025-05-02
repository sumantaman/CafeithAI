import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Reservation.css';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Reservation submitted:', formData);
    alert('Thank you for your reservation! We will contact you shortly to confirm.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '2',
      specialRequests: ''
    });
  };

  return (
    <section id="reservation" className="reservation">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Make a Reservation
        </motion.h2>

        <motion.div
          className="reservation-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="reservation-info">
            <h3>Book Your Table</h3>
            <p>Reserve your table at our cafe and enjoy a wonderful dining experience.</p>
            <div className="reservation-details">
              <div className="detail-item">
                <h4>Opening Hours</h4>
                <p>Monday - Friday: 7:00 AM - 8:00 PM</p>
                <p>Saturday - Sunday: 8:00 AM - 9:00 PM</p>
              </div>
              <div className="detail-item">
                <h4>Contact</h4>
                <p>Phone: (555) 123-4567</p>
                <p>Email: reservations@cafe.com</p>
              </div>
            </div>
          </div>

          <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7">7 Guests</option>
                <option value="8">8 Guests</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Special Requests (Optional)"
                rows="4"
              ></textarea>
            </div>
            <button type="submit" className="btn">Book Now</button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation; 