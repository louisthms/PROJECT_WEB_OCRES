import React from 'react';
import { UilSearch } from '@iconscout/react-unicons';
import './searchBar.css'

const searchBar = () => {
    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder="Search" />

                <div className="searchIcon">
                    <UilSearch />
                </div>
            </div>

        </div>
    )
}

export default searchBar

