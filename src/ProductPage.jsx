//the only way to receive the object data for each product is through the props {items}
//because it has to come from parent (Apps.js)

import React from 'react'
import { Link } from 'react-router-dom';

const  ProductPage = ({items,setItems,itemsaddedtocart,setItemsaddedtocart,addTotalCart,setAddTotalCart}) => {
  function decInventoryQuantity (index){
const arrayCopy=[...items]//initialized value of state is the data.js. Creating because resetting 
//the state to be the new value that we will get when we do the operation decrement on inventoryQuantity.
 //behind the scenes re-rendering page with the new array which happens every time you do the decrement.
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
