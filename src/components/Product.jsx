import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import axios from "axios";
import Toast from "./Toast";
import "./Product.css";
const Product = ({ searchText, catFilter, setCartItems, cartItems }) => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");
  const [added, setAdded] = useState(false);

  const handleClick = (name, price, image) => {
    setMessage(name);
    setAdded(true);
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

    setTimeout(() => setAdded(false), 2000);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log("error fetching" + err);
      });
  }, []);

  const filteredProduct = products.filter(
    (p) =>
      p.title.toLowerCase().includes(searchText.toLowerCase()) &&
      (catFilter === "All" ? true : p.category === catFilter)
  );

  return (
    <div className="product">
      {filteredProduct.map((p) => (
        <div className="items" key={p.id}>
          <img src={p.thumbnail} alt={p.title} />

          <h4>{p.title}</h4>
          <p>
            ⭐️{p.rating}- {p.reviews?.length || 0} reviews
          </p>

          <div className="price">
            <p>${p.price}</p>
            <button
              onClick={() => handleClick(p.title, p.price, p.thumbnail, p.id)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      ))}
      <Toast added={added} message={message} />
    </div>
  );
};

export default Product;
