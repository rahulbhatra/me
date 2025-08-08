import Typed from "react-typed-component";
import React from "react";

const Header = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-pink">
            <div className="text-center p-6 space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold">
                    Hi, I'm <span className="text-pink">Rahul Sharma</span>
                </h1>
                <Typed
                    className="text-lg md:text-2xl text-gray-200 opacity-90"
                    strings={[
                        "Java Developer",
                        "Python Developer",
                        "Angular Developer",
                        "React Developer"
                    ]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <div className="pt-4">
                    <a
                        href="/me/#contact"
                        className="inline-block px-6 py-3 bg-pink text-white rounded-lg shadow-md hover:bg-pink/80 transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Header;