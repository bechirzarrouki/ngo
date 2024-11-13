// src/components/ContactPage.js
import React from 'react';

const ContactPage = () => {
  // Define position as a constant

  return (
    <div className="team-list0">
      <h1>Contact Us</h1>
      <p>Email: info@innovamatch.com</p>
      <p>Phone: +216 97965207</p>
      
      <h2>Our Location</h2>
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2920.4958277629744!2d10.188433304429045!3d36.90165154326282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cbb73f78b917%3A0xfa77a5668dcfbd64!2sEsprit%20Block%20M!5e1!3m2!1sen!2stn!4v1731441666962!5m2!1sen!2stn"
      width="100%"
      height="380"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Esprit Block M Location"
    ></iframe>    </div>
  );
};

export default ContactPage;
