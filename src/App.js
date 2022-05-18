import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import { ProductsContextProvider } from "./context/ProductsContext";

function App() {
  return (
    <ProductsContextProvider>
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
    </ProductsContextProvider>
  );
}

export default App;
