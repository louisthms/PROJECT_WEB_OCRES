import React from "react";
import './account.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Account = () => {
    return (
        <div className="account">
            <div className="wallet">
                <Wallet1 />
            </div>
            <div className="wallet">
                <Wallet2 />
            </div>
            <div className="wallet">
                <Wallet3 />
            </div>


        </div >
    );
};

export function Wallet1() {
    const percentage = 66;
    return (
        < div className="CompactCard" >
            <div className="bar">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                <span>Revenues</span>
            </div>
            <div className="information">
                <span>$12,000</span>
            </div>
        </div >
    );
}

export function Wallet2() {
    const percentage = 10;
    return (
        < div className="CompactCard" >
            <div className="bar">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                <span>Revenues</span>
            </div>
            <div className="information">
                <span>$14,000</span>
            </div>
        </div >
    );
}

export function Wallet3() {
    const percentage = 100;
    return (
        < div className="CompactCard" >
            <div className="bar">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                <span>Revenues</span>
            </div>
            <div className="information">
                <span>$19,000</span>
            </div>
        </div >
    );
}

export default Account;