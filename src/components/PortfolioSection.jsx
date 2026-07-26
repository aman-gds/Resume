import React, { useState } from 'react';
import { ExternalLink, Globe, Eye } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'E Game Designs',
    url: 'https://egamedesigns.com/',
    category: 'Gaming & Design',
    desc: 'Custom gaming website with bold visuals and dynamic layouts.'
  },
  {
    id: 2,
    name: 'Picklex',
    url: 'https://picklex.ca/',
    category: 'Sports & Events',
    desc: 'Pickleball venue platform featuring event updates and weekday/weekend hourly court pricing.'
  },
  {
    id: 3,
    name: 'Elevate Talent & Marketing',
    url: 'https://elevatetm.com/',
    category: 'Marketing Agency',
    desc: 'Professional talent and marketing agency website with modern UI.'
  },
  {
    id: 4,
    name: 'Canada Copier Remarketing',
    url: 'https://canadacopierremarketing.com/',
    category: 'Business Services',
    desc: 'Business services site with product catalog and inquiry system.'
  },
  {
    id: 5,
    name: 'Cerilli Beauty Centre',
    url: 'https://cerillibeautycentre.ca/',
    category: 'Beauty & Wellness',
    desc: 'Elegant beauty salon website with online booking functionality.'
  },
  {
    id: 6,
    name: 'Family Dentistry in Cornell',
    url: 'https://familydentistryincornell.com/',
    category: 'Healthcare',
    desc: 'Healthcare website with appointment booking and service listings.'
  },
  {
    id: 7,
    name: 'NR Legal Services',
    url: 'https://nrlegalservices.com/',
    category: 'Legal Services',
    desc: 'Professional legal services firm website with clean corporate design.'
  },
  {
    id: 8,
    name: 'Discount LED',
    url: 'https://discountled.us/',
    category: 'E-Commerce',
    desc: 'LED lighting e-commerce store with WooCommerce product catalog.'
  },
  {
    id: 9,
    name: 'Junior Dunkers',
    url: 'https://juniordunkers.com/',
    category: 'Sports & Youth',
    desc: 'Youth basketball program website with event registration.'
  },
  {
    id: 10,
    name: 'Lash & Nail Bar',
    url: 'https://lashnailbar.com/',
    category: 'Beauty & Wellness',
    desc: 'Beauty salon with service menus, gallery, and booking system.'
  },
  {
    id: 11,
    name: 'Edvise Consulting',
    url: 'https://edviseconsulting.us/',
    category: 'Consulting',
    desc: 'Education consulting firm with service pages and lead generation.'
  },
  {
    id: 12,
    name: 'NexGen LED Lights',
    url: 'https://nexgenledlights.com/',
    category: 'E-Commerce',
    desc: 'Next-gen LED lighting solutions store with product filtering.'
  },
  {
    id: 13,
    name: 'The Mop',
    url: 'https://themop.ca/',
    category: 'Home Services',
    desc: 'Cleaning services business with booking and service area pages.'
  }
];

// Category color map
const categoryColors = {
  'Gaming & Design':   { bg: 'rgba(168, 85, 247, 0.15)', border: 'rgba(168, 85, 247, 0.4)', text: '#a855f7' },
  'E-Commerce':        { bg: 'rgba(59, 130, 246, 0.15)', border: 'rgba(59, 130, 246, 0.4)', text: '#3b82f6' },
  'Marketing Agency':  { bg: 'rgba(163, 230, 53, 0.15)', border: 'rgba(163, 230, 53, 0.4)', text: '#a3e635' },
  'Business Services': { bg: 'rgba(251, 191, 36, 0.15)', border: 'rgba(251, 191, 36, 0.4)', text: '#fbbf24' },
  'Beauty & Wellness': { bg: 'rgba(236, 72, 153, 0.15)', border: 'rgba(236, 72, 153, 0.4)', text: '#ec4899' },
  'Healthcare':        { bg: 'rgba(20, 184, 166, 0.15)', border: 'rgba(20, 184, 166, 0.4)', text: '#14b8a6' },
  'Legal Services':    { bg: 'rgba(99, 102, 241, 0.15)', border: 'rgba(99, 102, 241, 0.4)', text: '#6366f1' },
  'Sports & Youth':    { bg: 'rgba(249, 115, 22, 0.15)', border: 'rgba(249, 115, 22, 0.4)', text: '#f97316' },
  'Sports & Events':   { bg: 'rgba(14, 165, 233, 0.15)', border: 'rgba(14, 165, 233, 0.4)', text: '#0ea5e9' },
  'Consulting':        { bg: 'rgba(16, 185, 129, 0.15)', border: 'rgba(16, 185, 129, 0.4)', text: '#10b981' },
  'Home Services':     { bg: 'rgba(245, 158, 11, 0.15)', border: 'rgba(245, 158, 11, 0.4)', text: '#f59e0b' },
};

function ProjectCard({ project }) {
  const [imgError, setImgError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const catColor = categoryColors[project.category] || categoryColors['Business Services'];
  const domain = new URL(project.url).hostname.replace('www.', '');
  const screenshotUrl = `https://image.thum.io/get/width/600/crop/400/noanimate/${project.url}`;

  return (
    <div
      className="portfolio-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      id={`portfolio-card-${project.id}`}
    >
      {/* Screenshot Preview */}
      <div className="portfolio-img-wrapper">
        {!imgError ? (
          <img
            src={screenshotUrl}
            alt={`${project.name} website screenshot`}
            className="portfolio-img"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        ) : (
          <div className="portfolio-img-fallback">
            <Globe size={40} style={{ color: catColor.text, opacity: 0.6 }} />
            <span style={{ color: catColor.text, fontSize: '13px', marginTop: '10px' }}>{domain}</span>
          </div>
        )}

        {/* Hover Overlay */}
        <div className={`portfolio-overlay ${hovered ? 'visible' : ''}`}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-visit-btn"
            onClick={(e) => e.stopPropagation()}
          >
            <Eye size={16} />
            View Live Site
          </a>
        </div>
      </div>

      {/* Card Info */}
      <div className="portfolio-card-body">
        <div className="portfolio-card-top">
          <h3 className="portfolio-project-name">{project.name}</h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-ext-link"
            title={`Open ${project.name}`}
          >
            <ExternalLink size={15} />
          </a>
        </div>

        <span
          className="portfolio-category-badge"
          style={{
            backgroundColor: catColor.bg,
            border: `1px solid ${catColor.border}`,
            color: catColor.text
          }}
        >
          {project.category}
        </span>

        <p className="portfolio-desc">{project.desc}</p>

        <span className="portfolio-domain">{domain}</span>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section className="tab-content" id="section-portfolio">
      <h2 className="section-title">My Portfolio</h2>
      <p className="about-intro" style={{ marginBottom: '30px' }}>
        A selection of WordPress websites I've designed, developed, and optimized for clients across various industries.
      </p>

      {/* Category Filter */}
      <div className="portfolio-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`portfolio-filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
            id={`filter-${cat.toLowerCase().replace(/\s+/g, '-')}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="portfolio-grid">
        {filtered.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
