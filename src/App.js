import React, { useState } from 'react';
import data from './data'
import './App.css';
import ProductPage from './ProductPage';
import ShoppingCart from './ShoppingCart';
import './ProductPage.css'
import Footer from "./footer";
import Header from "./header";

function App() {
  const [ items, setItems ] = useState(data)
  return (
    <div className="App">
       <Header />
       <ProductPage items = {items} />
       <ShoppingCart />
       <Footer />
    </div>
  );
}



export default App;
