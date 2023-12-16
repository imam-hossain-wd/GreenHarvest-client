import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase/firebase.config';

interface IUserState {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | null;
}

const initialState: IUserState = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error: null,
};

export const signInWithGoogle = createAsyncThunk(
    'user/signInWithGoogle',
    async () => {
      try {
  
        const data = await signInWithPopup(auth, googleProvider);
        if (data.user.email) {
          console.log('Signed in with Google successfully');
  
        }
        return data.user.email;
      } catch (error) {
        console.log('Failed to sign in with Google');
        throw error;
      }
    }
  );

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signInWithGoogle.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user.email = action.payload;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message || 'Failed to sign in with Google';
      });
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
