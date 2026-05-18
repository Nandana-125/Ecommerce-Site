import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item, quantity = 1) => {
    if (cartItems.some((m) => m.name === item.name)) {
      setCartItems(
        cartItems.map((m) =>
          m.name === item.name ? { ...m, quantity: m.quantity + quantity } : m
        )
      );
    } else setCartItems([...cartItems, { ...item, quantity }]);
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
