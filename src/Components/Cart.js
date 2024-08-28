import React, { useState } from 'react';
import './Cart.css';

function Cart({ cart, removeFromCart,clearCart }) {
  const [paymentMethod, setPaymentMethod] = useState('');

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.r_money.replace('$', ''));
      return total + price * item.quantity;
    }, 0);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePlaceOrder = () => {
    // Handle order placement logic here
    if (cart.length===0){
        alert('Please add an item to proceed')
    }else{
      alert(`Order placed with payment method: ${paymentMethod}`);
      clearCart();
    }
    
  };

  return (
    <div className="cart-container">
      <div className="cart-content">
        <h1>Your Cart: </h1> 
        {cart.length === 0 ? (
          <p id="empty-message-cart">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img
                    src={process.env.PUBLIC_URL + '/' + item.image}
                    alt={item.Fname}
                    className="cart-image"
                  />
                  <div className="cart-details">
                    <h3>{item.Fname}</h3>
                    <p>Size: {item.size}</p>
                    <p>Quantity: {item.quantity}</p>
                    <p>Price: {item.r_money} each</p>
                    <button
                      className="remove-button"
                      onClick={() => removeFromCart(item.id, item.size)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="total-price">Total Price: ${calculateTotalPrice().toFixed(2)}</h3>
          </>
        )}
      </div>
      <div className="payment-sidebar">
        <h2>Payment</h2>
        <div>
          <label>
            <input
              type="radio"
              value="UPI"
              checked={paymentMethod === 'UPI'}
              onChange={handlePaymentMethodChange}
            />
            UPI
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="COD"
              checked={paymentMethod === 'COD'}
              onChange={handlePaymentMethodChange}
            />
            Cash on Delivery (COD)
          </label>
        </div>
        <button
          className="place-order-button"
          onClick={handlePlaceOrder}
          disabled={!paymentMethod}
        >
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Cart;
