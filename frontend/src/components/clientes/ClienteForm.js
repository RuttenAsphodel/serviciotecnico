import React, { useState } from 'react';
import axios from 'axios';
import './clientes.css';


const ClienteForm = ({fetchItems }) => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    

    const handleSubmit =(event) => {
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/clientes/', {nombre, email, telefono, direccion})
        .then(res => {
            fetchItems();
            setNombre('');
            setEmail('');
            setTelefono('');
            setDireccion('');
        })
        .catch(err => {
            console.error(err);
        });
}

return (
        <form class='form_clientes' onSubmit={handleSubmit}>
            <div>
                <label>Nombre: </label>
                <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Telefono: </label>
                <input type="text" value={telefono} onChange={e => setTelefono(e.target.value)} />
            </div>
            <div>
                <label>Direccion: </label>
                <input type="text" value={direccion} onChange={e => setDireccion(e.target.value)} />
            </div>
            <button type="submit">Add Item</button>
        </form>

    );

};

export default ClienteForm