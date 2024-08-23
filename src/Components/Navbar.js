import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function navbar() {
  return (
    <div>
       <div className="navbar">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
       

       <div className="navbar-logo">
           <div className="logo"></div>
       </div>

       <div className="nav-filters">
           <label htmlFor="nav-select">Filters:</label>
           <select className="nav-select">
               <option>Price: Low to High</option>
               <option>Price: High to Low</option>
               <option>Ratings: High to Low</option>
                    
           </select>
       </div>

       <div className="nav-address border">
           <p id="nav-add-a">Deliver to</p>
           <div className="add-icon">
               <p id="nav-add-b">Kolkata</p>
               <i className="fa-solid fa-location-dot"></i>
           </div>
       </div>
       
       <div className="nav-search border">
           <input className="nav-input"placeholder="  Search for shoes"/>
           <div className="search-icon">
               <i className="fa-solid fa-magnifying-glass"></i>   
           </div>
       </div>

       <div className="wishlist border">
           <div className="wishlist-icon">
               <i className="fa-regular fa-heart"></i>
           </div>
           <div className="wishlist-text">
               <Link to="/wishlist" className="link" >Wishlist</Link>
           </div>
       </div>

       <div className="cart border">
           <div className="cart-icon">
               <i className="fa-solid fa-cart-shopping"></i>
           </div>
           <div className="cart-text">
               <Link to="/cart" className="link">Cart</Link>
           </div>
       </div>
       <div className="mode-changer">
           <button id="mode"><i className="fa-solid fa-lightbulb"></i></button>
       </div>
       
      </div>
    </div>
  )
}
