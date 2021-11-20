import { configureStore } from '@reduxjs/toolkit';

import appReducer from './appSlice';
import productQuantityReducer from './productQuantity';
import navMobileReducer from './navMobileSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    app: appReducer,
    productQuantity: productQuantityReducer,
    navMobile: navMobileReducer,
    cart: cartReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
