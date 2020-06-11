//Shopping Cart Page that displays items added to cart from Product Page
//Along with X Quantity and Price
//Displays Total Amount
//Displays Button for Payment Method

import React from "react";
import { Link } from "react-router-dom";

export default function ShoppingCart({ //props that are available if needed for future development
  items,
  setItems,
  itemsaddedtocart,
  setItemsaddedtocart,
  addTotalCart,
  setAddTotalCart,
}) {
  console.log(itemsaddedtocart);
  return (
    <div id="shoppingcartcontainer">
      <hr />
      <Link to="/productpage" id="productLink">
        <button>Products</button>
      </Link>
      {itemsaddedtocart.map((item, i) => {
        //Very cool method to iterate through array of items added to cart and getting properties I want to be displayed
        return (
          <div id="shoppingcartitem">
            {" "}
            {/*div id so can use css styling easily*/}
            <img className="picturedetails" src={item.img}></img> {/*item values pulled out pf product object*/}
            <p className="itemdetails">X {item.cartQuantity}</p>
            <p className="itemdetails">{item.price}</p>
          </div>
        );
      })}

      <hr />
      <div id="paystuff">
        <p> Total {addTotalCart}</p>{" "}
        {/*Brings in prop from Products Page that calculates Total*/}
        <button>Pay Now</button>
      </div>
    </div>
  );
}
