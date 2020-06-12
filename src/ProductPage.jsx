//The only way to receive the object data for each product is through the props {items}
//because it has to come from parent (Apps.js)

import React from 'react'
import { Link } from 'react-router-dom';

const  ProductPage = ({items,setItems,itemsaddedtocart,setItemsaddedtocart,addTotalCart,setAddTotalCart}) => {
  function decInventoryQuantity (index){ 
const arrayCopy=[...items]//initialized value of state is the data.js. Creating because resetting 
//the state to be the new value that we will get when we do the operation decrement on inventoryQuantity.
 //Behind the scenes it is re-rendering page with the new array which happens every time you do the decrement.
 //Had to do outside of return on Line 17 because You can't create a function inside of a return so you have
 //to create the function inside a parent function
 arrayCopy[index].inventoryQuantity -=1  //index because I want the same value from onClick and sets inventoryQuantity to that value - 1
setItems(arrayCopy)
}
  return (
    <div>
      <Link to='/shoppingcart' id='cartLink'>
            <button>
              Shopping Cart
            </button>
          </Link>
      {items.map((product, index) => //map method to iterate through items 
      <div key={index} >
        <img src={product.img} style={{width: "200px"}} />
        <p> Name: {product.name} </p>
        <p> Serial#: {product.serialnumber} </p>
        <p> Price: {product.price} </p>
        <p> Inventory Quantity: {product.inventoryQuantity} </p>
        <p> Manufacturer: {product.manufacturer} </p>
        <p> Category: {product.category} </p>
        <div id='shoppingcartbutton'>
        <button onClick={() => {    //Inside the map function: Handles mouse click event - Add to Cart Button is clicked
         if (product.inventoryQuantity > 0){ //If statement is satisfied then we will add item to cart
          //and we also decrement inventory by 1 (see function on line 8)

          setItemsaddedtocart(itemsaddedtocart.concat(items[index])); //concat to array items added to cart
          //Note: All properties of each product object will be in array 
          console.log(itemsaddedtocart); //for debug
          decInventoryQuantity (index);  //Calls the function on line 8 and passes index to function 
          //so it knows which item to decrease the value of
          
         //                       //Do Nothing - Add Text to say sorry, out of stock
          setAddTotalCart(addTotalCart+product.price) //Calculates total of items in cart each time added
         }
         else {window.alert("Doggone it! We're out of that one!")} 
        }}
>Add to Cart</button>
</div>
      </div> 
       
      )}
    </div>
  )
}

export default ProductPage
