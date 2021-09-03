import React from 'react';
// import ProgressProvider from "./ProgressProvider";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import ReactVisibilitySensor from 'react-visibility-sensor';

const skill_names = [
                        {id: 1,name: "Java", progress: 100, icon: "devicon-java-plain"},
                        {id: 2,name: "JavaScript", progress: 95, icon: "devicon-javascript-plain"},
                        {id: 3,name: "C", progress: 85, icon: "devicon-c-plain"},
                        {id: 4,name: "C++", progress: 95, icon: "devicon-cplusplus-plain"},
                        {id: 5,name: "Python", progress: 95, icon: "devicon-python-plain"},
                        {id: 6,name: "HTML5", progress: 80, icon: "devicon-html5-plain"},
                        {id: 7,name: "CSS3", progress: 80, icon: "devicon-css3-plain"},
                        // {id: ,name: "JSON", progress: 90, icon: ""},
                        {id: 8,name: "Shell Scripting", progress: 70, icon: "devicon-c-plain"},
                        {id: 9,name: "Git", progress: 100, icon: "devicon-git-plain"},
                        {id: 10,name: "Jira", progress: 100, icon: "devicon-jira-plain"},
                        {id: 11,name: "IntelliJ IDEA", progress: 100, icon: "devicon-intellij-plain"},
                        // {id: ,name: "Eclipse", progress: 80, icon: "devicon-eclipse-plain"},
                        {id: 12,name: "PyCharm", progress: 100, icon: "devicon-pycharm-plain"},
                        {id: 13,name: "MySql", progress: 90, icon: "devicon-mysql-plain"},
                        {id: 14,name: "Ubuntu", progress: 100, icon: "devicon-ubuntu-plain"},
                        {id: 15,name: "Windows", progress: 90, icon: "devicon-windows8-plain"},
                        {id: 16,name: "MacOs", progress: 90, icon: "devicon-apple-plain"},
                        {id: 17,name: "Spring", progress: 90, icon: "devicon-spring-plain"},
                        {id: 18,name: "Spring Boot", progress: 90, icon: "devicon-spring-plain"},
                        {id: 19,name: "Spring MVC", progress: 90, icon: "devicon-spring-plain"},
                        {id: 20,name: "Spring Security", progress: 85, icon: "devicon-spring-plain"},
                        // {id: ,name: "JPA", progress: 95, icon: ""},
                        {id: 21,name: "Android", progress: 95, icon: "devicon-android-plain"},
                        // {id: ,name: "Hibernate", progress: 95},
                        // {id: ,name: "OAuth 2.0", progress: 80},
                        {id: 22,name: "Django", progress: 70, icon: "devicon-django-plain"},
                        {id: 23,name: "Angular", progress: 90, icon: "devicon-angularjs-plain"},
                        {id: 24,name: "Bootstrap", progress: 95, icon: "devicon-bootstrap-plain"},
                        // {id: ,name: "Jasper Reports", progress: 75},
                        {id: 25,name: "React", progress: 90, icon: "devicon-react-plain"}
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
                            <div key={skill.id} className="col-lg-2 col-md-3 col-sm-4 col-4">
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