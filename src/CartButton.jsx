import React from "react";

export default function CartButton(props) {
  return (
    <div>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}
