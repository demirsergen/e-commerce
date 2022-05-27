import React, { useContext } from "react";

import ProductsContext from "../context/ProductsContext";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(ProductsContext);
  return (
    <div className="nav__wrapper">
      <nav>
        <div className="navbar__left">
          <h3>E-Commerce</h3>
          <Link to="/">Homepage</Link>
        </div>
        <div className="navbar__right">
          <Link to="/cart" className="cart__button">
            {`Cart (${cart?.length})`}
          </Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
