/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IProductStateProps {
  data: any;
  searchTerm: string;
  sortBy: string;
  sortOrder: string;
  page:number;
  limit:number;
  category:string;
}

const initialState: IProductStateProps = {
  data: null,
  searchTerm: '',
  sortBy: 'name',
  sortOrder: 'asc',
  category:'',
  page:1,
  limit:10
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSortBy: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<string>) => {
      state.sortOrder = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const {
  setData,
  setSearchTerm,
  setSortBy,
  setSortOrder,
  setLimit,
  setPage,
  setCategory
} = productSlice.actions;

export default productSlice.reducer;