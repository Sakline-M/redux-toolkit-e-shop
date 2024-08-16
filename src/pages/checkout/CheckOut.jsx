/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckOut = ({ setorder }) => {
  const [billingToggle, setbillingToggle] = useState(true);
  const [shipingToggle, setshipingToggle] = useState(false);
  const navigate = useNavigate();

  const [payment, setPayment] = useState("cod");
  const [shippingInfo, setshippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  const cart = useSelector((state) => state.cart);

  const handeOrder = () => {
    const newOrder = {
      products: cart.products,
      orderNumber: "3276147",
      shippingInfromation: shippingInfo,
      totalPrice: cart.totalPrice,
    };
    setorder(newOrder);
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px:16 lg:px-24 ">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-4 mt-8">
        <div className="md:w-2/3">
          {/* Billing Information */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setbillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gary-700">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full py-2 border"
                />
              </div>
              <div>
                <div>
                  <label className="block text-gary-700">Email</label>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    className="w-full py-2 border"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block text-gary-700">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    placeholder="Phone Number#"
                    className="w-full py-2 border"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setshipingToggle(!shipingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shiping Information
              </h3>
              {shipingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>

            <div className={`space-y-4 ${shipingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gary-700">Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter Address"
                  className="w-full py-2 border"
                  onChange={(e) =>
                    setshippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <div>
                  <label className="block text-gary-700">City</label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    className="w-full py-2 border"
                    onChange={(e) =>
                      setshippingInfo({
                        ...shippingInfo,
                        city: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block text-gary-700">Zip Code</label>
                  <input
                    type="number"
                    name="zip"
                    placeholder="Enter Zip Code"
                    className="w-full py-2 border"
                    onChange={(e) =>
                      setshippingInfo({
                        ...shippingInfo,
                        zip: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="border p-2 mb-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            </div>

            <div className={"space-y-4"}>
              <div className="flex items-center mb-2 gap-1">
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "cod"}
                  onChange={() => setPayment("cod")}
                />
                <label className="block text-gary-700">Cash on Delivery</label>
              </div>

              <div className="flex items-center mb-2 gap-1">
                <input
                  type="radio"
                  name="payment"
                  checked={payment === "dc"}
                  onChange={() => setPayment("dc")}
                />
                <label className="block text-gary-700">Debit Card</label>
              </div>
            </div>
            {payment === "dc" && (
              <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
                <h3 className="text-xl font-medium text-gray-900">
                  Debit Card Information
                </h3>
                <div>
                  <label
                    htmlFor="cardNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="Enter Card Number"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cardHolderName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    id="cardHolderName"
                    placeholder="Card Holder Name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label
                      htmlFor="expireDate"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Expire Date
                    </label>
                    <input
                      type="text"
                      id="expireDate"
                      placeholder="Expire Date"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="w-1/2">
                    <label
                      htmlFor="cvv"
                      className="block text-sm font-medium text-gray-700"
                    >
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      placeholder="CVV"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product) => (
              <div key={product.id} className="flex items-center space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">
                    ${product.price} x {product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t pt-4">
            <div className="flex justify-between text-lg font-medium">
              <span>Total Price</span>
              <span>${cart.totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button
            className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
            onClick={handeOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
