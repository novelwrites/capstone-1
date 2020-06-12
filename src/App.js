import React, { useState } from 'react';
import data from './data'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './style.sass';
import ProductPage from './ProductPage';
import ShoppingCart from './ShoppingCart';
import './ProductPage.css'
import './ShoppingCart.css'
import Footer from "./footer";
import Header from "./header";

function App() {
  const [ items, setItems ] = useState(data) //setting up props for productpage.jsx and shoppingcart.jsx
  const [itemsaddedtocart, setItemsaddedtocart]=useState([]) 
  const [addTotalCart, setAddTotalCart] = useState(0)
  return (
    <Router> {/*Need React Router so we can move between the two views in the DOM*/}
    <div className="App">
       <Header /> 
       <Switch>
       
       <Route exact path="/" render={() => ( //We want to render this page with these props
       //used / instead of productpage so that route goes to productpage when start npm
        <ProductPage items = {items} setItems = {setItems} itemsaddedtocart = {itemsaddedtocart} setItemsaddedtocart = {setItemsaddedtocart} addTotalCart = {addTotalCart} setAddTotalCart={setAddTotalCart}/>
       )}>
         
       </Route>

       <Route exact path="/shoppingcart" render={() => ( //We want to render this page with these props
        <ShoppingCart items = {items} setItems = {setItems} itemsaddedtocart = {itemsaddedtocart} setItemsaddedtocart = {setItemsaddedtocart} addTotalCart = {addTotalCart} setAddTotalCart={setAddTotalCart}/>
       )}>
    
       </Route>
       </Switch>
       
       <Footer />
    </div>
    </Router>
  );
}



export default App;
