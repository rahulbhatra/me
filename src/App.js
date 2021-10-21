import './App.css';
import 'react-circular-progressbar/dist/styles.css';
import React  from 'react';
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
import Particles from 'react-particles-js';


function App() {
  return (
    <div className="App">
      <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 500
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 10,
                color: "#fff"
              }
            }

          }
        }}
      />
      <Navbar />
      <Header />
      <Skills />
      {/* <Particles
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 600
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 10,
                color: "#fff"
              }
            }

          }
        }}
      /> */}
      <Projects />
      <Experience />
      <About />
      <ContactMe />
    </div>
  );
}

export default App;
