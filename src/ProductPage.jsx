// import React, { useState } from "react";

// function ProductPage(props) {
//   return (
//     <div>
//       {props.items.map((product, i) => (
//         <p key={i}>
//           {product}
//           <button onClick={() => props.deletetodo(i)}>Delete</button>
//           <button>Completed</button>
//           <checkbox onClick={() => props.checktodo(i)}>Completed</checkbox>
//           <input type="checkbox"/>
//         </p>
//       ))}</div>
//   )

//   //The className property sets or returns the class name of an element

//   //the only way to receive the value of display is through props.product
//   //because has to come from parent (Apps.js)
// }
// <div>
//     <h1>Photo Collections</h1>

//       <img src="./assets/blueskies.jpg"/>
//       <div> Name is: {product.name} </div>
//  </div>

         
  
         
                                                                                 


// export default ProductPage;


import React from 'react'
import { Link } from 'react-router-dom';


    //<link rel="stylesheet" type="text/css" href="ProductPage.css"
        

const  ProductPage = ({items,setItems,itemsaddedtocart,setItemsaddedtocart,addTotalCart,setAddTotalCart}) => {
  function decInventoryQuantity (index){
const arrayCopy=[...items]//initialized vale of state is the data.js. Creating because resetting the state to be the new value that we will get when we do the operation decrement on inventoryQuantity.
 //behind the scenes rerendering page with the new array which happens every time you do the decrement.
 arrayCopy[index].inventoryQuantity -=1             //index because want same value from onClick
setItems(arrayCopy)
}
  return (
    <div>
      <Link to='/shoppingcart' id='cartLink'>
            <button>
              Shopping Cart
            </button>
          </Link>
      {items.map((product, index) => 
      <div key={index} >
        <img src={product.img} style={{width: "200px"}} />
        <p> Name: {product.name} </p>
        <p> Serial#: {product.serialnumber} </p>
        <p> Price: {product.price} </p>
        <p> Inventory Quantity: {product.inventoryQuantity} </p>
        <p> Manufacturer: {product.manufacturer} </p>
        <p> Category: {product.category} </p>
        <div id='shoppingcartbutton'>
        <button onClick={() => {
         if (product.inventoryQuantity > 0){

          setItemsaddedtocart(itemsaddedtocart.concat(items[index]));
          console.log(itemsaddedtocart);
          decInventoryQuantity (index);
          //setItems (items[index].inventoryQuantity-1);//working on this formula to decrease inventory
          //else {} //Do Nothing - Add Text to say sorry, out of stock
          setAddTotalCart(addTotalCart+product.price)
         }
         
        }}
>Add to Cart</button>
</div>
      </div> 
       
      )}
    </div>
  )
}

export default ProductPage
