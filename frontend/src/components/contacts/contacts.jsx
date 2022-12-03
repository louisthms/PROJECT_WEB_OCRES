import React from 'react'
import Navbar from '../navbar/navbar';
import './contacts.css';
import Admin from '../admin/admin';

const contacts = () => {
    return (
        <div className="contacts">
            <Navbar />
            <Admin />
        </div>
    )
}

export default contacts;