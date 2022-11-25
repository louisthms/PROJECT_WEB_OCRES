import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import './crypto.css';

function Crypto() {
    const [data, setData] = useState('');
    const [data2, setData2] = useState('');
    const getAllData = () => {
        axios
            .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
            .then((response) => {
                console.log(response.data);
                setData(response.data[0]['price_change_percentage_24h']);
                setData2(response.data[0]['name']);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        getAllData();
    }, []);


    return (
        <div className="crypto">
            <h3>{data2}</h3>
            {data < 0 ? <h3 style={{ color: 'red' }}>{parseFloat(data).toFixed(2)}%</h3> : <h3 style={{ color: 'green' }}>{parseFloat(data).toFixed(2)}%</h3>}
        </div >
    )
}

export default Crypto;