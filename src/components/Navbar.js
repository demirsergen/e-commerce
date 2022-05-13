import React, { useContext } from "react";

import ProductsContext from "../context/ProductsContext";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(ProductsContext);
  return (
    <nav>
      <div className="navbar__left">
        <img
          src={require("../assets/images/logo.png")}
          alt=""
          className="logo"
        />
        <Link to="/">Homepage</Link>
      </div>
      <div className="navbar__right">
        <Link to="/cart" className="cart__button">
          {`Cart (${cart.length})`}
        </Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
