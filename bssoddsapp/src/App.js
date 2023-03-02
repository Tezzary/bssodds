import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect, useState } from 'react';
function App() {
  return (
    <div className="App">
      

      < RoyalJelly />
    </div>
  );
}
function BeeSelect(props){
  
  console.log(props)
  const mystyle = {
      left: `${props.beeSelectPosition.x}px`,
      top: `${props.beeSelectPosition.y}px`
  };
  return (
    <div className="BeeSelectWrapper" style={mystyle}>
      <h1>Choose a Bee</h1>
      <div className="BeeSelect">
        
      <button onClick={() => props.callback("BabyBee.png")}><img src="http://localhost:8000/static/beeimages/BabyBee.png"></img></button>
      <button onClick={() => props.callback("BasicBee.png")}><img src="http://localhost:8000/static/beeimages/BasicBee.png"></img></button>
      <button onClick={() => props.callback("BearBee.png")}><img src="http://localhost:8000/static/beeimages/BearBee.png"></img></button>
      <button onClick={() => props.callback("BomberBee.png")}><img src="http://localhost:8000/static/beeimages/BomberBee.png"></img></button>
      <button onClick={() => props.callback("BraveBee.png")}><img src="http://localhost:8000/static/beeimages/BraveBee.png"></img></button>
      <button onClick={() => props.callback("BubbleBee.png")}><img src="http://localhost:8000/static/beeimages/BubbleBee.png"></img></button>
      <button onClick={() => props.callback("BuckoBee.png")}><img src="http://localhost:8000/static/beeimages/BuckoBee.png"></img></button>
      <button onClick={() => props.callback("BumbleBee.png")}><img src="http://localhost:8000/static/beeimages/BumbleBee.png"></img></button>
      <button onClick={() => props.callback("BuoyantBee.png")}><img src="http://localhost:8000/static/beeimages/BuoyantBee.png"></img></button>
      <button onClick={() => props.callback("CarpenterBee.png")}><img src="http://localhost:8000/static/beeimages/CarpenterBee.png"></img></button>
      <button onClick={() => props.callback("CobaltBee.png")}><img src="http://localhost:8000/static/beeimages/CobaltBee.png"></img></button>
      <button onClick={() => props.callback("CommanderBee.png")}><img src="http://localhost:8000/static/beeimages/CommanderBee.png"></img></button>
      <button onClick={() => props.callback("CoolBee.png")}><img src="http://localhost:8000/static/beeimages/CoolBee.png"></img></button>
      <button onClick={() => props.callback("CrimsonBee.png")}><img src="http://localhost:8000/static/beeimages/CrimsonBee.png"></img></button>
      <button onClick={() => props.callback("DemoBee.png")}><img src="http://localhost:8000/static/beeimages/DemoBee.png"></img></button>
      <button onClick={() => props.callback("DemonBee.png")}><img src="http://localhost:8000/static/beeimages/DemonBee.png"></img></button>
      <button onClick={() => props.callback("DiamondBee.png")}><img src="http://localhost:8000/static/beeimages/DiamondBee.png"></img></button>
      <button onClick={() => props.callback("DigitalBee.png")}><img src="http://localhost:8000/static/beeimages/DigitalBee.png"></img></button>
      <button onClick={() => props.callback("ExhaustedBee.png")}><img src="http://localhost:8000/static/beeimages/ExhaustedBee.png"></img></button>
      <button onClick={() => props.callback("FestiveBee.png")}><img src="http://localhost:8000/static/beeimages/FestiveBee.png"></img></button>
      <button onClick={() => props.callback("FireBee.png")}><img src="http://localhost:8000/static/beeimages/FireBee.png"></img></button>
      <button onClick={() => props.callback("FrostyBee.png")}><img src="http://localhost:8000/static/beeimages/FrostyBee.png"></img></button>
      <button onClick={() => props.callback("FuzzyBee.png")}><img src="http://localhost:8000/static/beeimages/FuzzyBee.png"></img></button>
      <button onClick={() => props.callback("GummyBee.png")}><img src="http://localhost:8000/static/beeimages/GummyBee.png"></img></button>
      <button onClick={() => props.callback("HastyBee.png")}><img src="http://localhost:8000/static/beeimages/HastyBee.png"></img></button>
      <button onClick={() => props.callback("HoneyBee.png")}><img src="http://localhost:8000/static/beeimages/HoneyBee.png"></img></button>
      <button onClick={() => props.callback("LionBee.png")}><img src="http://localhost:8000/static/beeimages/LionBee.png"></img></button>
      <button onClick={() => props.callback("LookerBee.png")}><img src="http://localhost:8000/static/beeimages/LookerBee.png"></img></button>
      <button onClick={() => props.callback("MusicBee.png")}><img src="http://localhost:8000/static/beeimages/MusicBee.png"></img></button>
      <button onClick={() => props.callback("NinjaBee.png")}><img src="http://localhost:8000/static/beeimages/NinjaBee.png"></img></button>
      <button onClick={() => props.callback("PhotonBee.png")}><img src="http://localhost:8000/static/beeimages/PhotonBee.png"></img></button>
      <button onClick={() => props.callback("PreciseBee.png")}><img src="http://localhost:8000/static/beeimages/PreciseBee.png"></img></button>
      <button onClick={() => props.callback("PuppyBee.png")}><img src="http://localhost:8000/static/beeimages/PuppyBee.png"></img></button>
      <button onClick={() => props.callback("RadBee.png")}><img src="http://localhost:8000/static/beeimages/RadBee.png"></img></button>
      <button onClick={() => props.callback("RageBee.png")}><img src="http://localhost:8000/static/beeimages/RageBee.png"></img></button>
      <button onClick={() => props.callback("RascalBee.png")}><img src="http://localhost:8000/static/beeimages/RascalBee.png"></img></button>
      <button onClick={() => props.callback("RileyBee.png")}><img src="http://localhost:8000/static/beeimages/RileyBee.png"></img></button>
      <button onClick={() => props.callback("ShockedBee.png")}><img src="http://localhost:8000/static/beeimages/ShockedBee.png"></img></button>
      <button onClick={() => props.callback("ShyBee.png")}><img src="http://localhost:8000/static/beeimages/ShyBee.png"></img></button>
      <button onClick={() => props.callback("SpicyBee.png")}><img src="http://localhost:8000/static/beeimages/SpicyBee.png"></img></button>
      <button onClick={() => props.callback("StubbornBee.png")}><img src="http://localhost:8000/static/beeimages/StubbornBee.png"></img></button>
      <button onClick={() => props.callback("TabbyBee.png")}><img src="http://localhost:8000/static/beeimages/TabbyBee.png"></img></button>
      <button onClick={() => props.callback("TadpoleBee.png")}><img src="http://localhost:8000/static/beeimages/TadpoleBee.png"></img></button>
      <button onClick={() => props.callback("VectorBee.png")}><img src="http://localhost:8000/static/beeimages/VectorBee.png"></img></button>
      <button onClick={() => props.callback("ViciousBee.png")}><img src="http://localhost:8000/static/beeimages/ViciousBee.png"></img></button>
      <button onClick={() => props.callback("WindyBee.png")}><img src="http://localhost:8000/static/beeimages/WindyBee.png"></img></button>
      
      
      </div>
    </div>
  );
}
function RoyalJelly() {
  let [src, setSrc] = useState("http://localhost:8000/static/beeimages/BasicBee.png");
  let [beeSelectIsOn, setbeeSelectIsOn] = useState(false);
  let [beeSelectPosition, setBeeSelectPosition] = useState({x: 600, y: 100});
  let [activeBee, setActiveBees] = useState("BasicBee.png");
  const [mousePos, setMousePos] = useState({x: 600, y: 100});
  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({x: event.clientX, y: event.clientY});
    };
    window.addEventListener('mousemove', handleMouseMove);
  }, []);
  let beeSelectOn = () => {
    setbeeSelectIsOn(!beeSelectIsOn);
    setBeeSelectPosition(mousePos)
  }
  let beeSelectCallBack = (bee) => {
    setActiveBees(bee)
    beeSelectOn()
  }

  return (
    
    <div className="RoyalJelly">
      {(beeSelectIsOn == true) ? <BeeSelect beeSelectPosition={beeSelectPosition} callback={beeSelectCallBack}/> : <div></div>}
      <div className="Calculation">
        <h1>Odds Of Getting</h1>
        <button onClick={beeSelectOn}><img src={"http://localhost:8000/static/beeimages/" + activeBee}></img></button>
        
        <h1>from</h1>
        <form><input value="1000"></input></form>
        <img src="http://localhost:8000/static/miscellaneous/RoyalJelly.png"></img>
      </div>
    </div>
  );
}
export default App;
