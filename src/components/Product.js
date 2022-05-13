import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../context/ProductsContext";
import "../App.css";

const Product = ({ product }) => {
  const { setCart, cart } = useContext(ProductsContext);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="products__wrapper">
      <div className="product__container">
        <img src={product.image} alt={product.title} />
        <p>{product.title.substr(0, 30)}...</p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
        <div className="buttons__container">
          <button className="product__btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
          <Link to={`/${product.id}`} className="product__btn">
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
