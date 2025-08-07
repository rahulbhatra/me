import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { useInView } from 'react-intersection-observer';
import skills from '../data/skills.json';

const Skills = () => {
    return (
        <section className="page-section" id="skills">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Skills</h2>
                    <h3 className="section-subheading text-muted">
                        Skills are to build over time and polishing them again and again is demand of time.
                    </h3>
                </div>
                
                <div className="professional-skills row">
                    {skills.map(skill => <SkillItem skill={skill} />)}
                </div>        
            </div>
        </section>
    );
}

const SkillItem = ({skill}) => {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
    const percentage = inView ? skill.progress : 0;
    return (
        <div key={skill.id} className="col-lg-2 col-md-3 col-sm-4 col-4">
            <div className="progress-skill">
                <div ref={ref}>
                    <CircularProgressbarWithChildren value={percentage}
                        background={true}
                        styles={buildStyles({width: 100, height: 100, pathTransitionDuration: 2})}
                    >
                        <i className={skill.icon} style={{position:'relative',
                            top: 'calc(45% - 10px)', fontSize: '40px',
                            color: 'white'}}></i>
                    </CircularProgressbarWithChildren>
                </div>  
                <h6 className="skill-name">{skill.name}</h6>
            </div>
        </div>
    )
}

export default Skills;