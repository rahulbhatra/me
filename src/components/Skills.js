import { nextElementSibling } from 'domutils';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import IconC from 'react-devicon/c/original';
import IconCplusplus from 'react-devicon/cplusplus/original';

const skill_names = [
                        {name: "Java", progress: 100},
                        {name: "JavaScript", progress: 95},
                        {name: "C", progress: 100},
                        {name: "C++", progress: 100},
                        {name: "Python", progress: 100},
                        {name: "HTML", progress: 100},
                        {name: "CSS", progress: 100},
                        {name: "JSON", progress: 100},
                        {name: "Shell Scripting", progress: 100},
                        {name: "Git", progress: 100},
                        {name: "Jira", progress: 100},
                        {name: "IntelliJ IDEA", progress: 100},
                        {name: "Eclipse", progress: 100},
                        {name: "PyCharm", progress: 100},
                        {name: "MySql", progress: 100},
                        {name: "Ubuntu", progress: 100},
                        {name: "Windows", progress: 100},
                        {name: "MacOs", progress: 100},
                        {name: "Spring", progress: 100},
                        {name: "Spring Boot", progress: 100},
                        {name: "Spring MVC", progress: 100},
                        {name: "Spring Security", progress: 100},
                        {name: "JPA", progress: 100},
                        {name: "Hibernate", progress: 100},
                        {name: "OAuth 2.0", progress: 100},
                        {name: "Django", progress: 100},
                        {name: "Angular", progress: 100},
                        {name: "Bootstrap", progress: 100},
                        {name: "Jasper Reports", progress: 45},
                        {name: "React", progress: 100}
                    ];

const Skills = () => {
    return (
        <section class="page-section" id="skills">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Skills</h2>
                    <h3 class="section-subheading text-muted">
                        Have a beginning, but no end. Not to know is bad; not to wish to know is worse.
                    </h3>
                </div>
                
                <div className="professional-skills row">
                    {skill_names.map(skill => (
                        <div className="col-lg-1 col-md-2 col-sm-4 col-4 progress-skill">
                            <CircularProgressbar value={skill.progress} text={skill.name} background={true}/>
                        </div>
                    ))}
                </div>        
            </div>
        </section>
    );
}

export default Skills;