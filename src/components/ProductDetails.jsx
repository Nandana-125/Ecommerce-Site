import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
import axios from "axios";
import Toast from "./Toast";
const ProductDetails = ({ setCartItems, cartItems }) => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [quant, setQuant] = useState(1);
  const [add, setAdded] = useState(false);
  const [message, setMessage] = useState("");

  const handleIncrement = () => {
    setQuant(quant + 1);
  };

  const handleDecrement = () => {
    setQuant(quant <= 1 ? 1 : quant - 1);
  };

  const handleAdd = (name) => {
    if (cartItems.some((m) => m.name === name)) {
      setCartItems(
        cartItems.map((m) =>
          m.name === name ? { ...m, quantity: m.quantity + quant } : m
        )
      );
    } else
      setCartItems([
        ...cartItems,
        {
          name: name,
          price: products.price,
          image: products.thumbnail,
          quantity: quant,
        },
      ]);
    setMessage(products.title);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("error fetching" + err);
      });
  }, []);
  return (
    <div>
      <div>
        <Link to="/">
          <button>🔙</button>
        </Link>
      </div>
      <div className="product-details">
        <img src={products.thumbnail} />
        <div className="product-text">
          <h1>{products.title}</h1>
          <h4>{products.price}</h4>
          <p style={{ padding: "0", margin: "0" }}>{products.category}</p>
          <p>Quantity</p>
          <div className="product-quantity">
            <button onClick={handleDecrement}>-</button>
            <p>{quant}</p>
            <button onClick={handleIncrement}>+</button>
          </div>
          <div className="product-add">
            <button onClick={() => handleAdd(products.title)}>
              Add to cart
            </button>
          </div>
          <div>
            <p>Description</p>
            <p>{products.description}</p>
          </div>
        </div>
      </div>
      <Toast added={add} message={message} />
    </div>
  );
};

export default ProductDetails;
