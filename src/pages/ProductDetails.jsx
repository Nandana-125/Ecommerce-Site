import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
import axios from "axios";
import Toast from "../components/Toast";

const ProductDetails = ({
  setCartItems,
  cartItems,
  setWishlist,
  wishlist,
  user,
}) => {
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [quant, setQuant] = useState(1);
  const [add, setAdded] = useState(false);
  const [message, setMessage] = useState("");
  const [comment, setComment] = useState("");
  const [rate, setRate] = useState(0);
  const [userReview, setUserReview] = useState([]);
  const [loading, setLoading] = useState(true);

  const allReviews = [...(products.reviews || []), ...userReview];

  const handleIncrement = () => {
    setQuant(quant + 1);
  };

  const handleDecrement = () => {
    setQuant(quant <= 1 ? 1 : quant - 1);
  };

  const handleAdd = (name) => {
    if (cartItems.some((m) => m.name === name)) {
      setCartItems(
        cartItems.map((m) =>
          m.name === name ? { ...m, quantity: m.quantity + quant } : m
        )
      );
    } else
      setCartItems([
        ...cartItems,
        {
          name: name,
          price: products.price,
          image: products.thumbnail,
          quantity: quant,
        },
      ]);
    setMessage("Added " + products.title + " to cart ✅");
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWish = () => {
    if (wishlist.some((m) => m.name === products.title)) {
      setMessage("Item already in wishlist 👀");
      setAdded(true);
    } else {
      setWishlist([
        ...wishlist,
        {
          id: products.id,
          name: products.title,
          price: products.price,
          image: products.thumbnail,
          rating: products.rating,
          reviews: products.reviews,
        },
      ]);
      setMessage("Added " + products.title + " to wishlist ❤️");
      setAdded(true);
    }
    setTimeout(() => setAdded(false), 2000);
  };

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error fetching" + err);
        setLoading(false);
      });
  }, []);

  const handleComment = () => {
    setUserReview([
      ...userReview,
      { rating: rate, comment: comment, reviewerName: user.name },
    ]);
    setComment("");
    setRate(0);
  };

  return (
    <div>
      <div>
        <Link to="/">
          <button>🔙</button>
        </Link>
      </div>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div>
          <div className="product-details">
            <img src={products.thumbnail} />
            <div className="product-text">
              <h1>{products.title}</h1>
              <h4>{products.price}</h4>
              <p style={{ padding: "0", margin: "0" }}>{products.category}</p>
              <p>Quantity</p>
              <div className="product-quantity">
                <button onClick={handleDecrement}>-</button>
                <p>{quant}</p>
                <button onClick={handleIncrement}>+</button>
              </div>
              <div className="product-add">
                <button onClick={() => handleAdd(products.title)}>
                  Add to cart
                </button>
              </div>
              <div>
                <p>Description</p>
                <p>{products.description}</p>
                <button onClick={handleWish}>Add to wishlist</button>
              </div>
            </div>
          </div>
          <Toast added={add} message={message} />
          <div className="reviews">
            <h3>Reviews</h3>
            <h4>Total reviews ({allReviews?.length || 0}) </h4>
            {(allReviews || []).map((m, index) => (
              <div key={index} className="review-content">
                <div className="reviewer">
                  <h5>{m.reviewerName}</h5>
                </div>
                <div className="review-desc">
                  <p> Rating ⭐️ : {m.rating}</p>
                  <p>{m.comment}</p>
                </div>
              </div>
            ))}
            <form className="add-review">
              <h4>Add a review </h4>
              <label>Rating:</label>
              <input
                type="number"
                min="0"
                max="5"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
              <br />
              <textarea
                value={comment}
                placeholder="What do you think about the product ? "
                onChange={(e) => setComment(e.target.value)}
              />
              <button type="button" onClick={handleComment}>
                Post
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
