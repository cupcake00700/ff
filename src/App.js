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
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="about" element={[<About/>, <Footer/>,]} />
          <Route path="home" element={[<Navbar/>, <ShopSection/>,<Footer/>]} />
          <Route path="/" element ={<Login/>}/>
          <Route path="regform" element={<Regform/>}/>
          <Route path="contact" element ={[<ContactUs/>,<Footer/>]} />
          <Route path="help" element={[<Help/>,<Footer/>]} />
          <Route path="wishlist" element={[<Navbar/>,<Wishlist/>]} />
          <Route path="cart" element={[<Navbar/>,<Cart/>]} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
