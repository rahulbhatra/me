import './App.css';
import 'react-circular-progressbar/dist/styles.css';
import React  from 'react';


// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';

// Particles
import Particles from 'react-particles-js';
import Skills from './components/Skills';

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
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 5,
                color: "#FD4370"
              }
            }

          }
        }}
      />
      <Navbar />
      <Header />
      <Skills />
    </div>
  );
}

export default App;
