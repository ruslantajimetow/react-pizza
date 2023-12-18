import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalPrice: 0,
    count: 0,
    cartItems: [],
  },
  reducers: {
    addItemsToCart: (state, action) => {
      state.totalPrice += action.payload.price;
      const existedItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existedItem) {
        existedItem.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
      state.count = state.cartItems
        .map((item) => item.count)
        .reduce((count, sum) => (sum += count), 0);
      // state.totalPrice = state.cartItems.reduce((sum, item) => item.price * item.count + sum, 0);
    },
    removeCartItem: (state, action) => {
      state.count -= 1;
      state.totalPrice = state.totalPrice - action.payload.price;
      const existedItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (existedItem) {
        existedItem.count--;
      }
      if (existedItem.count === 0) {
        state.cartItems = state.cartItems.filter((item) => item.id !== existedItem.id);
      }
    },
    completelyRemoveItem: (state, action) => {
      state.count -= action.payload.count;
      state.totalPrice = state.totalPrice - action.payload.price * action.payload.count;
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalPrice = 0;
      state.count = 0;
    },
  },
});

export const { addItemsToCart, removeCartItem, completelyRemoveItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
