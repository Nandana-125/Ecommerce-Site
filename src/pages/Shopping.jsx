import Cart from "../components/Cart";
import Payment from "../components/Payment";
import "./Shopping.css";

const Shopping = () => {
  return (
    <div className="shopping">
      <h1>Shopping Cart </h1>
      <div className="shopping-content">
        <Cart />
        <Payment />
      </div>
    </div>
  );
};

export default Shopping;
