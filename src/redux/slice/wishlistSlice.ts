import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types/ProductTypes';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface IWishlist {
  wishlistItems: IProduct[];
  activeWishlistButtons: { [key: string]: boolean };
}

const initialState: IWishlist = {
  wishlistItems: [],
  activeWishlistButtons: {}
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      // Check if the product is already in the wishlist
      if (!state.wishlistItems.some(item => item._id === product._id)) {
        state.wishlistItems.push(product);
      }
      // Set activeWishlistButton for this product to true
      state.activeWishlistButtons[product._id as string] = true;
    },
    removeFromWishlist: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      // Remove the product from wishlistItems
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item._id !== product._id
      );
      // Set activeWishlistButton for this product to false
      state.activeWishlistButtons[product._id as string] = false;
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

const persistConfig = {
  key: 'wishlist',
  storage,
};

const persistedReducer = persistReducer(persistConfig, wishlistSlice.reducer);

export default persistedReducer;

