import React, { useState } from 'react';
import Ajouter from './ajouter';
import Supprimer from './supprimer';
import Update from './update';
import Get from './get';
import '../../index.css'

const Log = () => {
  const [ajouterModal, setAjouterModal] = useState(true);
  const [suppModal, setSuppModal] = useState(false);
  const [majModal, setMajModal] = useState(false);
  const [getModal, setGetModal] = useState(false);

  const handleModals = (e) => {
    if (e.target.id === "config") {
      setAjouterModal(true);
      setSuppModal(false);
      setMajModal(false);
      setGetModal(false);
    } else if (e.target.id === "config2") {
      setAjouterModal(false);
      setSuppModal(true);
      setMajModal(false);
      setGetModal(false);
    } else if (e.target.id === "config3") {
      setAjouterModal(false);
      setSuppModal(false);
      setMajModal(true);
      setGetModal(false);
    } else if (e.target.id === "config4") {
      setAjouterModal(false);
      setSuppModal(false);
      setMajModal(false);
      setGetModal(true);
  } }
  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li onClick={handleModals} id="config">Ajouter</li>
          <li onClick={handleModals} id="config2">Supprimer</li>
          <li onClick={handleModals} id="config3">Mettre à jour</li>
          <li onClick={handleModals} id="config4">Voir les contacts</li>
        </ul> 
        {ajouterModal && <Ajouter />}
        {suppModal && <Supprimer />}
        {majModal && <Update />}
        {getModal && <Get />}
      </div>
    </div>
  );
};

export default Log;