import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from './db.json';
import './Checkout.css';

function Checkout() {
  const { id } = useParams();
  const shoe = data.find(item => item.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(shoe.size[0]); // Default to the first size

  if (!shoe) return <p>Product not found</p>;

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    if (quantity < shoe.stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="checkout-background">
      <div className="checkout-container">
        <img
          src={process.env.PUBLIC_URL + '/' + shoe.image}
          alt={shoe.Fname}
          className="checkout-image"
        />
        <div className="checkout-header">
          <h1>{shoe.Fname}</h1>
          <p>{shoe.intro}</p>
          <p id="sprice">{shoe.s_money}</p>
          <p id="rprice">{shoe.r_money}</p>
          <p id="discount">{shoe.off}</p>

          <div className="size-selection">
            <h4>Select Size:</h4>
            <div className="size-buttons">
              {shoe.size.map((size) => (
                <button
                  key={size}
                  className={`size-button ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-buttons">
            <h4>Quantity: </h4>
            <button id='less' onClick={decreaseQuantity}>-</button>
            <p>{quantity}</p>
            <button id='more' onClick={increaseQuantity}>+</button>
          </div>

          <div className="buttons">
            <button className="cartbutton">Add to Cart</button>
            <button className="wishlistbutton">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
