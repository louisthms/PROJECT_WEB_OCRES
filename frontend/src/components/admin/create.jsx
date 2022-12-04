import React, { useState } from 'react';
import axios from 'axios';
import './admin.css';

const Create = () => {

    const [email, setEmail] = useState('');
    const [nom, setNom] = useState('');
    const [numero, setNumber] = useState('');
    const [prenom, setPrenom] = useState('');


    const handleAjout = (e) => {
        e.preventDefault();
        //const emailError = document.querySelector('.email.error');
        axios({
            method: "post",
            url: 'http://localhost:3008/api/user/register',
            //with Credentials:true
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
        <div class="create">
            <form action="" onSubmit={handleAjout} id="ajoutform">
                <div class="input-container">
                    <input class="input-class first" type="text" name="email" id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Email"
                    />
                </div>
                <div class="input-container">
                    <input class="input-class" type="text" name="nom" id="nom"
                        onChange={(e) => setNom(e.target.value)}
                        value={nom}
                        placeholder="Nom"
                    />
                </div>
                <div class="input-container">
                    <input class="input-class" type="text" name="prénom" id="prénom"
                        onChange={(e) => setPrenom(e.target.value)}
                        value={prenom}
                        placeholder="Prenom"
                    />
                </div>
                <div class="input-container">
                    <input class="input-class" type="text" name="numéro" id="numéro"
                        onChange={(e) => setNumber(e.target.value)}
                        value={numero}
                        placeholder="Numero"
                    />
                </div>
                <div class="input-container">
                    <input class="submit" type="submit" valeur="ajouter" />
                </div>
            </form>
        </div>
    );
};

export default Create;