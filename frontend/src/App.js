import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar/navbar';
import ItemList from './components/clientes/ClienteList'
import ItemForm from './components/clientes/ClienteForm';
import axios from 'axios';

const App= () => {

  const [items, setItems] = useState([]);
  
  const fetchItems = () =>{
    axios.get('http://127.0.0.1:8000/api/clientes/')
      .then(res => {
        setItems(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  useEffect(() => {
    fetchItems();
  }, []);
    
  return (
    <div className='App'>
      <Navbar />

      <ItemForm fetchItems={fetchItems} />
      <ItemList items={items} />
    </div>
  )
}


export default App;
