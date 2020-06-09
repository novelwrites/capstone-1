import React, { useState } from 'react';
import data from './data'
import './App.css';
import ProductPage from './ProductPage';
import ShoppingCart from './ShoppingCart';
import './ProductPage.css'

function App() {
  const [ items, setItems ] = useState(data)
  return (
    <div className="App">
       <ProductPage items = {items} />
       <ShoppingCart />
    </div>
  );
}



export default App;
