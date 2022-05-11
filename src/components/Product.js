import React from "react";
import "../App.css";

const Product = ({ product }) => {
  return (
    <div className="product__container">
      <img src={product.image} alt="" />
      <p>{product.title.substr(0, 20)}...</p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
