import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
        </div>
    )
}

export default navbar