import React from 'react';
// import ProgressProvider from "./ProgressProvider";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import ReactVisibilitySensor from 'react-visibility-sensor';

const skill_names = [
                        {name: "Java", progress: 100, icon: "devicon-java-plain"},
                        {name: "JavaScript", progress: 95, icon: "devicon-javascript-plain"},
                        {name: "C", progress: 85, icon: "devicon-c-plain"},
                        {name: "C++", progress: 95, icon: "devicon-cplusplus-plain"},
                        {name: "Python", progress: 95, icon: "devicon-python-plain"},
                        {name: "HTML5", progress: 80, icon: "devicon-html5-plain"},
                        {name: "CSS3", progress: 80, icon: "devicon-css3-plain"},
                        // {name: "JSON", progress: 90, icon: ""},
                        {name: "Shell Scripting", progress: 70, icon: "devicon-c-plain"},
                        {name: "Git", progress: 100, icon: "devicon-git-plain"},
                        {name: "Jira", progress: 100, icon: "devicon-jira-plain"},
                        {name: "IntelliJ IDEA", progress: 100, icon: "devicon-intellij-plain"},
                        // {name: "Eclipse", progress: 80, icon: "devicon-eclipse-plain"},
                        {name: "PyCharm", progress: 100, icon: "devicon-pycharm-plain"},
                        {name: "MySql", progress: 90, icon: "devicon-mysql-plain"},
                        {name: "Ubuntu", progress: 100, icon: "devicon-ubuntu-plain"},
                        {name: "Windows", progress: 90, icon: "devicon-windows8-plain"},
                        {name: "MacOs", progress: 90, icon: "devicon-apple-plain"},
                        {name: "Spring", progress: 90, icon: "devicon-spring-plain"},
                        {name: "Spring Boot", progress: 90, icon: "devicon-spring-plain"},
                        {name: "Spring MVC", progress: 90, icon: "devicon-spring-plain"},
                        {name: "Spring Security", progress: 85, icon: "devicon-spring-plain"},
                        // {name: "JPA", progress: 95, icon: ""},
                        {name: "Android", progress: 95, icon: "devicon-android-plain"},
                        // {name: "Hibernate", progress: 95},
                        // {name: "OAuth 2.0", progress: 80},
                        {name: "Django", progress: 70, icon: "devicon-django-plain"},
                        {name: "Angular", progress: 90, icon: "devicon-angularjs-plain"},
                        {name: "Bootstrap", progress: 95, icon: "devicon-bootstrap-plain"},
                        // {name: "Jasper Reports", progress: 75},
                        {name: "React", progress: 90, icon: "devicon-react-plain"}
                    ];

const Skills = () => {
    return (
        <section className="page-section" id="skills">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Skills</h2>
                    <h3 className="section-subheading text-muted">
                        Skills are to build over time and repolishing them again and again is demand of time.
                    </h3>
                </div>
                
                <div className="professional-skills row">
                    {skill_names.map(skill => {
                        return (
                            <div className="col-lg-2 col-md-3 col-sm-4 col-4">
                                <div className="progress-skill">
                                    <ReactVisibilitySensor>
                                        {({ isVisible }) => {
                                            const percentage = isVisible ? skill.progress : 0;
                                            return (
                                                <CircularProgressbarWithChildren value={percentage}
                                                    background={true}
                                                    style={buildStyles({width: 100, height: 100, pathTransitionDuration: 2})}
                                                >
                                                    <i className={skill.icon} style={{position:'relative',
                                                        top: 'calc(45% - 10px)', fontSize: '40px',
                                                        color: 'white'}}></i>
                                                </CircularProgressbarWithChildren>
                                            );
                                        }}  
                                    </ReactVisibilitySensor>
                                    
                                    
                                    <h6 className="skill-name">{skill.name}</h6>
                                </div>
                            </div>
                        )
                    })}
                </div>        
            </div>
        </section>
    );
}

export default Skills;