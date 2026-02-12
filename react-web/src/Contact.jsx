import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Information</h2>
          
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="icon">📍</div>
            <h3>Address</h3>
            <p>Emina Redžepagića 47A</p>
            <p>36300 Novi Pazar</p>
          </div>

          <div className="contact-card">
            <div className="icon">📞</div>
            <h3>Phone</h3>
            <p>+381 65 500 1615</p>
          </div>

          <div className="contact-card">
            <div className="icon">✉️</div>
            <h3>Email</h3>
            <p>kadirnuhovic4@gmail.com</p>
          </div>

          <div className="contact-card github-card">
            <div className="icon">💻</div>
            <h3>GitHub</h3>
            <p></p>
            <a href="https://github.com/KadirNuhovic" target="_blank" rel="noopener noreferrer" className="github-btn">
              github.com/KadirNuhovic
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;