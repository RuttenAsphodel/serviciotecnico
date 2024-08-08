import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
       
    <Container className='container-lg bg-success text-white stripped p-2 mb-3'>
        <h3 className='bg-danger p-2 text-white'>Formulario Ingreso Clientes</h3>
        
        <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-2" controlId="formNombre">
                <Form.Label column sm={2}>Nombre</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
                </Col>
                
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formEmail">
                <Form.Label column sm={2}>Email</Form.Label>
                <Col sm={10}>
                    <Form.Control type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </Col>
                
            </Form.Group>

            <Form.Group  as={Row} className="mb-3" controlId="formTelefono">
                <Form.Label column sm={2}>Telefono</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={telefono} onChange={e => setTelefono(e.target.value)} />
                </Col>
                
            </Form.Group>
           
            <Form.Group  as={Row} className="mb-3" controlId="formDireccion">
                <Form.Label column sm={2}>Direccion</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" value={direccion} onChange={e => setDireccion(e.target.value)} />
                </Col>
                
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </Container>


    );

};

export default ClienteForm