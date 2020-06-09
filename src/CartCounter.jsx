//Responds to buttonclick with increment, decrement, 
//or reset and outputs to CartDisplay.jsx
import React, { useState } from "react"; //react is the library
import CartDisplay from "./CartDisplay.jsx"; //path to Display.jsx file
import CartButton from "./CartButton.jsx"; //function name must match

function CartCounter() {
  const [cartdisplay, setCartDisplay] = useState(0); //placed here
  //so its inside the function
  const increment = () => {
    setCartDisplay(cartdisplay + 1); //child is importing from props from CartButton
  };
  const decrement = () => {
    setCartDisplay(cartdisplay - 1); //child is importing from props from CartButton
  };

  const reset = () => {
    setCartDisplay(0);
  };

  return (
    <div className="counter">
      <CartDisplay pizza={cartdisplay} />{" "}
      {/*{cartdisplay} is the prop thats passed to cartdisplay*/}
      <CartDisplay increment={increment} decrement={decrement} reset={reset} />
    </div>
  );
}

export default CartCounter;