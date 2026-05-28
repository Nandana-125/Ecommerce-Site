import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import "./Payment.css";
import CartContext from "../context/CartContext";
import ToastContext from "../context/ToastContext";

const Payment = () => {
  const { cartItems, setCartItems } = useCart();
  const { showToast } = useToast();
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
      <p>
        Subtotal : ${final}
        USD
      </p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Payment;
