import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../../types/ProductTypes';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface IWishlist {
    wishlistItems: IProduct[];
}

const initialState: IWishlist = {
  wishlistItems: [],
};

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IProduct>) => {
        state.wishlistItems.push(action.payload)
    },
    removeFromWishlist: (state, action: PayloadAction<IProduct>) => {
      state.wishlistItems = state.wishlistItems.filter(
        (product) => product._id !== action.payload._id
      );
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
