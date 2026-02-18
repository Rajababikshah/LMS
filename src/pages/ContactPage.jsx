import React, { useState } from "react";
import "./ContactPage.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="contact-container">
      {/* Contact Card */}
      <div className="contact-card">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p className="contact-subtitle">
            We'd love to hear from you. Send us a message.
          </p>
        </div>
        <div className="contact-details">
          <div className="contact-item">
            <h4>Email</h4>
            <p className="highlight">support@lmsportal.com</p>
          </div>
          <div className="contact-item">
            <h4>Phone</h4>
            <p className="highlight">+1 234 567 8901</p>
          </div>
        </div>
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="send-btn">
            Send Message
          </button>
        </form>
      </div>

      {/* FAQ Section BELOW */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>How long does support take to respond?</h4>
          <p>We usually respond within 24 hours on business days.</p>
        </div>
        <div className="faq-item">
          <h4>Can I enroll in multiple courses?</h4>
          <p>Yes! You can enroll in unlimited courses anytime.</p>
        </div>
        <div className="faq-item">
          <h4>Is there a refund policy?</h4>
          <p>Yes, we offer a 7-day money-back guarantee.</p>
        </div>
      </div>
    </div>
  );
}
