import React, { useState, useEffect } from "react";
import Product from "./Product";
import "../App.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    };

    getProducts();
  }, []);

  if (isLoading) {
    return <div className="loading__container">Loading...</div>;
  }
  return (
    <div className="products__outer-container">
      <h1>Products</h1>
      <div className="categories__container">
        <button>All</button>
        <button>Women</button>
        <button>Men</button>
        <button>Jewellery</button>
      </div>
      <div className="products__container">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
