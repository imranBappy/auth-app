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

    const addedGame = g =>{
        console.log(g);
    }

    return (
        <div style={{width:1180, margin:'0 auto', padding:10}}>
            {
                game.map(g=> <div
                    style={{padding:10, cursor:'pointer'}}
                     key={g._id} 
                     ><p onClick={()=>addedGame(g._id)} >{g.title} : <span>{g.rate}</span></p>   </div>)
            }
        </div>
    );
};

export default Home;