import React from 'react';
import { LayoutTemplate, ShoppingBag, Layers, Terminal } from 'lucide-react';

export default function AboutSection() {
  const services = [
    {
      icon: <LayoutTemplate size={28} />,
      title: 'WordPress & E-Commerce',
      desc: 'Building responsive, high-performing websites using Elementor Pro, WPBakery, WooCommerce, and custom PHP tailored to business goals.'
    },
    {
      icon: <ShoppingBag size={28} />,
      title: 'SEO & Performance Optimization',
      desc: 'Optimizing page speed by up to 35%, tuning Core Web Vitals, and implementing targeted technical SEO to boost organic traffic and conversions.'
    },
    {
      icon: <Layers size={28} />,
      title: 'UI/UX & Responsive Frontend',
      desc: 'Designing intuitive, accessible digital experiences with clean HTML5 and CSS3, ensuring seamless cross-device compatibility.'
    },
    {
      icon: <Terminal size={28} />,
      title: 'Python Web Scraping & Data',
      desc: 'Engineering automated Python web scrapers (Scrapy, BeautifulSoup, Selenium) extracting 100K+ data points weekly into structured JSON/CSV formats.'
    }
  ];

  return (
    <section className="tab-content" id="section-about">
      <h2 className="section-title">About Me</h2>
      <p className="about-intro">
        Detail-oriented WordPress Developer with expertise in building responsive, high-performing websites 
        and custom e-commerce solutions. Proficient in theme and plugin customization, UI/UX optimization, 
        and web performance using Elementor and WooCommerce. Blends a solid technical background in 
        Computer Science with practical experience in data annotation and web scraping to build user-focused, 
        SEO-friendly digital experiences.
      </p>

      <h3 className="services-title">What I Do</h3>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card" id={`service-card-${index}`}>
            <div className="service-icon-box">
              {service.icon}
            </div>
            <h4 className="service-name">{service.title}</h4>
            <p className="service-desc">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
