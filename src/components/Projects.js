import React from 'react';
import projectList from '../data/projects.json';
import SeparatingPoints from '../separating_points.jpg';
import CrimeAnalysis from '../crime_analysis.jpg';
import Portfolio from '../portfolio.jpg';
import SmartPortables from '../SmartPortables.png';
import HomeWeather from '../HomeWeather.png';

const images = [SmartPortables, HomeWeather, SeparatingPoints, CrimeAnalysis, Portfolio];

const Projects = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 uppercase">Projects</h2>
          <p className="mt-3 text-base md:text-lg text-gray-600">A snapshot of what I build and how I think.</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <ProjectCard key={project.header} project={project} image={images[index]} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, image }) => {
  const hasGithub = Boolean(project.github_link);
  const hasDemo = Boolean(project.demo_link);
  const tags = Array.isArray(project.tags) ? project.tags : [];

  return (
    <article className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200 transition transform hover:-translate-y-1 hover:shadow-2xl">
      {/* Gradient border on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-300/0 via-pink-300/0 to-cyan-300/0 group-hover:from-emerald-300/30 group-hover:via-pink-300/20 group-hover:to-cyan-300/30" />

      {/* Image */}
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={project.header}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gray-100 text-gray-400">No image</div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* Content */}
      <div className="relative p-5 sm:p-6">
        <h3 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-pink-500 to-cyan-600">{project.header}</h3>
        <div className="mt-2 h-1 w-12 rounded-full bg-gradient-to-r from-emerald-400 to-pink-400" />
        <p className="mt-4 text-base leading-7 text-gray-700 whitespace-pre-line">{project.description}</p>

        {Array.isArray(project.highlights) && project.highlights.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" aria-hidden />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Tags (optional) */}
        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <li key={t} className="rounded-full bg-gray-100/80 px-2.5 py-1 text-xs font-medium text-gray-800 ring-1 ring-gray-200 hover:bg-gray-200">
                {t}
              </li>
            ))}
          </ul>
        )}

        {/* Actions */}
        {(hasGithub || hasDemo) && (
          <div className="mt-6 border-t border-gray-100 pt-4 flex flex-wrap items-center gap-3">
            {hasGithub && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white transition hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                aria-label={`Open GitHub for ${project.header}`}
              >
                <i className="devicon-github-original text-lg" aria-hidden="true" />
                GitHub
              </a>
            )}
            {hasDemo && (
              <a
                href={project.demo_link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg ring-1 ring-gray-300 px-3 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label={`Open live demo for ${project.header}`}
              >
                <span className="material-icons-outlined text-base" aria-hidden>
                  open_in_new
                </span>
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default Projects;