import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../cartSlice/cartSlice";
import similarCartSlice from "../cartSlice/similarCartSlice";

const store = configureStore({
  reducer: {
    cartItem: cartSlice,
    similarItem: similarCartSlice,
  },
});
export default store;
