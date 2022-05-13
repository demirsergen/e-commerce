import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Product = ({ product }) => {
  return (
    <div className="products__wrapper">
      <div className="product__container">
        <img src={product.image} alt={product.title} />
        <p>{product.title.substr(0, 30)}...</p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <div className="buttons__container">
          <Link to="/cart" className="product__btn">
            Add to Cart
          </Link>
          <Link to={`/${product.id}`} className="product__btn">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
