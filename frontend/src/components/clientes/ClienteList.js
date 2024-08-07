import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './clientes.css';

const ListaClientes = () => {
    const[clientes, setClientes] = useState([]);

    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/api/clientes/')
        .then(res => {
            setClientes(res.data);
        })
        .catch(err => {
            console.error(err);
        });
    }, []);


return(
    <div>
        <h2>Clientes</h2>

        <table>
            <thead>
                <th>Nombre</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Direccion</th>
            </thead>

            {clientes.map(clientes => (
                <tr key={clientes.id}>
                    <td>{clientes.nombre}</td>        
                    <td>{clientes.email}</td>        
                    <td>{clientes.telefono}</td>        
                    <td>{clientes.direccion}</td>        
                </tr>
            ))}
        </table>
    </div>
    );
};

export default ListaClientes 