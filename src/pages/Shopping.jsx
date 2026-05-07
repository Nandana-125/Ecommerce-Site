import Cart from "../components/Cart";
import Payment from "../components/Payment";
import "./Shopping.css";

const Shopping = ({ cartItems, setCartItems }) => {
  return (
    <div className="shopping">
      <h1>Shopping Cart </h1>
      <div className="shopping-content">
        <Cart cartItems={cartItems} setCartItems={setCartItems} />
        <Payment cartItems={cartItems} setCartItems={setCartItems} />
      </div>
    </div>
  );
};

export default Shopping;
