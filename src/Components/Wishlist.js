import React from 'react';
import './Wishlist.css';

function Wishlist({ wishlist, removeFromWishlist }) {
  if (wishlist.length === 0) {
    return <p style={{ fontWeight: 'bolder', textAlign: 'center',margin:'40px',fontSize:'3rem',color:'maroon' }}>Your wishlist is empty.</p>;
  }

  return (
    
    <div className="wishlist-container">
      <h2>Your Wishlist: </h2>
      <div className="wishlist-items">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img
              src={process.env.PUBLIC_URL + '/' + item.image}
              alt={item.Fname}
              className="wishlist-image"
            />
            <div className="wishlist-details">
              <h3>{item.Fname}</h3>
              <p>{item.s_money}</p>
              <button
                className="remove-button"
                onClick={() => removeFromWishlist(item.id)}
              >
                Remove from Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
