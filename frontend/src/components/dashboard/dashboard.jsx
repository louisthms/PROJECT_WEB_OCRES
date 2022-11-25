import React from 'react'
import './dashboard.css'
import Converter from '../converter/converter';

const dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <div className="card">
                <Converter />
            </div>

        </div>
    )
}

export default dashboard