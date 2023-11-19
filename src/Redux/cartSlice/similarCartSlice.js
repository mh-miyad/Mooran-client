import { createSlice } from "@reduxjs/toolkit";

export const similarCart = createSlice({
  name: "similar-cart",
  initialState: { text: "" },
  reducers: {
    addProduct: (state, { type, payload }) => {
      state.text = payload;
    },
  },
});

export const { addProduct } = similarCart.actions;
export default similarCart.reducer;
