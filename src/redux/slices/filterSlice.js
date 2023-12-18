import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    onChangeCategory: (state, action) => {
      state.categoryId = action.payload;
    },
    setCategoryId: (state, action) => {
      state.categoryId = Number(action.payload.category);
    },
  },
});

export const { onChangeCategory, setCategoryId } = filterSlice.actions;
export default filterSlice.reducer;
