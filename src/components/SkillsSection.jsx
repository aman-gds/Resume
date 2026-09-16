import React from 'react';
import { LayoutGrid, Paintbrush, Terminal } from 'lucide-react';

export default function SkillsSection() {
  const skillGroups = [
    {
      title: 'CMS & Page Builders',
      icon: <LayoutGrid size={20} />,
      skills: ['WordPress', 'Elementor Pro', 'WooCommerce', 'WPBakery', 'PHP', 'cPanel & Hosting']
    },
    {
      title: 'Frontend, SEO & Web Performance',
      icon: <Paintbrush size={20} />,
      skills: ['HTML5', 'CSS3', 'SEO & Technical SEO', 'Core Web Vitals', 'UI/UX Design', 'Responsive Design']
    },
    {
      title: 'Python & Web Scraping',
      icon: <Terminal size={20} />,
      skills: ['Python', 'Scrapy', 'BeautifulSoup', 'Selenium', 'IP Rotation', 'Data Annotation & AI']
    }
  ];

  return (
    <section className="tab-content" id="section-skills">
      <h2 className="section-title">My Skills</h2>

      <div className="skills-container">
        {skillGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="skills-category" id={`skills-group-${groupIdx}`}>
            <h3 className="skills-category-title">
              {group.title}
            </h3>
            
            <div className="skills-grid">
              {group.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="skill-pill"
                  id={`skill-pill-${groupIdx}-${skillIdx}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
