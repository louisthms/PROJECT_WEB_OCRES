import React, { useState } from 'react'
import Create from './create';
import Delete from './delete';
import Update from './update';
import Read from './read';
import './admin.css';

const Admin = () => {
    const [ajouterModal, setAjouterModal] = useState(true);
    const [suppModal, setSuppModal] = useState(false);
    const [majModal, setMajModal] = useState(false);

    const handleModals = (e) => {
        if (e.target.id === "config") {
            setAjouterModal(true);
            setSuppModal(false);
            setMajModal(false);
        } else if (e.target.id === "config2") {
            setAjouterModal(false);
            setSuppModal(true);
            setMajModal(false);
        } else if (e.target.id === "config3") {
            setAjouterModal(false);
            setSuppModal(false);
            setMajModal(true);
        }
    }
    return (
        <div className="admin">
            <div className="form-container">
                <ul>
                    <div className="button-style">
                        <li onClick={handleModals} id="config">Ajouter</li>
                    </div>
                    <div className="button-style">
                        <li onClick={handleModals} id="config2">Supprimer</li>
                    </div>
                    <div className="button-style">
                        <li onClick="" id="config3">Update</li>
                    </div>
                </ul>
                {ajouterModal && <Create />}
                {suppModal && <Delete />}
                {majModal && <Update />}
            </div>
            <div className="table">
                <Read />
            </div>
        </div>
    )
}

export default Admin