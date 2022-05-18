import React, { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import "../App.css";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useContext(ProductsContext);
  const [totalItemQty, setTotalItemQty] = useState(0);
  const [totalItemValue, setTotalItemValue] = useState(0);

  useEffect(() => {
    calculateTotalCartValue();
  }, [totalItemQty, totalItemValue]);

  const calculateTotalCartValue = () => {
    let total = 0;
    cart.map((item) => {
      let itemValue = item.price * item.qty;
      total += itemValue;
    });
    setTotalItemValue(total);
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
      <h1 className="cart__title">Shopping Cart</h1>
      <div className="cart__outerContainer">
        {cart.map((cartItem) => (
          <CartItem
            key={cartItem.id}
            item={cartItem}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))}
        <div className="totalValueContainer">
          <h3>Total: ${totalItemValue}</h3>
        </div>
      </div>
    </div>
  );
};

export default Cart;
