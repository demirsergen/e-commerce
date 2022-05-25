import React, { useContext } from "react";
import ProductsContext from "../context/ProductsContext";

import "../App.css";

const CartItem = ({ item }) => {
  const { decreaseQuantity, increaseQuantity, removeFromCart } =
    useContext(ProductsContext);
  if (item.qty === 0) return null;
  return (
    <>
      <div className="cartItem__wrapper">
        <div className="cartItem__left">
          <img src={item.image} alt="" />
        </div>
        <div className="cartItem__right">
          <p>{item.title}</p>
          <h3>${item.price.toFixed(2)}</h3>
        </div>
        <button className="remove__button" onClick={() => removeFromCart(item)}>
          Remove
        </button>
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
