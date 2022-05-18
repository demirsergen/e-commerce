import React from "react";
import "../App.css";

const Counter = ({ increaseQuantity, decreaseQuantity, item }) => {
  return (
    <div className="counter__wrapper">
      <button onClick={() => decreaseQuantity(item.product.id)}>-</button>
      <span>{item.qty}</span>
      <button onClick={() => increaseQuantity(item.product.id)}>+</button>
    </div>
  );
};

export default Counter;
