import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../components/Product.css";
import { useContext } from "react";
import CartContext from "../context/CartContext";
import ToastContext from "../context/ToastContext";
import WishlistContext from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const { cartItems, setCartItems } = useContext(CartContext);
  const { showToast } = useContext(ToastContext);
  const handleAdd = (name, price, image) => {
    if (cartItems.some((m) => m.name === name)) {
      setCartItems(
        cartItems.map((m) =>
          m.name === name ? { ...m, quantity: m.quantity + 1 } : m
        )
      );
    } else
      setCartItems([
        ...cartItems,
        { name: name, price: price, image: image, quantity: 1 },
      ]);

    showToast("Item added successfully ✅");
  };

  const handleRemove = (id) => {
    setWishlist(wishlist.filter((f) => f.id !== id));

    showToast("Item Removed ❗️");
  };
  return (
    <div>
      <h1>wishlist</h1>
      <div>
        <div className="product">
          {wishlist.map((p) => (
            <div key={p.id} className="items">
              <Link to={`/product-details/${p.id}`}>
                <img src={p.image} alt={p.title} />
              </Link>
              <h4>{p.name}</h4>
              <p>
                ⭐️{p.rating}- {p.reviews?.length || 0} reviews
              </p>

              <div className="price">
                <p>${p.price}</p>
                <button onClick={() => handleAdd(p.name, p.price, p.image)}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                <button onClick={() => handleRemove(p.id)}>❌</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
