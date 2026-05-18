import { createContext, useState, useContext } from "react";

const WishlistContext = createContext(null);

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context)
    throw new Error("useWishlist  must be used inside WishlistProvider");
  return context;
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const addToWish = (item) => {
    if (wishlist.some((m) => m.name === item.name)) {
      return false;
    }
    setWishlist([...wishlist, item]);
    return true;
  };
  const removeWish = (id) => {
    setWishlist(wishlist.filter((f) => f.id !== id));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, setWishlist, addToWish, removeWish }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContext;
