import React, { useEffect, useState } from 'react';
import { LayoutGrid, Paintbrush, Terminal } from 'lucide-react';

export default function SkillsSection() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Delay slightly to allow the tab content to render and trigger transition
    const timer = setTimeout(() => setAnimate(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const skillGroups = [
    {
      title: 'CMS & Page Builders',
      icon: <LayoutGrid size={20} />,
      skills: [
        { name: 'WordPress', level: 95 },
        { name: 'Elementor Pro', level: 92 },
        { name: 'WooCommerce', level: 90 },
        { name: 'WPBakery & PHP', level: 85 }
      ]
    },
    {
      title: 'Frontend, SEO & Web Performance',
      icon: <Paintbrush size={20} />,
      skills: [
        { name: 'HTML5 & CSS3', level: 92 },
        { name: 'SEO & Optimization', level: 90 },
        { name: 'Core Web Vitals', level: 88 },
        { name: 'UI/UX Design', level: 85 }
      ]
    },
    {
      title: 'Python & Web Scraping',
      icon: <Terminal size={20} />,
      skills: [
        { name: 'Python & Web Scraping', level: 90 },
        { name: 'Scrapy & BeautifulSoup', level: 88 },
        { name: 'Selenium & IP Rotation', level: 85 },
        { name: 'Data Annotation & AI', level: 88 }
      ]
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
                <div key={skillIdx} className="skill-card" id={`skill-card-${groupIdx}-${skillIdx}`}>
                  <div className="skill-info">
                    <div className="skill-name-container">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div 
                      className="progress-bar-fill" 
                      style={{ width: animate ? `${skill.level}%` : '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
