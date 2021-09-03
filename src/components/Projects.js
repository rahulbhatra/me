import React from 'react';
import SeparatingPoints from '../separating_points.jpg';
import CrimeAnalysis from '../crime_analysis.jpg';
import Portfolio from '../portfolio.jpg';

const projects = [
    {
        img: SeparatingPoints, 
        name: 'Separating points by parallel axis Lines',
        description: 'SEPARATING POINTS BY AXIS-PARALLEL LINES has applications to fault-tolerant multimodal sensor fusion in the context of embedded sensor networks.'
    },
    {
        img: CrimeAnalysis,
        name: 'Crime Analysis And Prediction',
        description: 'Analyzed Crime in the Chicago City and Used different regression models to compare the accuracy of predictions.' +
        'Used the combination of Time-series and expanding window techniques to get the predictions.'
    },
    {
        img: Portfolio,
        name: 'Portfolio',
        description: 'Created portfolio using react, bootstrap, HTML5 and CSS3.'
    }
];

const Projects = () => {
    return (
        <section className="second-page-section" id="projects">
            <div className="container">
                <div className="text-center">
                    <h2 className="second-section-heading text-uppercase">Projects</h2>
                    <h3 className="section-subheading text-muted">
                        Projects give you idea of thinking capabilities of a person.
                    </h3>
                </div>

                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row carousel-img">
                                <div className="col-md-6 col-12">
                                    <img src={SeparatingPoints} className="d-block project-img" alt="Separating Points"/>
                                </div>
                                <div className="col-md-6 col-12 carousel-info">
                                    <h5 className="carousel-info-header">Separating Points Using Axis Parallel Lines</h5>
                                    <p className="text-muted">SEPARATING POINTS BY AXIS-PARALLEL LINES has applications to fault-tolerant multimodal sensor fusion in the context of embedded sensor networks.</p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row carousel-img">
                                <div className="col-md-6 col-12">
                                    <img src={CrimeAnalysis} className="d-block project-img" alt="Separating Points"/>
                                </div>
                                <div className="col-md-6 col-12 carousel-info">
                                    <h5 className="carousel-info-header">Crime Analysis And Prediction</h5>
                                    <p className="text-muted">
                                        Analyzed Crime in the Chicago City and Used different regression models to compare the accuracy of predictions.
                                        Used the combination of Time-series and expanding window techniques to get the predictions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="carousel-item">
                            <div className="row carousel-img">
                                <div className="col-md-6 col-12">
                                    <img src={Portfolio} className="d-block project-img" alt="Separating Points"/>
                                </div>
                                <div className="col-md-6 col-12 carousel-info">
                                    <h5 className="carousel-info-header">Portfolio</h5>
                                    <p className="text-muted">
                                        Implemented Portfolio Application Using React, JavaScript, Bootstrap, HTML5 and CSS3.
                                    </p>
                                </div>
                            </div>
                        </div>

                            
                        {/* <div className="carousel-item active" data-bs-interval="10000">
                            <img src={SeparatingPoints} className="d-block project-img" alt="Separating Points"/>
                            <h5>Separating Points Using Axis Parallel Lines</h5>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Separating Points Using Axis Parallel Lines</h5>
                                <p>SEPARATING POINTS BY AXIS-PARALLEL LINES has applications to fault-tolerant multimodal sensor fusion in the context of embedded sensor networks.</p>
                            </div>
                        </div> */}
                        {/* <div className="carousel-item" data-bs-interval="2000">
                            <img src={CrimeAnalysis} className="d-block project-img" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Crime Analysis And Prediction</h5>
                                <p>
                                    Analyzed Crime in the Chicago City and Used different regression models to compare the accuracy of predictions.
                                    Used the combination of Time-series and expanding window techniques to get the predictions.
                                </p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={Portfolio} className="d-block project-img" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Portfolio</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div> */}
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

export default Projects;