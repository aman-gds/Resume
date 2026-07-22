import React, { useState } from 'react';
import { MapPin, Mail, Phone, Linkedin, Download, Copy, Check } from 'lucide-react';

export default function Sidebar({ onShowToast }) {
  const [copiedItem, setCopiedItem] = useState(null);

  const contactDetails = [
    {
      id: 'location',
      label: 'Location',
      value: 'Karachi, Pakistan',
      copyValue: 'Karachi, Pakistan',
      icon: <MapPin size={18} />
    },
    {
      id: 'email',
      label: 'Email',
      value: 'aman03122906994@gmail.com',
      copyValue: 'aman03122906994@gmail.com',
      icon: <Mail size={18} />
    },
    {
      id: 'phone',
      label: 'Phone',
      value: '+92 312 2906994',
      copyValue: '+923122906994',
      icon: <Phone size={18} />
    }
  ];

  const handleCopy = (text, id, label) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedItem(id);
        onShowToast(`Copied ${label} to clipboard!`);
        setTimeout(() => setCopiedItem(null), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };



  return (
    <aside className="profile-sidebar">
      {/* Avatar */}
      <div className="avatar-container">
        <img 
          src="/avatar.png" 
          alt="M. Aman Khan Profile" 
          className="avatar-img"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"; // fallback
          }}
        />
      </div>

      {/* Profile Details */}
      <h2 className="profile-name">M. Aman Khan</h2>
      <div className="profile-title">WordPress Specialist</div>

      {/* Social Links */}
      <div className="social-links">
        <a 
          href="https://www.linkedin.com/in/aman-khan-b29091349" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-btn"
          title="Connect on LinkedIn"
          id="social-linkedin"
        >
          <Linkedin size={20} />
        </a>
      </div>

      {/* Contact Information */}
      <div className="contact-info-list">
        {contactDetails.map((detail) => (
          <div 
            key={detail.id} 
            className="contact-item"
            onClick={() => handleCopy(detail.copyValue, detail.id, detail.label)}
            title={`Click to copy ${detail.label}`}
            id={`contact-${detail.id}`}
          >
            <div className="contact-icon-wrapper">
              {copiedItem === detail.id ? <Check size={18} /> : detail.icon}
            </div>
            <div className="contact-details">
              <span className="contact-label">{detail.label}</span>
              <span className="contact-value">{detail.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Action Button */}
      <a 
        href="/Aman-CV.pdf"
        download="M-Aman-Khan-CV.pdf"
        className="sidebar-action-btn"
        id="btn-download-cv"
        onClick={() => onShowToast('Downloading CV...')}
      >
        <Download size={18} />
        Download CV
      </a>
    </aside>
  );
}
