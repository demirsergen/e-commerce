import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext({});

export const ProductsContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
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

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        filter,
        isLoading,
        setIsLoading,
        setFilter,
        cart,
        setCart,
        addToCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsContext;
