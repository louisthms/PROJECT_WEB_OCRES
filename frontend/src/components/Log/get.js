import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Get() {
    const [data, setData] = useState('');
    const getAllData = () => {
        axios
            .get("http://localhost:3008/api/user/")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        //setInterval(getAllData, 1000);
        getAllData();

    }, []);
    return (
        < table border="1">
        <tr>
             <th>Nom</th>
             <th>Prénom</th>
             <th>Mail</th>
             <th>Numéro</th></tr>
        <div> {data ?
            data.map(data => {
                return (
                    <div className="data" key={data.id}>
                        <tr>
                        <td>{data.nom}</td>
                        <td>{data.prenom}</td>
                        <td>{data.email}</td>
                        <td>{data.numero}</td>
                        </tr>
                    </div> 
                )
            }) : <h3>No data yet</h3>}

        </div >
        </table>
    );
}

export default Get;