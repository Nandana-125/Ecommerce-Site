import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Shopping from "./pages/Shopping";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Wishlist from "./pages/Wishlist";
const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

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
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/shopping-cart"
          element={
            isLoggedIn ? (
              <Shopping cartItems={cartItems} setCartItems={setCartItems} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/product-details/:id"
          element={
            isLoggedIn ? (
              <ProductDetails
                setCartItems={setCartItems}
                cartItems={cartItems}
                setWishlist={setWishlist}
                wishlist={wishlist}
                user={user}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/wishlist"
          element={
            isLoggedIn ? (
              <Wishlist
                wishlist={wishlist}
                cartItems={cartItems}
                setCartItems={setCartItems}
                setWishlist={setWishlist}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
