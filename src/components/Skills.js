const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};
import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { useInView } from 'react-intersection-observer';
import skills from '../data/skills.json';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-pink-500 to-cyan-600 uppercase">Skills</h2>
          <p className="mt-3 text-base md:text-lg text-gray-600">A quick snapshot of the tools I use and how confident I am with each.</p>
        </div>

        {/* Skill grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8"
        >
          {skills.map((skill) => (
            <SkillItem key={skill.name} skill={skill} />)
          )}
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ skill }) => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });
  const percentage = inView ? skill.progress : 0;
  const col = skill.color || '#10b981';

  return (
    <motion.div
      className="group relative rounded-xl bg-white dark:bg-gray-900 p-4 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 transition hover:-translate-y-1 hover:shadow-lg"
      title={`${skill.name} • ${skill.progress}%`}
      variants={item}
      style={{ willChange: 'transform, opacity' }}
    >
      <div ref={ref}>
        {/* Circle wrapper with colored glow */}
        <div
          className="relative mx-auto w-24 h-24 md:w-28 md:h-28"
          style={{ filter: `drop-shadow(0 6px 18px ${hexToRgba(col, 0.35)})` }}
        >
          <CircularProgressbarWithChildren
            value={percentage}
            background={true}
            styles={buildStyles({
              pathTransitionDuration: 2,
              backgroundColor: '#111827', // gray-900
              trailColor: 'rgba(255,255,255,0.18)',
              textColor: '#ffffff',
              pathColor: col,
            })}
          >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              {skill.name === "Micronaut" ? (<i className={`text-white text-4xl`} aria-hidden="true">M</i>) : (<i className={`${skill.icon} text-white text-4xl`} aria-hidden="true"></i>)}
            </div>
          </CircularProgressbarWithChildren>

          {/* Percentage badge */}
          <span
            className="absolute -bottom-2 right-0 rounded-full bg-white dark:bg-gray-800 px-2 py-0.5 text-[11px] font-semibold text-gray-900 dark:text-gray-100 ring-1 ring-gray-200 dark:ring-gray-700 shadow-sm"
            style={{ color: '#0b1220' }}
            aria-hidden
          >
            {skill.progress}%
          </span>
        </div>
      </div>

      {/* Name */}
      <h6 className="mt-3 text-center text-sm font-semibold text-gray-800 dark:text-gray-100">{skill.name}</h6>

      {/* Color pill */}
      <div className="mt-2 flex justify-center">
        <span
          className="inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] font-medium ring-1 ring-inset dark:text-gray-100 dark:ring-gray-700"
          style={{ backgroundColor: hexToRgba(col, 0.08), color: col, borderColor: hexToRgba(col, 0.25) }}
        >
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: col }} aria-hidden />
          {skill.category || 'Core'}
        </span>
      </div>

      {/* Hover underline accent */}
      <div className="pointer-events-none mt-3 h-0.5 w-0 bg-gradient-to-r from-emerald-400 via-pink-400 to-cyan-400 transition-[width] duration-300 group-hover:w-full" />
    </motion.div>
  );
};

/**
 * Convert hex color to rgba string with given alpha.
 */
function hexToRgba(hex, alpha = 1) {
  try {
    const sanitized = hex.replace('#', '');
    const bigint = parseInt(sanitized.length === 3
      ? sanitized.split('').map((c) => c + c).join('')
      : sanitized, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } catch (e) {
    return `rgba(16, 185, 129, ${alpha})`; // fallback emerald
  }
}

export default Skills;