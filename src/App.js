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
  const [searchQuery, setSearchQuery] = useState('');

  const addToWishlist = (item) => {
    setWishlist((prevWishlist) => {
      if (!prevWishlist.some(wishItem => wishItem.id === item.id)) {
        return [...prevWishlist, item];
      }
      return prevWishlist;
    });
  };

  const removeFromWishlist = (id) => {
    setWishlist((prevWishlist) => prevWishlist.filter(item => item.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <main>
          <Routes>
            <Route path="about" element={[<Navbar wishlist={wishlist} onSearch={setSearchQuery} />, <About />, <Footer />]} />
            <Route path="home" element={[<Navbar wishlist={wishlist} onSearch={setSearchQuery} />, <ShopSection addToWishlist={addToWishlist} searchQuery={searchQuery} />, <Footer />]} />
            <Route path="/" element={<Login />} />
            <Route path="regform" element={<Regform />} />
            <Route path="contact" element={[<Navbar wishlist={wishlist} onSearch={setSearchQuery} />, <ContactUs />, <Footer />]} />
            <Route path="help" element={[<Navbar wishlist={wishlist} onSearch={setSearchQuery} />, <Help />, <Footer />]} />
            <Route path="wishlist" element={[<Navbar wishlist={wishlist} onSearch={setSearchQuery} />, <Wishlist wishlist={wishlist} removeFromWishlist={removeFromWishlist} />]} />
            <Route path="cart" element={[<Navbar wishlist={wishlist} onSearch={setSearchQuery} />, <Cart />]} />
            <Route path="checkout/:id" element={[<Navbar wishlist={wishlist} onSearch={setSearchQuery} />, <Checkout addToWishlist={addToWishlist} />]} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
