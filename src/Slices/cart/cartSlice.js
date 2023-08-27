import { createSlice } from "@reduxjs/toolkit";
import {
  postOrder,
  onPostOrderFullfiled,
  onPostOrderRejected,
} from "./requests/postOrder";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsCount: 0,
    totalCost: 0,
    cart: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.itemsCount++;
      state.cart.push(action.payload.product);
      let int = parseInt(action.payload.product.price);
      state.totalCost += int;
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => {
        return item.name !== action.payload.product.name;
      });
      state.totalCost -= action.payload.product.price;
      state.itemsCount = 0;
    },
    emptyCar: (state) => {
      state.itemsCount = 0;
      state.cart = [];
      state.totalCost = 0;
    },
    extraReducers(builder) {
      builder
        .addCase(postOrder.fulfilled, onPostOrderFullfiled)
        .addCase(postOrder.rejected, onPostOrderRejected);
    },
  },
});

export const { addItemToCart, removeItemFromCart, emptyCar } =
  cartSlice.actions;

export default cartSlice.reducer;
