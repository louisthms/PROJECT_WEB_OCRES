import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom';

const navbar = () => {
    return (
        <div className="navbar">
            <Router>
                <ul>
                    <li><Link to={'/'} className="nav-link"> Home </Link></li>
                    <li><Link to={'/changeContact'} className="nav-link">Contacts</Link></li>
                    <li><Link to={'/changeDepense'} className="nav-link">Virements</Link></li>
                </ul>
                <Routes>
                    <Route path='/' />
                    <Route path='/changeContact' />
                    <Route path='/changeDepense' />
                </Routes>
            </Router>

        </div>
    )
}

export default navbar