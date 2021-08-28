import React from 'react';

// React Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <a className="navbar-brand logo" href="/me">Rahul Sharma</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto justify-content-end container-fluid">
                        <li className="nav-item active" key={'skills'}>
                            <a className="nav-link" href="/me/#skills">SKILLS</a>
                        </li>
                        <li className="nav-item" key={'projects'}>
                            <a className="nav-link" href="/me">PROJECTS</a>
                        </li>
                        <li className="nav-item active" key={'experience'}>
                            <a className="nav-link" href="/me">EXPERIENCE </a>
                        </li>
                        <li className="nav-item" key={'about_me'}>
                            <a className="nav-link" href="/me">ABOUT ME</a>
                        </li>
                        <li className="nav-item" key={'contact'}>
                            <a className="nav-link" href="/me">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

};

export default Navbar;