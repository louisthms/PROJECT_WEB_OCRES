import React, { useState } from 'react';
import axios from 'axios';

const Ajouter = () => {
    const [email, setEmail] = useState('');
    const [nom, setNom] = useState('');
    const [numero, setNumber] = useState('');
    const [prenom, setPrenom] = useState('');


    const handleAjout = (e) => {
        e.preventDefault();
        //const emailError = document.querySelector('.email.error');
        axios({
            method: "post",
            url: 'http://localhost:3007/api/user/register',
            withCredentials: true,
            data: {
                email,
                nom,
                prenom,
                numero
            },
        })
        /*.then((res) => {
            if(res.data.errors){
                emailError.innerHTML = res.data.errors.email;
                nomError.innerHTML = res.data.errors.nom;
            }else{
                window.location = "/";
            }
        }).catch((err) =>{
            console.log(err);
        });*/
    };
    return (
        <form action="" onSubmit={handleAjout} id="ajoutform">

            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <br />
            <label htmlFor="nom">Nom</label>
            <br />
            <input type="text" name="nom" id="nom"
                onChange={(e) => setNom(e.target.value)}
                value={nom}
            />
            <br />
            <label htmlFor="prénom">Prénom</label>
            <br />
            <input type="text" name="prénom" id="prénom"
                onChange={(e) => setPrenom(e.target.value)}
                value={prenom}
            />
            <br />
            <label htmlFor="">Numéro</label>
            <br />
            <input type="number" name="numéro" id="numéro"
                onChange={(e) => setNumber(e.target.value)}
                value={numero}
            />
            <br />
            <br />
            <input type="submit" valeur="ajouter" />
        </form>
    );
};

export default Ajouter;