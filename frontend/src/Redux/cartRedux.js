import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeCart: (state, action) => {
      const restCartItems = state.products.filter((x)=>x._id !== action.payload._id)
      state.products = restCartItems;
      state.quantity -= 1;
      state.total = state.total - action.payload.totalPrice;
    },
  },
});

export const { addProduct, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
