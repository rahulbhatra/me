import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import Metacube from '../metacube.png';
import IIT from '../iit.png';
import BSNL from '../bsnl.png';
import NIIT from '../niit.png'

const timeLineElements = [
    {
        id: 1,
        title: 'Software Engineer',
        company: 'Metacube Software Pvt Ltd',
        location: 'Jaipur, Rajasthan/India',
        date: 'December 2018 - November 2020',
        icon: Metacube,
        descriptions: [
            'Built Student Enrollment System for Client University.',
            'Integrated Jasper Server to Web Application Server for automatic report generation.',
            'Designed and Built Student Document Mangement Tracker.',
            'Created Admission Registration System.',
            'Migrated Old PHP based Client System to Java based Web Application Server.',
            'Migrated from google authentication to OAuth for Cost cutting.'
        ]
    },
    {
        id: 2,
        title: 'Graduate Engineer Trainee',
        company: 'Metacube Software Pvt Ltd',
        location: 'Jaipur, Rajasthan/India',
        icon: Metacube,
        date: 'July 2018 - December 2018',
        descriptions: [
            'Trained in different areas of software development.',
            'Build an Employee Review System.'

        ]
    },
    {
        id: 3,
        title: 'Trainee',
        company: 'BSNL Telecom Factory',
        location: 'Jaipur, Rajasthan (India)',
        icon: BSNL,
        date: 'June 2017 - July 2017',
        descriptions: [
            'Learned about Telecommunication Networks, Fiber-Optics, Communication Technologies, Mobile Communication, Broadband Technologies, and Intelligent Networks.'
        ]
    },
    {
        id: 4,
        title: 'Trainee',
        company: 'NIIT',
        location: 'Jaipur, Rajasthan (India)',
        icon: NIIT,
        date: 'July 2016 - July 2016',
        descriptions: [
            'Learned about Telecommunication Networks, Fiber-Optics, Communication Technologies, Mobile Communication, Broadband Technologies, and Intelligent Networks.'
        ]
    },

];

const Experience = () => {

  return (
    <section className="page-section">

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
                            iconStyle={{ backgroundColor: '#fff'}}
                            icon=
                            {
                                <img src={timeLineElement.icon} className="rounded-circle img-fluid timeline-img center" alt={timeLineElement.id} />
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
                                            <li>{description}</li>
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
