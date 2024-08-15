/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import emptyCart from "../../assets/images/emptycart.jpg";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "../../components/Modal";
import ChangeAddress from "../../components/ChangeAddress";
import { removeFromCart } from "./CartSlice";

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("21 street, UK");
  const [isModalOpen, setisModalOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px:16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-4 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-[16px] font-bold">
                <p>PRODUCTS</p>
                <div className="flex space-x-8">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                  <p>Remove</p>
                </div>
              </div>

              {cart.products.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 border-b"
                >
                  <div className="md:flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                  </div>
                  <div className="flex space-x-12 items-center">
                    <p>${product.price}</p>
                    <div className="flex items-center justify-center border">
                      <button className="text-xl font-bold px-1.5 border-r">
                        -
                      </button>
                      <p className="text-xl px-2">{product.quantity}</p>
                      <button className="text-xl px-1 border-1">+</button>
                    </div>
                    <p>${(product.price * product.quantity).toFixed(2)}</p>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => dispatch(removeFromCart(product.id))}
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* payment process */}
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-lg font-semibold mb-5">CART TOTALS</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm text-gray-600">Total Items:</span>
                <span className="font-medium">{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p className="text-sm text-gray-600">Shipping:</p>
                <p className="ml-2 text-sm">
                  Shipping to:{" "}
                  <span className="text-sm font-bold">{address}</span>
                </p>
                <button
                  className="text-blue-500 hover:underline mt-1 ml-2"
                  onClick={() => setisModalOpen(true)}
                >
                  Change address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-sm text-gray-600">Total Price:</span>
                <span className="font-medium">
                  ${cart.totalPrice.toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-semibold hover:bg-blue-600">
                Proceed to Checkout
              </button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setModalOpen={setisModalOpen}>
            <ChangeAddress
              setAddress={setAddress}
              setisModalOpen={setisModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={emptyCart} alt="" className="h-96" />
        </div>
      )}
    </div>
  );
};

export default CartPage;
