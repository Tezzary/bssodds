import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect, useState } from 'react';
function App() {
  const pages = {
    RoyalJelly: "RoyalJelly",
    Feeding: "Feeding",
  }
  const [activePage, setActivePage] = useState(pages.RoyalJelly)
  const changeActivePage = (page) => {
    setActivePage(page)
  }
  let pageData = null
  if(activePage == pages.RoyalJelly){
    pageData = (
    <div className='DataBlock'>
      <RoyalJelly isGifted={false}/>
      <RoyalJelly isGifted={true}/>
    </div>
    )
  }
  else if(activePage == pages.Feeding){
    pageData = (
      <Fragment>
        <div className='DataBlock'>
          <Feeding foodType={"SunflowerSeed"}/>
          <Feeding foodType={"Strawberry"}/>
          <Feeding foodType={"Pineapple"}/>
          <Feeding foodType={"Blueberry"}/>
          <Feeding foodType={"GingerbreadBear"}/>
          <Feeding foodType={"AgedGingerbreadBear"}/>
        </div>

      </Fragment>
    )
  }
  return (
    <div className="App">
      <NavBar callback={changeActivePage} activePage={activePage}/>
      {pageData}
      
      <div className='ContactInformation bold'>Version:0.1.4 Discord: Tezzary</div>
    </div>
  );
}
function NavBar(props){
  
  return (
    <div className="NavBar DataBlock">
      <button className={(props.activePage == "RoyalJelly" ? 'ActivePageButton' : 'NotActivePageButton')} onClick={() => props.callback("RoyalJelly")}>
        <img src="/bssodds/static/miscellaneous/RoyalJelly.png" ></img>
        Royal Jelly
      </button>
      <button className={(props.activePage == "Feeding" ? 'ActivePageButton' : 'NotActivePageButton')} onClick={() => props.callback("Feeding")}>
        <img src="/bssodds/static/miscellaneous/FeedingPage.png" ></img>
        Feeding
      </button>
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
      if(props.beesToShow == "RoyalJelly"){
        for (let i = 0; i < data.bees.length; i++) {
          let bee = data.bees[i]
          if(bee.rarity == "Common" || bee.rarity == "Event"){
            continue
          }
          setbees(bees => [...bees, bee])
        }
      }
      else if(props.beesToShow == "GingerbreadBear"){
        for (let i = 0; i < data.bees.length; i++) {
          let bee = data.bees[i]
          setbees(bees => [...bees, bee])
        }
      }
      else{
        for (let i = 0; i < data.bees.length; i++) {
          let bee = data.bees[i]
          if(bee.favouriteFood != props.beesToShow){
            continue
          }
          setbees(bees => [...bees, bee])
        }
      }
      
    })
    const handleMouseMove = (event) => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.addEventListener('click', handleMouseClick)
    }
    const handleMouseClick = (event) => {
      props.callback(null)
      window.removeEventListener('click', handleMouseClick)
    }
    window.addEventListener('mousemove', handleMouseMove)
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
function Feeding(props){
  let [beeSelectIsOn, setbeeSelectIsOn] = useState(false);
  let [beeSelectPosition, setBeeSelectPosition] = useState({x: 600, y: 100});
  let startingBee = "DigitalBee"
  if(props.foodType == "Strawberry"){
    startingBee = "SpicyBee"
  }
  else if(props.foodType == "SunflowerSeed"){
    startingBee = "PreciseBee"
  }
  else if(props.foodType == "Pineapple"){
    startingBee = "VectorBee"
  }
  else if(props.foodType == "Blueberry"){
    startingBee = "BuoyantBee"
  }
  let [activeBee, setActiveBees] = useState({name: startingBee, rarity: "Mythic"});
  const [mousePos, setMousePos] = useState({x: 600, y: 100});
  const [foodCount, setFoodCount] = useState(0);
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
    if(bee != null){
      setActiveBees(bee)
    }
    beeSelectOn()
  }
  let calculate = (foodType) => {
    let chanceOfNotGetting = 1
    if(foodType == "GingerbreadBear"){
      chanceOfNotGetting = 1 - 1 / 100
    }
    else if(foodType == "AgedGingerbreadBear"){
      chanceOfNotGetting = 1 - 11 / 1000
    }
    else if(activeBee.rarity == "Mythic"){
      chanceOfNotGetting = 1 - 1 / 24000
    }
    else if(activeBee.rarity == "Legendary" || activeBee.rarity == "Common"){
      chanceOfNotGetting = 1 - 1 / 12000
    }
    else if(activeBee.rarity == "Epic"){
      chanceOfNotGetting = 1 - 1 / 10000
    }
    else if(activeBee.rarity == "Rare"){
      chanceOfNotGetting = 1 - 1 / 8000
    }
    console.log("calculating")
    let chanceOfGetting = (1 - Math.pow(chanceOfNotGetting, foodCount)) * 100
    setChance(chanceOfGetting)
  }
  let inputChange = (event) => {
    var num = parseInt(event.target.value, 10)
    setFoodCount(num)
  }
  return (
    
    <div className="RoyalJelly">
      {(beeSelectIsOn == true) ? <BeeSelect beesToShow={props.foodType.replace('Aged', '')} beeSelectPosition={beeSelectPosition} callback={beeSelectCallBack}/> : <div></div>}
      <div className="Calculation">
        <h1>Odds Of</h1>
        <h1 className='bold'>Gifting</h1>
        <button className="BeeSwitchButton" onClick={beeSelectOn}><img src={"/bssodds/static/beeimages/" + activeBee.name + ".png"}></img></button>
        <h1>From</h1>
        <input className="RoyalJellyInputCount" placeholder="0" onChange={inputChange}></input>
        {props.foodType == "AgedGingerbreadBear" ? <h1>Aged</h1> : null}
        <img className='RoyalJellyImg' src={"/bssodds/static/miscellaneous/" + props.foodType.replace('Aged', '') + ".png"}></img>
        <button className='CalculateButton' onClick={() => calculate(props.foodType)}>Calculate</button>
        <h1>{Math.floor(chance * 1000) / 1000 + "%"}</h1>
        
      </div>
    </div>
  );
}
function RoyalJelly(props) {
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
    if(bee != null){
      setActiveBees(bee)
    }
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
      {(beeSelectIsOn == true) ? <BeeSelect beesToShow="RoyalJelly" beeSelectPosition={beeSelectPosition} callback={beeSelectCallBack}/> : <div></div>}
      <div className="Calculation">
        <h1>Odds Of Getting</h1>
        {props.isGifted ? <h1 className='bold'>Gifted</h1> : null}
        
        <button className="BeeSwitchButton" onClick={beeSelectOn}><img src={"/bssodds/static/beeimages/" + activeBee.name + ".png"}></img></button>
        
        <h1>From</h1>
        <input className="RoyalJellyInputCount" placeholder="0" onChange={inputChange}></input>
        <img className='RoyalJellyImg' src="/bssodds/static/miscellaneous/RoyalJelly.png"></img>
        <button className='CalculateButton' onClick={calculate}>Calculate</button>
        <h1>{Math.floor(chance * 1000) / 1000 + "%"}</h1>
        
      </div>
    </div>
  );
}
export default App;
