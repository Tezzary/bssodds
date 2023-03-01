import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect, useState } from 'react';
function App() {
  return (
    <div className="App">
      
      < BeeSelect />
      < RoyalJelly />
    </div>
  );
}
function BeeSelect(){
  let [mousePosition, setMousePosition] = useState({x: 600, y: 100});
  
  const mystyle = {
      left: `${mousePosition.x}px`,
      top: `${mousePosition.y}px`
  };
  return (
    <div className="BeeSelectWrapper" style={mystyle}>
      <h1>Choose a Bee</h1>
      <div className="BeeSelect">
        
        <button><img src="http://localhost:8000/static/beeimages/BabyBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/BasicBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/BearBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/BomberBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/BraveBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/BubbleBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/BuckoBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/BumbleBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/BuoyantBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/CarpenterBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/CobaltBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/CommanderBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/CoolBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/CrimsonBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/DemoBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/DemonBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/DiamondBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/DigitalBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/ExhaustedBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/FestiveBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/FireBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/FrostyBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/FuzzyBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/GummyBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/HastyBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/HoneyBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/LionBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/LookerBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/MusicBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/NinjaBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/PhotonBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/PreciseBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/PuppyBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/RadBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/RageBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/RascalBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/RileyBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/ShockedBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/ShyBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/SpicyBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/StubbornBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/TabbyBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/TadpoleBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/VectorBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/ViciousBee.png"></img></button>
        <button><img src="http://localhost:8000/static/beeimages/WindyBee.png"></img></button>
      
      </div>
    </div>
  );
}
function RoyalJelly() {
  let [src, setSrc] = useState("http://localhost:8000/static/beeimages/BasicBee.png");
  let [beeSelectIsOn, setbeeSelectIsOn] = useState(false);

  let beeSelectOn = () => {
    setbeeSelectIsOn(true);
  }
  return (
    <div className="RoyalJelly">
      <div className="Calculation">
        <h1>Odds Of Getting</h1>
        <button><img src="http://localhost:8000/static/beeimages/FuzzyBee.png"></img></button>
        
        <h1>from</h1>
        <form onSubmit={beeSelectOn}><input value="1000"></input></form>
        <img src="http://localhost:8000/static/miscellaneous/RoyalJelly.png"></img>
      </div>
    </div>
  );
}
export default App;
