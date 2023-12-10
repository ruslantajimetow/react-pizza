import { createSlice } from '@reduxjs/toolkit';

const sortSlice = createSlice({
  name: 'sort',
  initialState: {
    isOpen: false,
    sortType: {
      name: 'популярности',
      sort: 'rating',
    },
  },
  reducers: {
    onOpenSortPopUp: (state, action) => {
      state.isOpen = action.payload;
    },
    onChangeSortType: (state, action) => {
      state.sortType = action.payload;
    },
  },
});

export const { onOpenSortPopUp, onChangeSortType } = sortSlice.actions;
export default sortSlice.reducer;
