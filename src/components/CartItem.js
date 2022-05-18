import React from "react";
import "../App.css";

const CartItem = ({ item }) => {
  return (
    <div className="cartItem__wrapper">
      <div className="cartItem__left">
        <img src={item.image} alt="" />
      </div>
      <div className="cartItem__right">
        <p>{item.title}</p>
        <p>${item.price}</p>
      </div>
    </div>
  );
};

export default CartItem;
