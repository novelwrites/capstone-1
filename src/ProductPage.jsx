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
        

const  ProductPage = ({items,setItems,itemsaddedtocart,setItemsaddedtocart}) => {
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
        <p> Quantity: {product.quantity} </p>
        <p> Manufacturer: {product.manufacturer} </p>
        <p> Category: {product.category} </p>
        <button onClick={() => {
          setItemsaddedtocart(itemsaddedtocart.concat(items[index]));
          console.log(itemsaddedtocart)
        }}
>Add to Cart</button>
      </div> 
       
      )}
    </div>
  )
}

export default ProductPage
