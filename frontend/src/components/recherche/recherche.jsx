import React from 'react';
import Navbar from '../navbar/navbar';
import './recherche.css';
import SearchBar from '../searchBar/searchBar';

const Recherche = () => {
    return (
        <div className="recherche">
            <Navbar />
            <SearchBar />
        </div>
    )
}

export default Recherche