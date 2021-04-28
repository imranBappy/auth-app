import React, { useState } from 'react';
import { useHistory } from 'react-router';
import './signup.css';
const Signup = () => {

    const [auth, setAuth] = useState({})
    const history = useHistory()
        
    const handleChange = e =>{
        const name = e.target.name;
        const value = e.target.value;
        setAuth({...auth, [name]: value})
    }


        const handleSignup = () =>{
        const url = `http://localhost:4000/auth/signup`;
        fetch(url,{
            method: 'POST',
            body: JSON.stringify(auth),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }).then(res=> res.json())
        .then((data=>{
            history.push('/auth/singin')
            console.log(data);
        })).catch(err=>{
            console.log(err);
        })
    }

    return (
        <>
        <br/><br/>
            <div id='signup-container' className="s">
                
                <label>Full Name: 
                    <input onChange={handleChange} type="text" name="name" placeholder="Your name.."/>
                </label>

                <label>Username:
                    <input onChange={handleChange} type="text" name="username" placeholder="Username.."/>
                </label>

                <label>Password: 
                    <input onChange={handleChange} type="text" name="password" placeholder="Password.."/>
                </label>
                <br/><br/>
                <button onClick={handleSignup} >Signup</button>
            </div>
        </>
    );
};

export default Signup;