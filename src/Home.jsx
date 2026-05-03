import React, { useState } from "react";
import Product from "./components/Product";
import SearchNav from "./components/SearchNav";
import SideNav from "./components/SideNav";
import "./App.css";

const Home = ({ setCartItems, cartItems, user, setIsLoggedIn }) => {
  const [searchText, setSearchText] = useState("");
  const [catFilter, setCatFilter] = useState("All");

  return (
    <div>
      <div className="page" style={{ display: "flex", flexDirection: "row" }}>
        <SideNav setCatFilter={setCatFilter} cartItems={cartItems} />
        <div className="content">
          <SearchNav
            setSearchText={setSearchText}
            user={user}
            setIsLoggedIn={setIsLoggedIn}
          />
          <h2>Reccomended</h2>
          <div className="product-list">
            <Product
              searchText={searchText}
              catFilter={catFilter}
              setCartItems={setCartItems}
              cartItems={cartItems}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
