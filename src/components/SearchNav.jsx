import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Search.css";
import { useNavigate, Link } from "react-router-dom";

const SearchNav = ({ setSearchText, user, setIsLoggedIn }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setInput(e.target.value);
    setSearchText(e.target.value);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    navigate("/Login");
  };

  return (
    <div className="search">
      <input
        type="text"
        value={input}
        placeholder="Search Here"
        onChange={handleChange}
      />
      <FontAwesomeIcon icon={faSearch} />
      <div className="icons">
        <Link to="/wishlist">
          <FontAwesomeIcon icon={faHeart} />
        </Link>

        <FontAwesomeIcon icon={faCartShopping} />
        <FontAwesomeIcon icon={faUser} />
        <p>{user.name}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="sort"></div>
    </div>
  );
};

export default SearchNav;
