import React from "react";
import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <div className="contact-header">
          <span className="contact-icon">📞</span>
          <h1>Contact Us</h1>
          <p className="contact-subtitle">
            Reach out to us using the details below.
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

          <div className="contact-item">
            <h4>Address</h4>
            <p>123 Learning Ave, Edutown, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
