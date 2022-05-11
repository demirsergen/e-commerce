import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  const cartItemQty = useSelector((state) => state.cart.value.length);
  return (
    <nav>
      <div className="navbar__left">
        <h2>E-commerce</h2>
        <Link to="/">Dashboard</Link>
      </div>
      <div className="navbar__right">
        <Link to="/cart" className="cart__button">
          {`Cart (${cartItemQty})`}
        </Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
