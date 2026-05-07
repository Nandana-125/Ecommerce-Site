import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Product.css";
import CartContext from "../context/CartContext";
import ToastContext from "../context/ToastContext";
const Product = ({ searchText, catFilter, sortBy }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleClick = (name, price, image) => {
    showToast("Added " + name + " to cart ✅");

    if (cartItems.some((m) => m.name === name)) {
      setCartItems(
        cartItems.map((m) =>
          m.name === name ? { ...m, quantity: m.quantity + 1 } : m
        )
      );
    } else
      setCartItems([
        ...cartItems,
        { name: name, price: price, image: image, quantity: 1 },
      ]);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error fetching" + err);
        setLoading(false);
      });
  }, []);

  const filteredProduct = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (catFilter === "All" ? true : p.category === catFilter)
  );
  const sortedProduct = [...filteredProduct];
  if (sortBy === "price-asc") {
    sortedProduct.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    sortedProduct.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    sortedProduct.sort((a, b) => a.rating - b.rating);
  }
  return (
    <div>
      <p>Results : {sortedProduct.length}</p>
      {loading ? (
        <p>Loading ....</p>
      ) : (
        <div>
          <div className="product">
            {sortedProduct.map((p) => (
              <div key={p.id} className="items">
                <Link to={`/product-details/${p.id}`}>
                  <img src={p.thumbnail} alt={p.title} />
                </Link>
                <h4>{p.title}</h4>
                <p>
                  ⭐️{p.rating}- {p.reviews?.length || 0} reviews
                </p>

                <div className="price">
                  <p>${p.price}</p>

                  <button
                    onClick={() =>
                      handleClick(p.title, p.price, p.thumbnail, p.id)
                    }
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
