import React from 'react';
import '../styles/contact.css';

function Contact() {
  return (
    <section className="contact">
      <div className="contact-intro">
        <h1>Contact Us</h1>
        <p>Speak with our team to see how we can help your business.</p>
      </div>
      <div className="contact-form">
        <input type="text" id="contact-input" placeholder="Your name" />
        <input type="text" id="contact-input" placeholder="Email" />
        <input type="text" id="contact-input" placeholder="Your best contact number" />
        <input type="text" id="contact-inputBusiness" placeholder="Business or Company name" />
        <button type="submit" id="submit-button">Submit</button>
      </div>
    </section>
  );
}

export default Contact;
