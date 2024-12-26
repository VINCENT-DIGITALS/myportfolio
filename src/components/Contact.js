import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact({ contactDetails }) {
  return (
    <div className="contact-container">
      {/* Divider */}
      <div className="section-divider"></div>
      <section className="contact-header">
        <h2>Contact Me</h2>
        <p>Feel free to reach out—I’d love to connect and discuss how I can contribute to your data-driven goals!</p>
      </section>

      <section className="contact-content">
        {contactDetails.map((detail, index) => (
          <div className="detail-item" key={index}>
            <FontAwesomeIcon icon={detail.icon} />
            <a href={detail.link} target="_blank" rel="noopener noreferrer">
              {detail.text}
            </a>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Contact;
