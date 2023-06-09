import { useState, useEffect } from "react";
import Banner from "./Banner";
import logo from "../assets/logo.png";
import Footer from "./Footer";
import ShoppingList from "./ShoppingList";
import "../styles/Layout.css";
import { setCart } from "../features/card.sclice";
import { useDispatch } from "react-redux";

function App() {
  const savedCart = localStorage.getItem("cart");
  const dispatch = useDispatch();
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    dispatch(setCart(cart));
  }, [cart]);

  return (
    <div>
      <Banner>
        <img src={logo} alt="logo-la-maison-jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      <div className="lmj-layout-inner">
        <ShoppingList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
