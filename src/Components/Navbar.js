import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ wishlist, onSearch, cart }) {
  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <div className="logo"></div>
      </div>


      <div className="nav-search border">
        <input
          className="nav-input"
          placeholder="Search for shoes"
          onChange={handleSearchChange}
        />
        <div className="search-icon">
          <i className="fa-solid fa-magnifying-glass"></i>  
        </div>
      </div>

      <div className="wishlist border">
        <div className="wishlist-icon">
          <i className="fa-regular fa-heart"></i>
        </div>
        <div className="wishlist-text">
          <Link to="/wishlist" className="link">
            Wishlist ({wishlist.length})
          </Link>
        </div>
      </div>

      <div className="cart border">
        <div className="cart-icon">
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        <div className="cart-text">
          <Link to="/cart" className="link">Cart ({cart.length})</Link>
        </div>
      </div>
    </div>
  );
}
