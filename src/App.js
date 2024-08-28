import './App.css';
import Login from './Components/Login';
import Regform from './Components/Regform';
import Navbar from './Components/Navbar';
import ShopSection from './Components/ShopSection';
import Footer from './Components/Footer';
import About from './Components/About';
import ContactUs from './Components/ContactUs';
import Help from './Components/Help';
import Wishlist from './Components/Wishlist';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Add to Wishlist function
  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some(wishItem => wishItem.id === item.id)) {
        return [...prevWishlist, item];
      }
      return prevWishlist;
    });
  };

  // Remove from Wishlist function
  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== id));
  };

  // Add to Cart function
  const addToCart = (item, quantity, selectedSize) => {
    setCart((prevCart) => {
      // Check if the item with the same size already exists in the cart
      const existingItemIndex = prevCart.findIndex(
        cartItem => cartItem.id === item.id && cartItem.size === selectedSize
      );

      if (existingItemIndex !== -1) {
        // If the item exists, update its quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        // If the item doesn't exist, add it to the cart
        return [...prevCart, { ...item, quantity, size: selectedSize }];
      }
    });
  };

  // Remove from Cart function
  const removeFromCart = (id, size) => {
    setCart((prevCart) => prevCart.filter(item => !(item.id === id && item.size === size)));
  };

  //clear the cart after placing order
  const clearCart = () => {
    setCart([]);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="about" element={[<Navbar wishlist={wishlist} cart={cart} onSearch={setSearchQuery} />, <About />, <Footer />]} />
            <Route path="home" element={[<Navbar wishlist={wishlist}  cart={cart} onSearch={setSearchQuery} />, <ShopSection addToWishlist={addToWishlist} searchQuery={searchQuery} />, <Footer />]} />
            <Route path="/" element={<Login />} />
            <Route path="regform" element={<Regform />} />
            <Route path="contact" element={[<Navbar wishlist={wishlist}  cart={cart} onSearch={setSearchQuery} />, <ContactUs />, <Footer />]} />
            <Route path="help" element={[<Navbar wishlist={wishlist}  cart={cart} onSearch={setSearchQuery} />, <Help />, <Footer />]} />
            <Route path="wishlist" element={[<Navbar wishlist={wishlist}  cart={cart} onSearch={setSearchQuery} />, <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />]} />
            <Route path="cart" element={[<Navbar wishlist={wishlist}  cart={cart} onSearch={setSearchQuery} />, <Cart cart={cart} removeFromCart={removeFromCart}  clearCart={clearCart} />]} />
            <Route path="checkout/:id" element={[<Navbar wishlist={wishlist}  cart={cart} onSearch={setSearchQuery} />, <Checkout addToWishlist={addToWishlist} addToCart={addToCart} />]} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
