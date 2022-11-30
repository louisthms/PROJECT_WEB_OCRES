import React, { useState } from 'react';
import Ajouter from './ajouter';
import Supprimer from './supprimer';
import Update from './update';
import '../../index.css'

const Log = () => {
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
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li onClick={handleModals} id="config">Ajouter</li>
          <li onClick={handleModals} id="config2">Supprimer</li>
          <li onClick={handleModals} id="config3">Mettre à jour</li>
        </ul> 
        {ajouterModal && <Ajouter />}
        {suppModal && <Supprimer />}
        {majModal && <Update />}
      </div>
    </div>
  );
};

export default Log;