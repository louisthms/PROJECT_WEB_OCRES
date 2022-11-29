import { UilSearch } from '@iconscout/react-unicons';
import './searchBar.css'
import React from 'react';
import axios from "axios";
import { useState } from "react";
import Chart from 'react-apexcharts'

const SearchBar = () => {


    const [data, setData] = useState('');
    const [stockX, setStockX] = useState([]);
    const [stockY, setStockY] = useState([]);

    let stockChartXValues = [];
    let stockChartYValues = [];

    const inputHandler = (e) => {
        setData(e.target.value);
    }

    const GetAllData = () => {
        axios
            .get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${data}&interval=5min&apikey=XR9JO0GLJIEHUET7`)
            .then((response) => {
                console.log(response.data);
                setData(response.data['Meta Data']['2. Symbol']);
                for (var key in response.data['Time Series (5min)']) {
                    stockChartXValues.push(key);
                    setStockX(stockChartXValues);
                    stockChartYValues.push(response.data['Time Series (5min)'][key]['1. open']);
                    setStockY(stockChartYValues);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="searchBar">
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
            <div className="search">
                <div className="searchChart">
                    {data != "" ? <h2>{data}</h2> : <h3></h3>}
                    <Chart options={{
                        stroke: {
                            curve: 'smooth',
                            width: 2,
                            colors: ["#ff929f"],
                        },
                        chart: {
                            id: 'apexchart-example',
                            toolbar: {
                                show: false
                            },
                            zoom: {
                                enabled: false
                            }
                        },
                        grid: {
                            show: false,
                        },
                        dataLabels: {
                            enabled: false
                        },
                        yaxis: {
                            labels: {
                                show: false,
                                style: {
                                    colors: 'white',
                                    fontSize: '12px'
                                },
                            }
                        },
                        xaxis: {
                            categories: stockX,
                            type: 'datetime',
                            labels: {
                                show: true,
                                style: {
                                    colors: 'white',
                                    fontSize: '12px'
                                },
                            }
                        },
                    }}
                        series={[{
                            name: 'value',
                            data: stockY,
                        }]} type="area" />
                </div>
            </div>
        </div>

    )
}

export default SearchBar