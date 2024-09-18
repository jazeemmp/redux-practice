import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartList: [],
  cartCount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isExisting = state.cartList.find((item)=>item.id === action.payload.id)
      if(isExisting){
        state.cartList.forEach((item) => {
          if (item.id === action.payload.id) {
            item.count++;
          }
        });
      }else{
        state.cartList.push({
          ...action.payload,
          count: 1,
        });
      }
    },
    increment: (state, action) => {
      const productId = action.payload;
      state.cartList.forEach((item) => {
        if (item.id === productId) {
          item.count++;
        }
      });
    },
    decrement: (state, action) => {
      const productId = action.payload;
      state.cartList.forEach((item) => {
        if (item.id === productId) {
          item.count--;
        }
      });
    },
  },
});

export const { addToCart, increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;
