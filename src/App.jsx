import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    const id = Date.now();
    setToasts((prevToasts) => [...prevToasts, { id, message }]);
    
    // Automatically remove toast after 3 seconds
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id));
    }, 3000);
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'resume':
        return <ResumeSection />;
      case 'skills':
        return <SkillsSection />;
      case 'contact':
        return <ContactSection onShowToast={showToast} />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="portfolio-wrapper">
      {/* Sidebar Profile Card */}
      <Sidebar onShowToast={showToast} />

      {/* Main Content Area */}
      <main className="content-area">
        {/* Navigation Header */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dynamic Section Contents */}
        <div className="sections-container" key={activeTab}>
          {renderActiveSection()}
        </div>
      </main>

      {/* Custom Toast Messages */}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast-message">
            <span>{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
