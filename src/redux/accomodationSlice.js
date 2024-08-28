import { createSlice } from '@reduxjs/toolkit';

export const accommodationSlice = createSlice({
  name: 'accommodations',
  initialState: {
    list: [],
    selectedAccommodation: null,
  },
  reducers: {
    setAccommodations: (state, action) => {
      state.list = action.payload;
    },
    selectAccommodation: (state, action) => {
      state.selectedAccommodation = action.payload;
    },
  },
});

export const { setAccommodations, selectAccommodation } = accommodationSlice.actions;
export default accommodationSlice.reducer;
