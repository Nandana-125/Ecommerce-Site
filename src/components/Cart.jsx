import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const { cartItems, setCartItems } = useCart();
  const handleDelete = (i) => {
    setCartItems(cartItems.filter((s, index) => index != i));
  };

  const handleIncrement = (name) => {
    setCartItems(
      cartItems.map((m) =>
        m.name === name ? { ...m, quantity: m.quantity + 1 } : m
      )
    );
  };

  const handleDecrement = (name) => {
    setCartItems(
      cartItems.map((m) =>
        m.name === name
          ? { ...m, quantity: m.quantity <= 1 ? 1 : m.quantity - 1 }
          : m
      )
    );
  };

  return (
    <div className="shopping-cart">
      <p>
        Total Items in cart (
        {cartItems.reduce((total, m) => total + m.quantity, 0)})
      </p>
      <div className="empty">
        {cartItems.length === 0 ? <p>Cart is empty !!</p> : null}
      </div>
      <div className="cart-grid">
        <div className="cart-heading">
          <h4>Product</h4>
          <h4>Price</h4>
          <h4>Quantity</h4>
          <h4>Total</h4>
        </div>

        {cartItems.map((c, i) => (
          <div key={i} className="cart-product">
            <div className="cart-product-info">
              <img
                src={c.image}
                style={{ maxWidth: "100px", maxHeight: "100px" }}
              />
              <div className="cart-product-text">
                <p>{c.name}</p>
                <button onClick={() => handleDelete(i)}>remove</button>
              </div>
            </div>

            <p>${c.price}</p>
            <div className="cart-quantity">
              <button onClick={() => handleDecrement(c.name)}>-</button>
              <p>{c.quantity}</p>
              <button onClick={() => handleIncrement(c.name)}>+</button>
            </div>
            <p>${(c.quantity * c.price).toFixed(2)}</p>
          </div>
        ))}

        <div className="cart-order-note">
          <p>Order Notes - optional</p>
          <textarea placeholder="I want to add delivery instructions..." />
        </div>
      </div>
    </div>
  );
};

export default Cart;
