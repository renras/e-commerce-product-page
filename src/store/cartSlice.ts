import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "./store";

interface InitialState {
  showCart: boolean;
}

const initialState: InitialState = {
  showCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    showCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export const selectCart = (state: RootState) => state.cart;

export default cartSlice.reducer;
