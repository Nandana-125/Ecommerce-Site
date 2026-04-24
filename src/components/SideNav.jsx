import React from "react";
import { useState } from "react";
import "./SideNav.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SideNav = ({ setCatFilter, cartItems }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const category = ["All", "beauty", "fragrances", "furniture", "groceries"];
  const totalItems = cartItems.reduce((total, m) => total + m.quantity, 0);
  const handleCatChange = (e) => {
    setSelectedCategory(e.target.value);
    setCatFilter(e.target.value);
  };

  return (
    <div className="side-nav">
      <div className="side-nav-header">
        <Link to="/Shopping">
          <div className="wrapper">
            <FontAwesomeIcon icon={faCartShopping} />
            {totalItems > 0 && <span className="badge">{totalItems}</span>}
          </div>
        </Link>
      </div>
      <div className="side-nav-filter">
        <div className="filter-group">
          <h4>Category </h4>
          {category.map((c) => (
            <label key={c}>
              <input
                type="radio"
                name="category"
                value={c}
                checked={selectedCategory === c}
                onChange={handleCatChange}
              />
              {c}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
