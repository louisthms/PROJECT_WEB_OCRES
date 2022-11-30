import React, { useState } from 'react';
import axios from 'axios';

const Supprimer = () => {
    const [email, setEmail] = useState ('');
    
    const handleAjout = (e) => {
        e.preventDefault();
   //const emailError = document.querySelector('.email.error');
        axios({
            method:"delete",
            url:'http://localhost:3000/api/user/:id',
            withCredentials:true,
            data:{
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
        <form action="" onSubmit={handleAjout} id="ajoutform">

<label htmlFor="email">Email</label>
<br/>
<input type="text" name="email" id="email"
onChange={(e)=> setEmail(e.target.value)}
value={email}
/>
<br/>
<input type="submit" valeur="supprimer"/>
        </form>
    );
};

export default Supprimer;