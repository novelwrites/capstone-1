//Shopping Cart Page that displays items selected
//for purchase along with how many
//Displays Total Amount 
//Displays payment method

import React from 'react'

export default function ShoppingCart({items,setItems,itemsaddedtocart, setItemsaddedtocart}) {
    console.log(itemsaddedtocart)
    return (
        <div id='shoppingcartcontainer'>
            <hr/>
    
            {itemsaddedtocart.map((item,i)=>{
                return (
                    <div id='shoppingcartitem'>
              <img src={item.img}></img> 
              <p className='itemdetails'>X {item.cartQuantity}</p>
              <p className='itemdetails'>{item.price}</p>
               
               </div> 
                )
            })}
          
               <hr/>
            <div id='paystuff'>
                <p>Total</p>
                <button>Pay Now</button>
            </div>
        </div>
    )
}
