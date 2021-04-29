import React, { useEffect, useState } from 'react';

const Home = () => {
    const token = localStorage.getItem('token') || '';  
    const [game, setGame] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/game',{
            method: 'GET',
            headers:{
                'Authorization': token
            }
        }).then(res=> res.json()).then(result=>{
            console.log(result);
            setGame(result.data)
        }).catch(err=>{
            console.log(err);
        })
    },[token])
    const [bet, setBet]= useState({bet:0});
    const handleBet = e =>{
        setBet({...bet,bet: e.target.value})
    }
    const addedGame = g =>{
        setBet({...bet,_id: g})
        fetch("http://localhost:4000/bet/add",{
            method:"POST",
            body: JSON.stringify(bet),
            headers:{
                'Authorization': localStorage.getItem('token'),
                'Content-type': 'application/json'
            }
        })
    }
console.log(bet);
    return (
        <div style={{width:1180, margin:'0 auto', padding:10}}>
            {
                game.map(g=> <div
                    style={{padding:10, cursor:'pointer'}}
                     key={g._id} 
                     ><p>
                         {g.title} : 
                         <span>{g.rate}</span>
                         </p> 
                          <input
                            onChange={handleBet}
                           type="text"/>
                          <button onClick={()=>addedGame(g._id)} >Add</button>
                           </div>)
            }
        </div>
    );
};

export default Home;