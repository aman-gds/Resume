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
        'Developed and customized WordPress themes and plugins to meet distinct client business requirements.',
        'Designed and implemented highly responsive websites utilizing Elementor, WPBakery, and custom theme development.',
        'Optimized website performance infrastructure, ensuring rapid loading speeds and SEO-friendly architectures.',
        'Managed ongoing website maintenance, critical security updates, and advanced technical troubleshooting.',
        'Collaborated cross-functionally with designers and content creators to elevate UI/UX and user engagement metrics.',
        'Leveraged WooCommerce for end-to-end eCommerce website development, deep customization, and checkout optimization.'
      ]
    },
    {
      title: 'Data Annotator',
      company: 'Grand Digitals Pvt Ltd',
      location: 'Karachi, Pakistan',
      period: 'July 2023 – February 2024',
      bullets: [
        'Labeled and annotated massive, complex datasets for machine learning models, ensuring absolute accuracy and structural consistency.',
        'Reviewed and validated data integrity to maintain exceptionally high-quality standards in AI training datasets.',
        'Collaborated directly with data scientists and engineers to refine annotation guidelines and optimize model performance.',
        'Maintained strict compliance with project-specific annotation standards and industry best practices.'
      ]
    }
  ];

  const education = [
    {
      title: 'Bachelor of Computer Science',
      institution: 'Ilma University',
      location: 'Karachi, Pakistan',
      period: 'Graduation: December 2024',
      desc: 'Focused on software engineering, database management, web technologies, and computational theories.'
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
