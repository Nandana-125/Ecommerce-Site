import { useState } from "react";
import "./Payment.css";
import Toast from "./Toast";

const Payment = ({ cartItems, setCartItems }) => {
  const [added, setAdded] = useState(false);
  const [message, setMessage] = useState("");
  const final = cartItems
    .reduce((total, m) => total + m.quantity * m.price, 0)
    .toFixed(2);
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      setMessage("Empty cart");
      setAdded(true);
    } else {
      setMessage("Item purchased successfully ✅ : $" + final);
      setAdded(true);
      setCartItems([]);
    }
    setTimeout(() => setAdded(false), 2000);
  };
  return (
    <div className="payment">
      <h1>Esimate Shipping</h1>
      <input type="checkbox" id="gift" />
      <label htmlFor="gift">Add a gift ?</label>

      <p>
        Subtotal : ${final}
        USD
      </p>
      <input type="checkbox" id="terms" />
      <label htmlFor="terms">accept terms and conditions</label>
      <br />
      <button onClick={handleCheckout}>Checkout</button>
      <Toast added={added} message={message} />
    </div>
  );
};

export default Payment;
