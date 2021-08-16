import React from 'react';
import logo from '../images/logo.png';

function Header() {
    return (
        <div className="logoDiv">
            <img src={logo} alt="logo" className="logo"></img>
        </div>
    )
}

export default Header
