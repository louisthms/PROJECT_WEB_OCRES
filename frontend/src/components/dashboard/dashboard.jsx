import React from 'react'
import './dashboard.css'
import Converter from '../converter/converter';
import Crypto from '../crypto/crypto';
import Stock from '../stock/stock';
import CryptoConv from '../converter/cryptoConv';
import Charts from '../chart/chart';
import ChartDay from '../chart/chartDay';

const dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="card">
                <Converter />
                <CryptoConv />
                <Crypto />
                <Stock />
            </div>
            <div className="charts">
                <Charts />
                <ChartDay />
            </div>


        </div>
    )
}

export default dashboard