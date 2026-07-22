import React, { useState } from 'react';
import { Menu, X, Code } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'about', label: 'About Me' },
    { id: 'resume', label: 'Resume' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'My Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <div className="nav-logo" id="nav-logo">
        <Code size={24} className="logo-accent" />
        <span>M.Aman<span className="logo-accent"> Khan</span></span>
      </div>

      <button
        className="mobile-nav-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
        id="btn-mobile-nav-toggle"
      >
        {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      <nav>
        <ul className={`nav-menu ${isMenuOpen ? 'mobile-open' : ''}`}>
          {menuItems.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeTab === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(item.id);
                }}
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
