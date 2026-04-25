import React, { useState } from "react";
import Product from "./components/Product";
import SearchNav from "./components/SearchNav";
import SideNav from "./components/SideNav";
import "./App.css";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shopping from "./Shopping";
import Home from "./Home";
import ProductDetails from "./components/ProductDetails";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home setCartItems={setCartItems} cartItems={cartItems} />}
        />
        <Route
          path="/Shopping"
          element={
            <Shopping cartItems={cartItems} setCartItems={setCartItems} />
          }
        />
        <Route
          path="/ProductDetails/:id"
          element={
            <ProductDetails setCartItems={setCartItems} cartItems={cartItems} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
