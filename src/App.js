import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
     <Weather/>
     <footer>
      <p>The perfect weather app by Izzy Till via <a href="https://github.com/izzyannatill/perfect-weather-app" target="blank">Github</a>.
     </p>
     </footer>
    </div>
    </div>
  );
}
