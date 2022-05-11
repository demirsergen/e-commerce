import React, { useState, useEffect } from "react";
import Product from "./Product";
import "../App.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (true) {
        setProducts(await response.clone().json());
        setFilter(await response.json());
      }
      setIsLoading(false);
    };

    getProducts();
  }, []);

  const filterData = (category) => {
    setIsLoading(true);
    const filteredList = products.filter(
      (product) => product.category === category
    );
    setFilter(filteredList);
    setIsLoading(false);
  };

  if (isLoading) {
    return <div className="loading__container">Loading...</div>;
  }
  return (
    <div className="products__outer-container">
      <h1>Products</h1>
      <div className="categories__container">
        <button onClick={() => setFilter(products)}>All</button>
        <button onClick={() => filterData("women's clothing")}>
          Women's Clothing
        </button>
        <button onClick={() => filterData("men's clothing")}>
          Men's Clothing
        </button>
        <button onClick={() => filterData("jewelery")}>Jewelery</button>
        <button onClick={() => filterData("electronics")}>Electronics</button>
      </div>
      <div className="products__container">
        {filter.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
