import { configureStore } from '@reduxjs/toolkit'
import {reducer} from './rootReducer'
import { baseApi } from './api/baseApi'
import { persistStore } from 'redux-persist';

 const store = configureStore({
  reducer ,
  
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(baseApi.middleware),
})

const persistor = persistStore(store);

export { store, persistor };

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch