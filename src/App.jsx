/* eslint-disable no-unused-vars */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/home/HomePage";
import Shop from "./pages/shop/Shop";
import CartPage from "./pages/cart/CartPage";
import CheckOut from "./pages/checkout/CheckOut";
import { useState } from "react";
import OrderConfirm from "./pages/checkout/OrderConfirm";
import FilterData from "./product/FilterData";

function App() {

  const [order, setorder] = useState(null)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckOut setorder={setorder} />} />
        <Route path="/order-confirmation" element={<OrderConfirm  order={order} />} />
        <Route path="/filter-data" element={<FilterData/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
