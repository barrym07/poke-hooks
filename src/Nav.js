import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {

const navStyle = {
    color: 'white'
}

  return (
    <nav>
        <h1> Who's That Pokemon </h1>
        <ul className="nav-links">

        <Link style={navStyle} to='/'>
            <li>Home</li>
        </Link>


        <Link style={navStyle} to='/characters'>
            <li>Characters</li>
        </Link>

        <Link style={navStyle}  to='/favorites'>
            <li>Favorites</li>
        </Link>

        </ul>
    </nav>
  );
}

export default Nav;