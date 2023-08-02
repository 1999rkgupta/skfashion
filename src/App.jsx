import React from "react";
import "./global.css";
import NavBar from "./components/navbar/NavBar";
import Cart from "./components/cart/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhishList from "./components/wishlist/WhishList";
import ComingSoon from "./components/comingsoon/ComingSoon";
import Mens from "./components/product/mens/Mens";
import Womens from "./components/product/womens/Womens";
import Electronic from "./components/product/electronic/Electronic";
import Grocery from "./components/product/grocery/Grocery";
import Item from "./components/seprateItem/Item";
import MainComp from "./components/MainComp";
import Deliver from "./components/deliver/Deliver";
import Success from "./components/sucess/Success";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainComp />} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="whishlist" element={<WhishList />} />
          <Route path="comingsoon" element={<ComingSoon />} />
          <Route path="mens" element={<Mens />} />
          <Route path="womens" element={<Womens />} />
          <Route path="electronic" element={<Electronic />} />
          <Route path="grocery" element={<Grocery />} />
          <Route path="item" element={<Item />} />
          <Route path="deliver" element={<Deliver />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
};

export default App;
