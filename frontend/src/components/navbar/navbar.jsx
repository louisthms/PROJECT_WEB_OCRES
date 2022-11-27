import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li><Link to={'/'} className="nav-link">Home</Link></li>
                <li><Link to={'/recherche'} className="nav-link">Recherche</Link></li>
                <li><Link to={'/contact'} className="nav-link">Contacts</Link></li>
                <li><Link to={'/virement'} className="nav-link">Virements</Link></li>
            </ul>
        </div>
    )
}

export default navbar