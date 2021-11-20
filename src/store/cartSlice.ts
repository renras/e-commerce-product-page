import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface InitialState {
  showCart: boolean;
}

const initialState: InitialState = {
  showCart: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    showCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export const selectNavMobile = (state: RootState) => state.navMobile;

export default cartSlice.reducer;
