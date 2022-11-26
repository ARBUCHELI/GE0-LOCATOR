import ReactDOM from 'react-dom';
import React from 'react';
import { LongitudeLatitudeDisplay } from './components/LongitudeLatitudeDisplay.js';
import { HemisphereDisplay } from './components/HemisphereDisplay.js';

function App() {
  return (
    <div>
      <h1 style={{border: "2px solid #6b5b95", backgroundColor: "transparent", borderRadius: "10px", fontSize: "40px", color:"#deeaee"}}>GEO TRACKER APP</h1>
      <main>
        <h1 style={{color: "#bd5734", fontWeight: "bold"}}>Your Coordinates</h1>
        <LongitudeLatitudeDisplay />
        <HemisphereDisplay />
      </main>
    </div>
   
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
