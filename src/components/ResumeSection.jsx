import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function ResumeSection() {
  const experiences = [
    {
      title: 'WordPress Developer',
      company: 'Elevate Talent & Marketing',
      location: 'Remote – Markham, Canada',
      period: 'July 2024 – Present',
      bullets: [
        'Develop and customize responsive, high-performing WordPress and WooCommerce websites using Elementor Pro, WPBakery, and custom PHP.',
        'Successfully improved website page speed scores by 35% and increased organic traffic through targeted technical SEO optimizations.',
        'Oversee payment gateway integrations, security patching, and core updates, collaborating with UI/UX designers to boost user engagement and conversions by 15%.'
      ]
    },
    {
      title: 'Data Scraping Specialist',
      company: 'Grand Digitals Pvt Ltd',
      location: 'Karachi, Pakistan',
      period: 'March 2024 – June 2024',
      bullets: [
        'Engineered and maintained automated Python web scraping scripts using Scrapy, BeautifulSoup, and Selenium to reliably extract over 100K data points weekly.',
        'Cleaned, validated, and structured complex unstructured web data into high-quality JSON and CSV formats, utilizing IP rotation strategies to maintain a 98% scraper success rate across dynamic platforms.'
      ]
    },
    {
      title: 'Data Annotator',
      company: 'Grand Digitals Pvt Ltd',
      location: 'Karachi, Pakistan',
      period: 'July 2023 – February 2024',
      bullets: [
        'Precisely labeled and annotated over 20K high-quality text and image dataset points for machine learning and computer vision models.',
        'Partnered closely with data scientists to audit annotations and refine labeling guidelines, ensuring a 99% data accuracy rate and accelerating model training cycles by 20%.'
      ]
    }
  ];

  const education = [
    {
      title: 'Bachelor of Science in Computer Science',
      institution: 'Ilma University',
      location: 'Karachi, Pakistan',
      period: 'December 2024',
      desc: 'Specialized in Software Engineering, Database Systems, and Web Application Development.'
    },
    {
      title: 'Intermediate in Pre-Engineering',
      institution: 'Govt. Degree Boys College Gulzar-e-Hijri',
      location: 'Karachi, Pakistan',
      period: 'Completion: August 2020',
      desc: 'Strong foundation in physics, mathematics, and chemistry.'
    },
    {
      title: 'Matriculation in Science',
      institution: 'Aitchison Model School',
      location: 'Karachi, Pakistan',
      period: 'Completion: August 2017',
      desc: 'Completed secondary education with high marks, specializing in computer science and basic sciences.'
    }
  ];

  return (
    <section className="tab-content" id="section-resume">
      <h2 className="section-title">Resume</h2>

      <div className="resume-columns">
        {/* Experience Column */}
        <div className="resume-column">
          <h3 className="resume-column-title">
            <Briefcase size={22} />
            Experience
          </h3>
          <div className="timeline">
            {experiences.map((exp, idx) => (
              <div key={idx} className="timeline-item" id={`experience-item-${idx}`}>
                <div className="timeline-node"></div>
                <div className="timeline-meta">
                  <span className="timeline-period">{exp.period}</span>
                  <span className="timeline-location">{exp.location}</span>
                </div>
                <h4 className="timeline-title">{exp.title}</h4>
                <div className="timeline-institution">{exp.company}</div>
                <ul className="timeline-bullets">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <li key={bulletIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="resume-column">
          <h3 className="resume-column-title">
            <GraduationCap size={22} />
            Education
          </h3>
          <div className="timeline">
            {education.map((edu, idx) => (
              <div key={idx} className="timeline-item" id={`education-item-${idx}`}>
                <div className="timeline-node"></div>
                <div className="timeline-meta">
                  <span className="timeline-period">{edu.period}</span>
                  <span className="timeline-location">{edu.location}</span>
                </div>
                <h4 className="timeline-title">{edu.title}</h4>
                <div className="timeline-institution">{edu.institution}</div>
                <p className="timeline-desc">{edu.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
