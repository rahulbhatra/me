import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

const timeLineElements = [
    {
        id: 1,
        title: 'Graduate Teaching Assistant',
        company: 'Illinois Institute of Technology',
        location: 'Chicago, Illinois/USA',
        date: 'September 2020 - Present',
        icon: 'Illnois Tech',
        descriptions: [
            {
                id: 1,
                work: 'Graded assignments, proctored exams and managed slides for Introduction to Algorithms 430 coursework.'
            },
            {
                id: 2,
                work: 'Taught algorithms and cleared doubts in recitation classroom to 40 + students.'
            }
        ]
    },
    {
        id: 2,
        title: 'Software Engineer',
        company: 'Metacube Software Pvt Ltd',
        location: 'Jaipur, Rajasthan/India',
        date: 'December 2018 - November 2020',
        icon: 'Metacube',
        descriptions: [
            {
                id: 1,
                work: 'Experienced Technologies: Java, JavaScript, TypeScript, Spring, AngularJS, Hibernate, SQL, Bootstrap.'
            },
            {
                id: 2,
                work: 'Developed a university applicant enrollment system to facilitate 40,000 + users every year.'
            },
            {
                id: 3,
                work: 'Integrated Jasper Server and Java Web Application to generate reports using TIBCO Jaspersoft tool minimized report' +
                'creation time from 16 hours to 2 hours.'
            },
            {
                id: 4,
                work: 'Reduced hard paper work requirement of client universities to 60% by creating online documents management system.'
            },
            {
                id: 5,
                work: 'Built a system allows admin to create registration forms for university programs to enroll 10,000 plus eligible students in'  +
                'courses for upcoming semesters.'
            },
            {
                id: 6,
                work: 'Migrated data from clients old PHP application to new centralized application university using Async tasks.'
            },
            {
                id: 7,
                work: 'Aided company in cost-cutting by removing dependency of system from google authentication services and shifted' +
                'application authentication to spring security.'
            },
            {
                id: 8,
                work: 'Collaborated in 20 people team to develop web application eases performance review of employees based on set metrics in' +
                'organization quarterly, half yearly or yearly.'
            },
            {
                id: 9,
                work: 'Designed backend data filters for pagination to work on all entities on basis of 30 + common attribute.'
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
