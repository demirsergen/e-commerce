import React from "react";
import "../App.css";

const CartItem = ({ item }) => {
  return (
    <div className="cartItem__wrapper">
      <div className="cartItem__left">
        <img src={item.image} alt="" />
      </div>
      <div className="cartItem__right">
        <h3>{item.title}</h3>
      </div>
    </div>
  );
};

export default CartItem;
