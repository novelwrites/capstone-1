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
  const [search, setSearch]=useState("") //Initilaizes search variable to an empty string
  const searchResults = (item) => {
    setSearch(item) //Taking the value that is being inputted in the search box from the productpage
    //and setting it to the search variable. Line 19 sets search to whatever is in the search box - defines filter for line 22

  let temp=items.filter (item=>item.category.includes (search)||item.name.includes (search))//filter 
  //returns category or name - temp is the array that items filter into
  //Doing this function in App.js so we can pass (item) which  will be filtered array for search to product page 
  setItems(temp) //values that were filtered into array -  setItems to temp because items is what is being displayed on the screen
  }

  return (
    <Router> {/*Need React Router so we can move between the two views in the DOM*/}
    <div className="App">
       <Header /> 
       <Switch>
       
       <Route exact path="/" render={() => ( //We want to render this page with these props
       //used / instead of productpage so that route goes to productpage when start npm
        <ProductPage items = {items} setItems = {setItems} itemsaddedtocart = {itemsaddedtocart} setItemsaddedtocart = {setItemsaddedtocart} addTotalCart = {addTotalCart} setAddTotalCart={setAddTotalCart} searchResults = {searchResults}/>
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
