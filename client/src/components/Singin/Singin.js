import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../Signup/signup.css';
const Singin = () => {
    const [auth, setAuth] = useState({})
    const history = useHistory()

    const handleChange = e =>{
        const name = e.target.name;
        const value = e.target.value;
        setAuth({...auth, [name]: value})
    }

    const handleSingin = () =>{
        const url = `http://localhost:4000/auth/singin`;
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(auth),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then(res=> res.json())
        .then((data=>{
            history.push('/')
            console.log(data);
            localStorage.setItem('token', JSON.stringify(data.data))
        })).catch(err=>{
            console.log(err);
        })
    }

    return (
        <>
        <br/><br/>
            <div id='signup-container' className="s">
                <label>Username:
                    <input onChange={handleChange} type="text" name="username" placeholder="Username.."/>
                </label>

                <label>Password: 
                    <input onChange={handleChange} type="text" name="password" placeholder="Password.."/>
                </label>
                <div className="signup-link">
                    <Link to='/auth/signup' >I have no account</Link>
                </div>
                
                <br/>
                <button onClick={handleSingin} >Singin</button>
            </div>
        </>
    );
};

export default Singin;