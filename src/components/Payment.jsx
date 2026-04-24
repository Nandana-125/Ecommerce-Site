import React from "react";
import "./Payment.css";

const Payment = ({ cartItems }) => {
  return (
    <div className="payment">
      <h1>Esimate Shipping</h1>
      <input type="checkbox" id="gift" />
      <label htmlFor="gift">Add a gift ?</label>

      <p>
        Subtotal : $
        {cartItems
          .reduce((total, m) => total + m.quantity * m.price, 0)
          .toFixed(2)}
        USD
      </p>
      <input type="checkbox" id="terms" />
      <label htmlFor="terms">accept terms and conditions</label>
      <br />
      <button>Checkout</button>
    </div>
  );
};

export default Payment;
