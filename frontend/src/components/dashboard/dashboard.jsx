import React from 'react'
import './dashboard.css'
import Converter from '../converter/converter';

const dashboard = () => {
    return (
        <div className="board">
            <h2>Dashboard</h2>
            <div className="stock">
                <div className="box">
                    <Converter />
                </div>
            </div>


        </div>
    )
}

export default dashboard