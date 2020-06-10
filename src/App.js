import React, { useState } from 'react';
import data from './data'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductPage from './ProductPage';
import ShoppingCart from './ShoppingCart';
import './ProductPage.css'
import './ShoppingCart.css'
import Footer from "./footer";
import Header from "./header";
import CartCounter from "./CartCounter.jsx";
import CartButton from "./CartButton.jsx";

function App() {
  const [ items, setItems ] = useState(data)
  const [itemsaddedtocart, setItemsaddedtocart]=useState([])  
  return (
    <Router>
    <div className="App">
       <Header />
       <Switch>
       
       <Route exact path="/productpage" render={() => ( //We want to render this page with these props
        <ProductPage items = {items} setItems = {setItems} itemsaddedtocart = {itemsaddedtocart} setItemsaddedtocart = {setItemsaddedtocart}/>
       )}>
         
       </Route>

       <Route exact path="/shoppingcart" render={() => (
        <ShoppingCart items = {items} setItems = {setItems} itemsaddedtocart = {itemsaddedtocart} setItemsaddedtocart = {setItemsaddedtocart} />
       )}>
    
       </Route>
       </Switch>
       
       <Footer />
    </div>
    </Router>
  );
}



export default App;
