import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface InitialState {
  showNavMobile: boolean;
}

const initialState: InitialState = {
  showNavMobile: false,
};

export const navMobileSlice = createSlice({
  name: 'navMobile',
  initialState,
  reducers: {
    showNavMobile(state) {
      state.showNavMobile = !state.showNavMobile;
    },
  },
});

export const navMobileActions = navMobileSlice.actions;

export const selectNavMobile = (state: RootState) => state.navMobile;

export default navMobileSlice.reducer;
