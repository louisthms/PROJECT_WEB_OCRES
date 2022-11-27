import React from 'react'
import './rightSide.css'
import Account from '../account/account'

const rightSide = () => {
    return (
        <div className="rightside">
            <div className="card">
                <h3>My Account</h3>
                <Account />
            </div>
        </div>
    )
}

export default rightSide