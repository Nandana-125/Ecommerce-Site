import { useContext, useState } from "react";
import Product from "../components/Product";
import SearchNav from "../components/SearchNav";
import SideNav from "../components/SideNav";
import CartContext from "../context/CartContext";
import AuthContext from "../context/AuthContext";

const Home = () => {
  const { user, setIsLoggedIn } = useContext(AuthContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const [searchText, setSearchText] = useState("");
  const [catFilter, setCatFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");

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
          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
          <div className="product-list">
            <Product
              searchText={searchText}
              catFilter={catFilter}
              setCartItems={setCartItems}
              cartItems={cartItems}
              sortBy={sortBy}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
