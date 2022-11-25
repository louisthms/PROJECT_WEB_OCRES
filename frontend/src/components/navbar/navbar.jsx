import React from 'react';
import './navbar.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const navbar = () => {
    return (
        <div className="navbar">
            <Router>
                <ul>
                    <li><Link to={'/'} className="nav-link"> Home </Link></li>
                    <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                    <li><Link to={'/about'} className="nav-link">About</Link></li>
                </ul>
                <Routes>
                    <Route path='/' />
                    <Route path='/contact' />
                    <Route path='/about' />
                </Routes>
            </Router>

        </div>
    )
}

export default navbar