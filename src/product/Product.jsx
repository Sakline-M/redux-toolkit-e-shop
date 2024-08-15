/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "./ProductSlice";
import { productData } from "../assets/mockData";
import { FaStar } from "react-icons/fa";
import { addToCart } from "../pages/cart/CartSlice";

const Product = () => {
  const products = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts(productData));
  }, [dispatch]);

  const handleAddToCart = (e, product) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(product));
    alert("Product Added Succesfully!");
  };

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
        {products.products.slice(0, 5).map((product) => (
          <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105">
            <img
              src={product.img}
              alt=""
              className="w-full h-48 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">${product.price}</p>
            <div className="flex  items-center mt-2">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
            <div
              className="absolute bottom-4 right-2 flex items-center justify-center w-8 h-8 bg-red-600 group text-white text-sm rounded-full hover:w-32 hover:bg-red-700 transition-all duration-100"
              onClick={(e) => handleAddToCart(e, product)}
            >
              <span className="group-hover:hidden">+</span>
              <span className="hidden group-hover:block">Add to cart</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
