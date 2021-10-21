import React from 'react';
import ProfilePhoto from '../ProfilePhoto.jpeg';


const About = () => {
    return (
        <section className="second-page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="second-section-heading text-uppercase">About Me</h2>
                    <h3 className="section-subheading text-muted">
                        Genius is 1% talent and 99% hardwork.
                    </h3>
                    <img src={ProfilePhoto} className="rounded-circle" style={{width: '200px'}} />
                    <h2 className="text-white">Rahul Sharma</h2>
                    <div className="flex"></div>
                    <p className="text-white">I am a graduate student at Illinois Institute of Technology since Spring 2021. I have two and half years
                        of experience as software engineer. Currently searching for the opportunities as software engineer intern
                        and coop from Jan 2022.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default About;