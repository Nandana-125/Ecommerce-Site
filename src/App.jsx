import React, { useState } from "react";
import Product from "./components/Product";
import SearchNav from "./components/SearchNav";
import SideNav from "./components/SideNav";
import "./App.css";
import Cart from "./components/Cart";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Shopping from "./Shopping";
import Home from "./Home";
import ProductDetails from "./components/ProductDetails";
import Register from "./components/Register";
import Login from "./components/Login";
const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("currentUser")
  );

  const user = isLoggedIn
    ? JSON.parse(localStorage.getItem("currentUser"))
    : null;

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home
                setCartItems={setCartItems}
                cartItems={cartItems}
                user={user}
                setIsLoggedIn={setIsLoggedIn}
              />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route
          path="/Shopping"
          element={
            isLoggedIn ? (
              <Shopping cartItems={cartItems} setCartItems={setCartItems} />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />
        <Route
          path="/ProductDetails/:id"
          element={
            isLoggedIn ? (
              <ProductDetails
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            ) : (
              <Navigate to="/Login" />
            )
          }
        />

        <Route path="/Register" element={<Register />} />
        <Route
          path="/Login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
