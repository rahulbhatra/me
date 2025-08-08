import './App.css';
import 'react-circular-progressbar/dist/styles.css';
import React, { useState, useEffect }  from 'react';
import 'react-vertical-timeline-component/style.min.css';


// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import ContactMe from './components/ContactMe';

// Particles
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";


function App() {

  const [ init, setInit ] = useState(false);
    useEffect(() => {
      initParticlesEngine(async (engine) => {
          await loadSlim(engine);
      }).then(() => {
          setInit(true);
      });
  }, []);

  const particlesLoaded = (container) => {
      console.log("particles loaded", container);
  };

  return (
    <div className="App">
      { init && <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: ["#FD4370", "#FFFFFF", "#00FFFF", "#FFD700"],
                    },
                    links: {
                        color: ["#FD4370", "#FFFFFF", "#00FFFF", "#FFD700"],
                        distance: 200,
                        enable: true,
                        opacity: 0.3,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 60,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: ["circle", "triangle"],
                    },
                    size: {
                        value: { min: 1, max: 7 },
                    },
                },
                detectRetina: true,
            }}
        />
      }
      <Navbar />
      <Header />
      <Skills />
      <Projects />
      <Experience />
      <About />
      <ContactMe />
    </div>
  );
}

export default App;
