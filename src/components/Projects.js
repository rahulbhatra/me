import React from 'react';
import projectList from '../data/projects.json';

const Projects = () => {
    return (
        <section className="second-page-section" id="projects">
            <div className="container">
                <div className="text-center">
                    <h2 className="second-section-heading text-uppercase">Projects</h2>
                    <h3 className="section-subheading text-white">
                        Projects give you idea of thinking capabilities of a person.
                    </h3>
                </div>

                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {projectList.map((project, index) => {
                            const databsslideto = index.toString();
                            const active = index === 0;
                            return (
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={databsslideto} className={active ? "active" : ""} aria-current={active ? "true" : ""} aria-label={`Slide ${index}`}></button>
                            )
                        })}
                    </div>
                    <div className="carousel-inner">
                        {projectList.map((project, index) => {
                            return <ProjectSlide key={project.header} project={project} active={index === 0} />
                        })}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                
            </div>
        </section>
    );
};


const ProjectSlide = ({ project, active }) => {
  return (
    <div className={`carousel-item ${active ? "active": ""}`}>
        <div className="row carousel-img">
            <div className="col-md-6 col-12">
                <img src={project.img} alt={project.header} className="d-block project-img border-2 border-dark rounded"/>
            </div>
            <div className="col-md-6 col-12 carousel-info">
                <h5 className="carousel-info-header">{project.header}</h5>
                <p className="text-white">
                    {project.description}
                </p>
                <a className="project-icon" href={project.github_link}>
                <i className={'devicon-github-original colored'} style={{position:'relative',
                                    fontSize: '100px',
                                    color: 'white'}}></i>
                </a>
            </div>
        </div>
    </div>
  );
}

export default Projects;