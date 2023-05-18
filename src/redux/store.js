import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";
import productSlice from "./productSlice";

export const store = configureStore({
  reducer: {
    categories: categorySlice,
    products: productSlice,
    carts: cartSlice,
  },
});
