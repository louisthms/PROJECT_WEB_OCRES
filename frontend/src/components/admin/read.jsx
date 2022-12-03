import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css';

function Read() {
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
        <table className="table-container">
            <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Mail</th>
                <th>Numéro</th>
            </tr>
            <tbody>
                {data ?
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

            </tbody>
        </table>
    );
}

export default Read;