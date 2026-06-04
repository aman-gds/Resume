import React from 'react';
import { LayoutTemplate, ShoppingBag, Layers, Terminal } from 'lucide-react';

export default function AboutSection() {
  const services = [
    {
      icon: <LayoutTemplate size={28} />,
      title: 'WordPress Customization',
      desc: 'Developing and tailoring custom WordPress themes and plugins to match distinct business identities and operational workflows.'
    },
    {
      icon: <ShoppingBag size={28} />,
      title: 'E-Commerce Optimization',
      desc: 'Building high-conversion e-commerce stores with WooCommerce, complete with custom checkouts, payment gateways, and custom product architectures.'
    },
    {
      icon: <Layers size={28} />,
      title: 'UI/UX & Responsive Frontend',
      desc: 'Crafting beautiful, pixel-perfect interfaces using HTML-5 and CSS-3, styled seamlessly to provide cohesive desktop and mobile user journeys.'
    },
    {
      icon: <Terminal size={28} />,
      title: 'Python Scripts & Scraping',
      desc: 'Creating custom data scrapers, automated content migration pipelines, and data processing scripts to feed and power dynamic CMS platforms.'
    }
  ];

  return (
    <section className="tab-content" id="section-about">
      <h2 className="section-title">About Me</h2>
      <p className="about-intro">
        I am a results-driven WordPress Developer specializing in building high-performance, 
        responsive, and visually compelling web experiences. With deep expertise in CMS ecosystem 
        management, custom theme styling, and e-commerce optimization, I bridge the gap between 
        clean code and impactful UI/UX design.
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
