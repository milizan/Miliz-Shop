import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from "react"
import Navbar from './components/navbar';
import Shop from './pages/shop/shop';
import Login from "./pages/Login"
import Register from "./pages/Register"
import Footer from "./components/Footer"
import { Checkout } from "./pages/Checkout";
import { Cart } from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';

function App() {
 
  const [token, setToken] = useState(localStorage.getItem("token")? localStorage.getItem("token"): "");

  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/cart" element={<Cart token={token}/>} />
          <Route path="/login" element={<Login buttonText="login" setToken={setToken}/>} />
          <Route path="/register" element={<Register /> } />
          <Route path="/checkout" element={<Checkout /> } />
        </Routes>
        <Footer />
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App
