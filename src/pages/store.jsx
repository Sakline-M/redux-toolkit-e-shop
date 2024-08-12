import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../product/ProductSlice";
// import CartReducer from "../product/CartSlice";

 const store = configureStore({
  reducer: {
    product: ProductReducer,
  },
});

export default store;
