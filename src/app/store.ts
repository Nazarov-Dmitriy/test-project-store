import {
  configureStore
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { shopApi } from "../features/shopApi";
import cartReducer from '../features/cartSlice';


export const store = configureStore({
  reducer: {
    [shopApi.reducerPath]: shopApi.reducer,
    cart: cartReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shopApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


