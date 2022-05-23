import { createContext, useEffect, useState } from "react";

const ProductsContext = createContext({});

export const ProductsContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItemQty, setTotalItemQty] = useState(0);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products", {
        "Access-Control-Allow-Origin": "http://localhost:3000/",
      });
      if (true) {
        setProducts(await response.clone().json());
        setFilter(await response.json());
      }
      setIsLoading(false);
    };

    getProducts();
  }, []);

  const addToCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const exist = cart.find((x) => x.id === product.id);
    if (exist) {
      const newCart = cart.filter((x) => x !== exist);
      setCart(newCart);
    }
  };

  const increaseQuantity = (id) => {
    console.log(id);
    const currentProduct = cart.filter((x) => id === x.id);
    setTotalItemQty((prev) => (prev += 1));
    console.log(currentProduct);
    currentProduct[0].qty += 1;
  };
  const decreaseQuantity = (id) => {
    const currentProduct = cart.filter((x) => id === x.id);
    setTotalItemQty((prev) => (prev -= 1));
    currentProduct[0].qty -= 1;
    if (currentProduct[0].qty === 0) {
      removeFromCart(currentProduct[0]);
    }
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
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        totalItemQty,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
export default ProductsContext;
