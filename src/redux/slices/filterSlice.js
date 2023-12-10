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
  },
});

export const { onChangeCategory } = filterSlice.actions;
export default filterSlice.reducer;
