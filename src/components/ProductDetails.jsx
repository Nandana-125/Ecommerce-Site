import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import axios from "axios";
const ProductDetails = ({ setCartItems, cartItems }) => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [quant, setQuant] = useState(1);

  const handleIncrement = () => {
    setQuant(quant + 1);
  };

  const handleDecrement = () => {
    setQuant(quant <= 1 ? 1 : quant - 1);
  };

  const handleAdd = () => {
    setCartItems([
      ...cartItems,
      {
        name: products.title,
        price: products.price,
        image: products.thumbnail,
        quantity: quant,
      },
    ]);
    alert("added to cart ");
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
            <button onClick={handleAdd}>Add to cart</button>
          </div>
          <div>
            <p>Description</p>
            <p>{products.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
