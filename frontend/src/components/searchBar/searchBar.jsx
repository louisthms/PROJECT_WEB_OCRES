import { UilSearch } from '@iconscout/react-unicons';
import './searchBar.css'
import React from 'react';
import axios from "axios";
import { useState } from "react";

const SearchBar = () => {


    const [data, setData] = useState('');

    const inputHandler = (e) => {
        setData(e.target.value);
    }

    const GetAllData = () => {
        axios
            .get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${data}&interval=5min&apikey=XR9JO0GLJIEHUET7`)
            .then((response) => {
                console.log(response.data);
                setData(response.data['Meta Data']['2. Symbol']);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    console.log(data);

    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder="Search"
                    value={data}
                    onChange={inputHandler}
                />

                <div className="searchIcon" onClick={GetAllData}>
                    <UilSearch />
                </div>
            </div>
        </div>
    )
}

export default SearchBar