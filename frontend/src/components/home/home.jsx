import React from 'react';
import Navbar from '../navbar/navbar';
import Dashboard from '../dashboard/dashboard';
import RightSide from '../rightSide/rightSide';
import './home.css';


const Home = () => {
    return (
        <div className="container">
            <Navbar />
            <Dashboard />
            <RightSide />
        </div>
    )
}

export default Home