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
    const percentage = 100;
    return (
        < div className="CompactCard" >
            <div className="bar">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                <span>Portfolio</span>
            </div>
            <div className="information">
                <span>$244,155</span>
            </div>
        </div >
    );
}

export function Wallet2() {
    const percentage = 58;
    return (
        < div className="CompactCard" >
            <div className="bar">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                <span>Funds</span>
            </div>
            <div className="information">
                <span>$141,609</span>
            </div>
        </div >
    );
}

export function Wallet3() {
    const percentage = 42;
    return (
        < div className="CompactCard" >
            <div className="bar">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                <span>Equities</span>
            </div>
            <div className="information">
                <span>$102,546</span>
            </div>
        </div >
    );
}

export function Wallet4() {
    const percentage = 13;
    return (
        < div className="CompactCard" >
            <div className="bar">
                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                <span>Bonds</span>
            </div>
            <div className="information">
                <span>$19,160</span>
            </div>
        </div >
    );
}

export default Account;