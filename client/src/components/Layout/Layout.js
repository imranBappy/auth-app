import React from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import Header from '../Header/Header';
import Signup from '../Signup/Signup';
import Singin from '../Singin/Singin';

const Layout = ({children}) => {
    return (
        <>
            <Router>
                <Header/>
                {children}
            </Router>
        </>
    );
};

export { Signup, Singin };
export default Layout;