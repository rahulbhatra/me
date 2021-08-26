import Typed from "react-typed";
import React from "react";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Hi, I'm <span style={{color: "#FD4370"}}>Rahul Sharma</span></h1>
                <Typed
                    className="typed-text"
                    strings={["Java Developer", "Python Developer", "Angular Developer", "React Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                 />
                 <a href="/" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    );
};


export default Header;