import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/home/HomePage";
import Shop from "./pages/shop/Shop";
import CartPage from "./pages/cart/CartPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
