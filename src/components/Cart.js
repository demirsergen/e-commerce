import React, { useContext, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import "../App.css";
import CartItem from "./CartItem";
import Counter from "./Counter";

const Cart = () => {
  const { cart } = useContext(ProductsContext);
  const [totalItemQty, setTotalItemQty] = useState(0);
  const [totalItemValue, setTotalItemValue] = useState(0);

  const calculateTotalCartValue = () => {
    cart.map((item) => {
      setTotalItemValue((prev) => (prev += item.price));
    });
  };

  const increaseQuantity = (id) => {
    const currentProduct = cart.filter((x) => id === x.id);
    setTotalItemQty((prev) => (prev += 1));
    currentProduct[0].qty += 1;
  };
  const decreaseQuantity = (id) => {
    const currentProduct = cart.filter((x) => id === x.id);
    setTotalItemQty((prev) => (prev -= 1));
    currentProduct[0].qty -= 1;
  };

  return (
    <div className="cart__wrapper">
      <h2>Shopping Cart</h2>
      <div className="cart__outerContainer">
        {cart.map((cartItem) => (
          <div className="cart__items">
            <CartItem key={cartItem.id} item={cartItem} />
            <Counter
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              item={cartItem}
            />
          </div>
        ))}
        <div>{totalItemValue}</div>
      </div>
    </div>
  );
};

export default Cart;
