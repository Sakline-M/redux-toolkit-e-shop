import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../product/ProductSlice";
import CartReducer from "./cart/CartSlice";

const store = configureStore({
  reducer: {
    product: ProductReducer,
    cart: CartReducer,
  },
});

export default store;
