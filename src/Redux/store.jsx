import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart";
import { apiSlice } from "./apiSlice";
import apiReducer from './Thunkapi'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    todos:apiReducer
  }
});
