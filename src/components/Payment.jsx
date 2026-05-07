import { useContext } from "react";
import "./Payment.css";
import CartContext from "../context/CartContext";
import ToastContext from "../context/ToastContext";

const Payment = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);
  const final = cartItems
    .reduce((total, m) => total + m.quantity * m.price, 0)
    .toFixed(2);
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      showToast("Empty cart");
    } else {
      showToast("Item purchased successfully ✅ : $" + final);
      setCartItems([]);
    }
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
    </div>
  );
};

export default Payment;
