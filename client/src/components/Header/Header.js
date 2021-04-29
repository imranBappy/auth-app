import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import './header.css';



const Header = () => {
    
    return (
    <header>
    	    <div className="container">
                <div className="logo">
                    <Link to='/' >
                        <img src={logo} alt="logo"/>
                    </Link>
                </div>
                <div className="navbar">
                    <ul id="nav-lists">
                        <li><Link to='/' >Home</Link></li>
                        <li><Link to='/auth/singin' >Singin</Link></li>
                        <li><Link to='/' >About</Link></li>
                        <li><Link to='/' >{}</Link></li>
                    </ul>
                </div>
            </div>
    </header>
    );
};

export default Header;