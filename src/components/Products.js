import React, { useContext } from "react";
import Product from "./Product";
import ProductsContext from "../context/ProductsContext";
import "../App.css";

const Products = () => {
  const { products, filter, isLoading, setIsLoading, setFilter } =
    useContext(ProductsContext);

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
