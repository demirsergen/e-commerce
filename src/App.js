import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";
import ProductsContext from "./context/ProductsContext";
import Footer from "./components/Footer";

function App() {
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
  return (
    <ProductsContext.Provider
      value={{ products, filter, isLoading, setIsLoading, setFilter, cart }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ProductsContext.Provider>
  );
}

export default App;
