import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Details from './Components/PlayerDetails/Details.js'
import AddHire from './Components/addHire/AddHire';

function App() {
  const h1Style = { color: 'red' };
  const [player, setPlayer] = useState([]);
  const [hire, setHire] = useState([]);



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => { setPlayer(data) })
  }
    , [])


    const handleAddPlayer=(player)=>{
      const newHire=[...hire,player];
      setHire(newHire);
    }

  return (

    <>
    
      <h1 style={h1Style}>
        WelCome My Club
        player {player.length}
      </h1>
      <AddHire hire = {hire}></AddHire>
      <h1>Hired Player : {hire.length}</h1>
      <ul>
        {player.map(player => <Details player={player} handleAddPlayer={handleAddPlayer}  ></Details>)}
      </ul>
   


    </>);
}

export default App;

