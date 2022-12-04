import React, { useState } from 'react';
import axios from 'axios';
import './admin.css';

const Delete = () => {

    const [email, setEmail] = useState('');

    const handleAjout = (e) => {
        e.preventDefault();
        //const emailError = document.querySelector('.email.error');
        axios({
            method: "delete",
            url: 'http://localhost:3008/api/user/:id',
            //withCredentials:true,
            data: {
                email,
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
        <div className="delete">
            <form action="" onSubmit={handleAjout} id="ajoutform">
                <div class="input-container">
                    <input class="input-class first" type="text" name="email" id="email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Email"
                    />
                </div>
                <div class="input-container">
                    <input class="submit" type="submit" valeur="supprimer" />
                </div>
            </form>
        </div>
    );
};

export default Delete;