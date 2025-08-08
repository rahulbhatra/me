import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import experiences from '../data/experience.json'

const Experience = () => {

  return (
    <section className="page-section" id="experience">

        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Experience</h2>
                <h3 className="section-subheading text-muted">
                    Experience is just timeline.
                </h3>
            </div>
        
            <VerticalTimeline>
                {experiences.map(experience => {
                    return (
                        <VerticalTimelineElement
                            className="animate__animated animate__fadeInUp"
                            key={experience.id}
                            iconStyle={{ backgroundColor: '#141628'}}
                            icon=
                            {
                                <div className="timeline-icon flex-center text-uppercase">{experience.icon}</div>
                            }
                        >
                            <h5 className="vertical-timeline-element-title">{experience.date}</h5>
                            <h5 className="vertical-timeline-element-title">{experience.company}</h5>
                            <h5 className="vertical-timeline-element-subtitle text-muted">{experience.location}</h5>
                            <div className="description text-muted">
                                <h5 className="text-bold">{experience.title}</h5>
                                <ul align="justify">
                                    {experience.descriptions.map((description, i) => {
                                        return (
                                            <li key={description.id}>{description.work}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </VerticalTimelineElement>

                    )
                })}
            </VerticalTimeline>
            
        </div>
    </section>
  );
};

export default Experience;
