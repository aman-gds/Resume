import React, { useState } from 'react';
import { Send, MapPin, Loader2 } from 'lucide-react';

export default function ContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: null,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        success: false,
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setStatus({ submitting: true, success: null, message: '' });

    // Mocking API call
    setTimeout(() => {
      setStatus({
        submitting: false,
        success: true,
        message: 'Thank you! Your message has been sent successfully.'
      });
      onShowToast("Message sent successfully!");
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section className="tab-content" id="section-contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-grid">
        {/* Contact Form Column */}
        <div className="contact-form-container">
          <h3 className="services-title">Get in Touch</h3>
          
          <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
            <div className="form-group-row">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  className="form-input" 
                  placeholder="Full Name *" 
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status.submitting}
                  id="form-input-name"
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  className="form-input" 
                  placeholder="Email Address *" 
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status.submitting}
                  id="form-input-email"
                />
              </div>
            </div>

            <div className="form-group">
              <input 
                type="text" 
                name="subject" 
                className="form-input" 
                placeholder="Subject" 
                value={formData.subject}
                onChange={handleChange}
                disabled={status.submitting}
                id="form-input-subject"
              />
            </div>

            <div className="form-group">
              <textarea 
                name="message" 
                className="form-textarea" 
                placeholder="Your Message *" 
                value={formData.message}
                onChange={handleChange}
                disabled={status.submitting}
                id="form-input-message"
              ></textarea>
            </div>

            {status.message && (
              <div className={`form-status ${status.success ? 'success' : 'error'}`} id="form-status-msg">
                <span>{status.message}</span>
              </div>
            )}

            <button 
              type="submit" 
              className="form-submit-btn"
              disabled={status.submitting}
              id="form-submit-btn"
            >
              {status.submitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Map Column */}
        <div className="map-container">
          <h3 className="services-title">My Location</h3>
          
          <div className="map-wrapper">
            <div className="map-placeholder">
              <div className="map-placeholder-icon">
                <MapPin size={48} fill="rgba(163, 230, 53, 0.2)" />
              </div>
              <h4 className="map-placeholder-title">Karachi, Pakistan</h4>
              <p className="map-placeholder-text">
                Available for remote roles worldwide and local consultations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
