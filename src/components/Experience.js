import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

const timeLineElements = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'Metacube Software Pvt Ltd',
        location: 'Jaipur, Rajasthan/India',
        date: 'December 2018 - November 2020',
        icon: 'Metacube',
        descriptions: [
            {
                id: 1,
                work: 'Built Student Enrollment System for Client University.'
            },
            {
                id: 2,
                work: 'Integrated Jasper Server to Web Application Server for automatic report generation.'
            },
            {
                id: 3,
                work: 'Designed and Built Student Document Mangement Tracker.'
            },
            {
                id: 4,
                work: 'Created Admission Registration System.'
            },
            {
                id: 5,
                work: 'Migrated Old PHP based Client System to Java based Web Application Server.'
            },
            {
                id: 6,
                work: 'Migrated from google authentication to OAuth for Cost cutting.'
            }
        ]
    },
    {
        id: 2,
        title: 'Graduate Engineer Trainee',
        company: 'Metacube Software Pvt Ltd',
        location: 'Jaipur, Rajasthan/India',
        icon: 'Metacube',
        date: 'July 2018 - December 2018',
        descriptions: [
            {
                id: 1,
                work: 'Trained in different areas of software development.'
            },
            {
                id: 2,
                work: 'Build an Employee Review System.'
            }
        ]
    },
    {
        id: 3,
        title: 'Trainee',
        company: 'BSNL Telecom Factory',
        location: 'Jaipur, Rajasthan (India)',
        icon: 'BSNL',
        date: 'June 2017 - July 2017',
        descriptions: [
            {
                id: 1,
                work: 'Learned about Telecommunication Networks, Fiber-Optics, Communication Technologies, Mobile Communication, Broadband Technologies, and Intelligent Networks.'
            }
        ]
    },
    {
        id: 4,
        title: 'Trainee',
        company: 'The National Institute of Information Technology (NIIT)',
        location: 'Jaipur, Rajasthan (India)',
        icon: 'NIIT',
        date: 'July 2016 - July 2016',
        descriptions: [
            {
                id: 1,
                work: 'Learned about Telecommunication Networks, Fiber-Optics, Communication Technologies, Mobile Communication, Broadband Technologies, and Intelligent Networks.'
            }
        ]
    },

];

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
                {timeLineElements.map(timeLineElement => {
                    return (
                        <VerticalTimelineElement
                            key={timeLineElement.id}
                            // date={timeLineElement.date}
                            // dateClassName="timeline-date"
                            iconStyle={{ backgroundColor: '#141628'}}
                            icon=
                            {
                                // <img src={timeLineElement.icon} className="rounded-circle img-fluid timeline-img center" alt={timeLineElement.id} />
                                <div className="timeline-icon text-uppercase">{timeLineElement.icon}</div>
                            }
                        >
                            <h5 className="vertical-timeline-element-title">{timeLineElement.date}</h5>
                            <h5 className="vertical-timeline-element-title">{timeLineElement.company}</h5>
                            <h5 className="vertical-timeline-element-subtitle text-muted">{timeLineElement.location}</h5>
                            <div className="description text-muted">
                                {timeLineElement.title}
                                <ul align="justify">
                                    {timeLineElement.descriptions.map(description => {
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
