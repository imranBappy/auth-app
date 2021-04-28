import { useState } from 'react';
import './App.css';

const token = `Bearer  eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDg3MTcwMTFhOGU5NzA4ZDhlNmNkNjYiLCJ1c2VybmFtZSI6ImltcmFuIiwiaWF0IjoxNjE5NTg0OTg4LCJleHAiOjE2MTk3NTc3ODh9.fFww7R732VmfkognAK6vVlTWg4r2uro8lb0pV_cm_Gg`;

function App() {
  const [game, setGame] = useState([]);
  const loadData = ()=>{
      fetch('http://localhost:4000/game',{
            method: "GET",
            headers:{
              "Authorization": token
            }
          }).then(res=>res.json())
            .then((data)=>setGame(data.data))
  }

  console.log(game);
  return (
    <div className="App">
      <h1>Website comming soon....</h1>
      <button style={{padding:10, color:'gray', width: 150, margin:20}} onClick={loadData}>Load Data</button>
      <ul>
        {
          game.map(g=> <li key={g.rate}> {g.title} </li>)
        } 
      </ul>
    </div>
  );
}

export default App;
