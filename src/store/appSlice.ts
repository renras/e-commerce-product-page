import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import thumbnail1 from '../images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../images/image-product-4-thumbnail.jpg';
import fullimage1 from '../images/image-product-1.jpg';
import fullimage2 from '../images/image-product-2.jpg';
import fullimage3 from '../images/image-product-3.jpg';
import fullimage4 from '../images/image-product-4.jpg';

interface InitialState {
  products: {
    title: string;
    price: number;
    thumbnail: string[];
    fullimages: string[];
  }[];
  cart: {
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
    id: number;
  }[];
  totalItems: number;
  showLightBox: boolean;
  activeThumbnailIndex: number;
}

const initialState: InitialState = {
  products: [
    {
      title: 'Fall Limited Edition Sneakers',
      price: 125,
      thumbnail: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
      fullimages: [fullimage1, fullimage2, fullimage3, fullimage4],
    },
  ],
  cart: [],
  totalItems: 0,
  showLightBox: false,
  activeThumbnailIndex: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    addToCart(state, action: PayloadAction<{ quantity: number; id: number }>) {
      state.cart.push({
        title: state.products[0].title,
        price: state.products[0].price,
        quantity: action.payload.quantity,
        thumbnail: state.products[0].thumbnail[0],
        id: action.payload.id,
      });

      let total: number = 0;
      state.cart.forEach((item) => {
        total += item.quantity;
      });
      state.totalItems = total;
    },
    removeItem(state, action: PayloadAction<number>) {
      let found:
        | {
            title: string;
            price: number;
            quantity: number;
            thumbnail: string;
            id: number;
          }
        | undefined = state.cart.find((item) => item.id === action.payload);

      if (found) {
        state.totalItems -= found.quantity;
      }

      let newCart: {
        title: string;
        price: number;
        quantity: number;
        thumbnail: string;
        id: number;
      }[] = state.cart.filter((item) => item.id !== action.payload);

      state.cart = newCart;
    },
    showLightBox(state, action: PayloadAction<number>) {
      state.showLightBox = !state.showLightBox;
      state.activeThumbnailIndex = action.payload;
    },
    closeLightBox(state) {
      state.showLightBox = !state.showLightBox;
    },
    incrementActiveThumbnailIndex(state) {
      state.activeThumbnailIndex += 1;
      if (state.activeThumbnailIndex > state.products[0].thumbnail.length - 1) {
        state.activeThumbnailIndex = 0;
      }
    },
    decrementActiveThumbnailIndex(state) {
      state.activeThumbnailIndex -= 1;
      if (state.activeThumbnailIndex < 0) {
        state.activeThumbnailIndex = state.products[0].thumbnail.length - 1;
      }
    },
    changeActiveThumbnailIndex(state, action: PayloadAction<number>) {
      state.activeThumbnailIndex = action.payload;
    },
  },
});

export const selectApp = (state: RootState) => state.app;

export const appActions = appSlice.actions;

export default appSlice.reducer;
