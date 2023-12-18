import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import sortReducer from './slices/sortSlice';
import cartReducer from './slices/cartSlice';

export const store = configureStore({
  reducer: { filter: filterReducer, sort: sortReducer, cart: cartReducer },
});
