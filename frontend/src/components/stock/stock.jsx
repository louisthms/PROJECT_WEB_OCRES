import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";
import './stock.css';

function Stock() {
    const [data, setData] = useState('');
    const [val1, setCurrency1] = useState('');
    const [val2, setCurrency2] = useState('');
    const [val3, setCurrency3] = useState('');
    const getAllData = () => {
        axios
            .get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=AAPL&apikey=L71HZJZZBYL6EOG1")
            .then((response) => {
                console.log(response.data);
                setData(response.data['Global Quote']['01. symbol']);
                setCurrency1(response.data['Global Quote']['10. change percent']);
                setCurrency2(response.data['Global Quote']['08. previous close']);
                setCurrency3(response.data['Global Quote']['05. price']);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        //setInterval(getAllData, 10000);
        getAllData();
    }, []);

    return (
        <div className="stock">
            <h3>{data}</h3>
            {val3 < val2 ? <h3 style={{ color: 'red' }}>{parseFloat(val1).toFixed(2)}%</h3> : <h3 style={{ color: 'green' }}>{parseFloat(val1).toFixed(2)}%</h3>}
        </div >
    )
}

export default Stock;