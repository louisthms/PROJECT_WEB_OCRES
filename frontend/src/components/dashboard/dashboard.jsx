import React from 'react'
import './dashboard.css'
import Converter from '../converter/converter';
import Crypto from '../crypto/crypto';
import Stock from '../stock/stock';

const dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="card">
                <Converter />
                <Crypto />
                <Stock />
            </div>

        </div>
    )
}

export default dashboard