import React, { useContext } from "react";
import ProductsContext from "../context/ProductsContext";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { products, addToCart } = useContext(ProductsContext);
  let { id } = useParams();
  const currentProducts = products.filter((product) => {
    return product.id == id;
  });
  const currentProduct = currentProducts[0];
  return (
    <div className="productpage__outer-container">
      <div className="productpage__image-container">
        <img src={currentProduct.image} alt="" />
      </div>
      <div className="productpage__info-container">
        <h2>{currentProduct.title}</h2>
        <p>{currentProduct.description}</p>
        <p>${currentProduct.price}</p>
        <button onClick={() => addToCart(currentProduct)}>Buy Now!</button>
      </div>
    </div>
  );
};

export default ProductPage;
