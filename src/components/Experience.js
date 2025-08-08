import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import experiences from '../data/experience.json';

const Experience = () => {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="experience-title" className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 uppercase">Experience</h2>
          <p className="mt-3 text-base md:text-lg text-gray-500">Experience is a story told over time.</p>
        </div>

        <VerticalTimeline animate={true} lineColor="#0e337cff" className="[&_.vertical-timeline-element-date]:text-gray-500">
          {experiences.map((experience) => {
            return (
            <VerticalTimelineElement
              key={experience.id}
              contentStyle={{ background: 'rgba(17,24,39,0.85)', color: '#fff', borderRadius: '0.75rem', boxShadow: '0 10px 25px rgba(0,0,0,0.15)' }}
              contentArrowStyle={{ borderRight: '7px solid rgba(17,24,39,0.85)' }}
              iconStyle={{ color: '#fff', boxShadow: '0 0 0 6px rgba(16,185,129,0.35)' }}
              icon={ <div className="timeline-icon">{experience.icon} </div>}
            >
              {/* Date */}
              <p className="text-xs uppercase tracking-wide text-emerald-300/90">{experience.date}</p>

              {/* Company & Location */}
              <h3 className="mt-1 text-xl font-semibold text-white">{experience.company}</h3>
              {experience.location && (
                <p className="text-sm text-gray-300">{experience.location}</p>
              )}

              {/* Title */}
              <h4 className="mt-3 text-lg font-medium text-emerald-300">{experience.title}</h4>

              {/* Bullets */}
              {Array.isArray(experience.descriptions) && (
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-gray-100/90">
                  {experience.descriptions.map((description, idx) => (
                    <li key={description.id ?? `${experience.id}-${idx}`} className="leading-relaxed">
                      {description.work}
                    </li>
                  ))}
                </ul>
              )}
            </VerticalTimelineElement>
          )
        })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
