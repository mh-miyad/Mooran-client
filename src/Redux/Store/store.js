import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../cartSlice/cartSlice";

const store = configureStore({
  reducer: {
    cartItem: cartSlice,
  },
});
export default store;
