import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import './converter.css';

function CryptoConv() {
    const [data, setData] = useState('');
    const [val1, setCurrency1] = useState('');
    const [val2, setCurrency2] = useState('');
    const getAllData = () => {
        axios
            .get("https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=L71HZJZZBYL6EOG1")
            .then((response) => {
                console.log(response.data);
                setData(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
                setCurrency1(response.data['Realtime Currency Exchange Rate']['1. From_Currency Code']);
                setCurrency2(response.data['Realtime Currency Exchange Rate']['3. To_Currency Code']);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        //setInterval(getAllData, 1000);
        getAllData();

    }, []);

    return (
        <div className="converter">
            <h3>{val1} to {val2}</h3>
            <h3>${parseFloat(data).toFixed(0)}</h3>
        </div>
    )
}

export default CryptoConv