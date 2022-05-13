import React, { useContext } from "react";
import ProductsContext from "../context/ProductsContext";
import "../App.css";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useContext(ProductsContext);

  return (
    <div className="cart__wrapper">
      <div className="cart__outerContainer">
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
