import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ResumeSection from './components/ResumeSection';
import SkillsSection from './components/SkillsSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import CursorEffect from './components/CursorEffect';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

const VALID_TABS = ['about', 'resume', 'skills', 'portfolio', 'contact'];

function getTabFromHash() {
  const hash = window.location.hash.replace('#', '');
  return VALID_TABS.includes(hash) ? hash : 'about';
}

export default function App() {
  const [activeTab, setActiveTab] = useState(getTabFromHash);
  const [toasts, setToasts] = useState([]);

  // Sync hash → state (browser back/forward)
  useEffect(() => {
    const onHashChange = () => setActiveTab(getTabFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Sync state → hash (tab click)
  const changeTab = (tabId) => {
    window.location.hash = tabId;
    setActiveTab(tabId);
  };

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
      case 'portfolio':
        return <PortfolioSection />;
      case 'contact':
        return <ContactSection onShowToast={showToast} />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <div className="portfolio-wrapper">
      {/* Custom Glowing Cursor & Floating Code Snippets Effect */}
      <ErrorBoundary>
        <CursorEffect />
      </ErrorBoundary>

      {/* Sidebar Profile Card */}
      <Sidebar onShowToast={showToast} />

      {/* Main Content Area */}
      <main className="content-area">
        {/* Navigation Header */}
        <Navbar activeTab={activeTab} setActiveTab={changeTab} />

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
