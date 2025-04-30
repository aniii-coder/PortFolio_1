import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:your.email@example.com?subject=${subject}&body=${body}`; // Replace with your email

    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-section py-5" id="contact">
      <div className="container">
        <h2 className="section-title text-center mb-4">Contact Me</h2>
        <form onSubmit={handleSubmit} className="contact-form mx-auto p-4 shadow rounded">
          <input type="text" name="name" placeholder="Your Name" className="form-control mb-3"
            onChange={handleChange} value={formData.name} required />
          <input type="email" name="email" placeholder="Your Email" className="form-control mb-3"
            onChange={handleChange} value={formData.email} required />
          <textarea name="message" rows="5" placeholder="Your Message" className="form-control mb-3"
            onChange={handleChange} value={formData.message} required />
          <button type="submit" className="btn btn-primary w-100">Open in Email App</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
