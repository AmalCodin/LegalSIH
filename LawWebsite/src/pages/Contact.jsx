// src/pages/Contact.jsx
import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-details">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>123 Legal Lane, Lawtown, CA 90210</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <p>support@legalhub.com</p>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone"></i>
            <p>(123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <div className="form-container">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Message:</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
