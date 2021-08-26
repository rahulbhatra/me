import React from 'react';

// React Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand logo" href="/">Rahul Sharma</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto justify-content-end container-fluid">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">SKILLS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">PROJECTS</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/">EXPERIENCE </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">ABOUT ME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">CONTACT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

};

export default Navbar;