import React from "react";
import "../App.css";

const CartItem = ({ item, decreaseQuantity, increaseQuantity }) => {
  return (
    <>
      <div className="cartItem__wrapper">
        <div className="cartItem__left">
          <img src={item.image} alt="" />
        </div>
        <div className="cartItem__right">
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
        <div className="counter__wrapper">
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>
      </div>
    </>
  );
};

export default CartItem;
