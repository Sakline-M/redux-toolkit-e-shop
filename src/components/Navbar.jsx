/* eslint-disable no-unused-vars */
import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <Link to="/" className="text-white text-2xl font-bold">
            e-SHOP
          </Link>
        </div>

        {/* Search */}
        <div className="flex items-center mb-4 md:mb-0">
          <form className="relative mr-6">
            <input
              type="text"
              placeholder="Search product"
              className="py-2 px-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:bg-gray-600"
            />
            <FaSearch className="absolute right-3 top-3 text-white" />
          </form>

          {/* Cart Icon */}
          <Link to="/cart" className="relative text-white mr-4">
      <FaShoppingCart className="text-2xl" />
      {products.length > 0 && (
        <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 text-xs bg-red-600 rounded-full h-5 w-5 flex items-center justify-center text-white">
          {products.length}
        </span>
      )}
    </Link>

          {/* Login/Register Buttons */}
          <button className="bg-transparent hover:bg-gray-600 text-white font-semibold py-2 px-4 border border-white rounded mr-2">
            Login | Register
          </button>

          {/* User Icon */}
          <button className="text-white">
            <FaUser className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Additional Links */}
      <div className="mt-4 flex justify-center space-x-4">
        <Link to="/" className="text-gray-400 hover:text-white">
          Home
        </Link>
        <Link to="/shop" className="text-gray-400 hover:text-white">
          Shop
        </Link>
        <Link to="/contact" className="text-gray-400 hover:text-white">
          Contact
        </Link>
        <Link to="/about" className="text-gray-400 hover:text-white">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
