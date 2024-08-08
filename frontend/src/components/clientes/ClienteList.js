import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';


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

    <Container className='container-lg p-2 mb-3'>
        <div>
        <h2>Clientes</h2>

        <Table striped hover variant="success">

        <table> 
            <thead>
                <th>Nombre</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Direccion</th>
                <th>Acciones</th>
            </thead>

            
            {clientes.map(clientes => (
                <tr key={clientes.id}>
                    <td>{clientes.nombre}</td>        
                    <td>{clientes.email}</td>        
                    <td>{clientes.telefono}</td>        
                    <td>{clientes.direccion}</td>
                    <td><button>Editar</button> <button>Eliminar</button></td>        
                </tr>
            ))}
        </table>
        </Table>
    </div>

    </Container>
    
    );
};

export default ListaClientes 