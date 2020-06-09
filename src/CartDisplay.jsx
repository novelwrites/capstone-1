import React, { useState } from "react";

function CartDisplay(props) {
  // const [cartdisplay,setCartDisplay] = useState(0);

  return <section className="cartdisplay">{props.pizza}</section>;
  //the only way to receive the value of the display is through props.pizza
}

export default CartDisplay;