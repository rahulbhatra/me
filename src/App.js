import './App.css';
import React  from 'react';

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';

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
    </div>
  );
}

export default App;
