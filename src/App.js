import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/roboto";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import ProductPage from "./components/ProductPage";
import Footer from "./components/Footer";
import ProfilePage from "./components/ProfilePage";

import { ProductsContextProvider } from "./context/ProductsContext";
import { AuthContextProvider } from "./context/AuthContext";
import Register from "./components/Register";

function App() {
  return (
    <ProductsContextProvider>
      <AuthContextProvider>
        <BrowserRouter>
          <div className="app__wrapper">
            <Navbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/:id" element={<ProductPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            {/* <Footer /> */}
          </div>
        </BrowserRouter>
      </AuthContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
