import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css';

function Read() {
    const [data, setData] = useState('');
    const getAllData = () => {
        axios
            .get("http://localhost:3000/api/user/")
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
        <div className="table-container">
            <table>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Mail</th>
                    <th>Numéro</th>
                </tr>
                {data ?
                    data.map(data => {
                        return (
                            <tr key={data.id}>
                                <td>{data.nom}</td>
                                <td>{data.prenom}</td>
                                <td>{data.email}</td>
                                <td>{data.numero}</td>
                            </tr>
                        )
                    }) : <h3>No data yet</h3>}
            </table>
        </div>
    );
}

export default Read;