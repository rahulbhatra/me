import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { useInView } from 'react-intersection-observer';
import skills from '../data/skills.json';

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 uppercase">Skills</h2>
          <p className="mt-3 text-base md:text-lg text-gray-500">Skills are developed over time; continuous refinement is essential.</p>
        </div>

        {/* Skill grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {skills.map((skill) => (
            <SkillItem key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ skill }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const percentage = inView ? skill.progress : 0;

  return (
    <div className="flex flex-col items-center text-center">
      <div ref={ref}>
        <div className="relative w-24 h-24 md:w-28 md:h-28">
          <CircularProgressbarWithChildren
            value={percentage}
            background={true}
            styles={buildStyles({
              pathTransitionDuration: 4,
              backgroundColor: '#111827',
              trailColor: 'rgba(255,255,255,0.2)',
              textColor: '#ffffff',
              pathColor: '#10b981', 
            })}
          >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <i className={`${skill.icon} text-white text-4xl`} aria-hidden="true"></i>
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
      <h6 className="mt-3 text-sm font-medium text-gray-800">{skill.name}</h6>
    </div>
  );
};

export default Skills;