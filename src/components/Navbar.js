import React, { useContext } from "react";
import { UserAuth } from "../context/AuthContext";
import ProductsContext from "../context/ProductsContext";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(ProductsContext);
  const { user } = UserAuth();
  return (
    <div className="nav__wrapper">
      <nav>
        <div className="navbar__left">
          <h3>E-Commerce</h3>
          <Link to="/">Homepage</Link>
        </div>
        <div className="navbar__right">
          <Link to="/profile" className={user ? "show" : "hide"}>
            Profile
          </Link>
          <Link to="/cart" className="cart__button">
            {`Cart (${cart?.length})`}
          </Link>
          <Link to="/login" className={user ? "hide" : "show"}>
            Login
          </Link>
          <Link to="/register" className={user ? "hide" : "show"}>
            Register
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
