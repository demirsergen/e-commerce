import React, { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/ProductsContext";
import "../App.css";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart, totalItemQty } = useContext(ProductsContext);
  const [totalItemValue, setTotalItemValue] = useState(0);
  const [totalTax, setTotalTax] = useState(0);
  // const [afterTaxTotal, setAfterTaxTotal]

  useEffect(() => {
    calculateTotalCartValue();
  }, [totalItemValue, totalItemQty]);

  const calculateTotalCartValue = () => {
    let total = 0;
    cart.map((item) => {
      let itemValue = item.price * item.qty;
      total += itemValue;
    });
    setTotalItemValue(total);
    setTotalTax((totalItemValue * 6.5) / 100);
  };

  if (cart.length === 0) {
    return (
      <div className="cart__wrapper">
        <div className="cart__outerContainer">Your cart is empty.</div>
      </div>
    );
  }

  return (
    <div className="cart__wrapper">
      <h1 className="cart__title">Shopping Cart</h1>
      <div className="cart__outerContainer">
        {cart.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
        <div className="totalValueContainer">
          <h3>Subtotal: ${totalItemValue.toFixed(2)}</h3>
          <h3>Tax: ${((totalItemValue * 6.5) / 100).toFixed(2)}</h3>
          <h2 className="total">
            Total: ${(totalItemValue + totalTax).toFixed(2)}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
