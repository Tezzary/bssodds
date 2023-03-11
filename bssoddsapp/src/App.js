import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect, useState } from 'react';
function App() {
  return (
    <div className="App">
      

      <RoyalJelly isGifted={false}/>
      <RoyalJelly isGifted={true}/>
    </div>
  );
}
function BeeSelect(props){
  
  const [bees, setbees] = useState([])
  const mystyle = {
      left: `${props.beeSelectPosition.x}px`,
      top: `${props.beeSelectPosition.y}px`
  };
  useEffect(() => {
    fetch("/bssodds/static/miscellaneous/bees.json").then(res => res.json()).then(data => {
      console.log(data.bees[0])
      setbees([])
      for (let i = 0; i < data.bees.length; i++) {
        let bee = data.bees[i]
        if(bee.rarity == "Common" || bee.rarity == "Event"){
          continue
        }
        setbees(bees => [...bees, bee])
        
      }
    })
  }, []) 
  return (
    <div className="BeeSelectWrapper" style={mystyle}>
      <h1>Choose a Bee</h1>
      <div className="BeeSelect">
        {bees.map(bee => (
          <button onClick={() => props.callback(bee)}><img src={"/bssodds/static/beeimages/" + bee.name + ".png"}></img></button>
        ))}
      </div>
    </div>
  );
}
function RoyalJelly(props) {
  let [src, setSrc] = useState("/bssodds/static/beeimages/BasicBee.png");
  let [beeSelectIsOn, setbeeSelectIsOn] = useState(false);
  let [beeSelectPosition, setBeeSelectPosition] = useState({x: 600, y: 100});
  let [activeBee, setActiveBees] = useState({name: "VectorBee", rarity: "Mythic"});
  const [mousePos, setMousePos] = useState({x: 600, y: 100});
  const [royalJellyCount, setRoyalJellyCount] = useState(0);
  const [chance, setChance] = useState(0);
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
  let calculate = () => {
    let chanceOfNotGetting = 1
    if(activeBee.rarity == "Mythic"){
      chanceOfNotGetting = 1 - 1 / (25000 * 6 * (props.isGifted ? 250 : 1))
    }
    else if(activeBee.rarity == "Legendary"){
      chanceOfNotGetting = 1 - 3 / (100 * 8 * (props.isGifted ? 250 : 1))
    }
    else if(activeBee.rarity == "Epic"){
      chanceOfNotGetting = 1 - 27 / (100 * 11 * (props.isGifted ? 250 : 1))
    }
    else if(activeBee.rarity == "Rare"){
      chanceOfNotGetting = 1 - 7 / (10 * 9 * (props.isGifted ? 250 : 1))
    }
    console.log("calculating")
    let chanceOfGetting = (1 - Math.pow(chanceOfNotGetting, royalJellyCount)) * 100
    setChance(chanceOfGetting)
  }
  let inputChange = (event) => {
    var num = parseInt(event.target.value, 10)
    setRoyalJellyCount(num)
  }
  return (
    
    <div className="RoyalJelly">
      {(beeSelectIsOn == true) ? <BeeSelect beeSelectPosition={beeSelectPosition} callback={beeSelectCallBack}/> : <div></div>}
      <div className="Calculation">
        <h1>Odds Of Getting</h1>
        {props.isGifted ? <h1 className='bold'>Gifted</h1> : null}
        
        <button onClick={beeSelectOn}><img src={"/bssodds/static/beeimages/" + activeBee.name + ".png"}></img></button>
        
        <h1>From</h1>
        <input placeholder="0" onChange={inputChange}></input>
        <img className='RoyalJellyImg' src="/bssodds/static/miscellaneous/RoyalJelly.png"></img>
        <button onClick={calculate}>Calculate</button>
        <h1>{Math.floor(chance * 1000) / 1000 + "%"}</h1>
        
      </div>
    </div>
  );
}
export default App;
