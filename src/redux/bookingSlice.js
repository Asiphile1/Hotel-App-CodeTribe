import { createSlice } from '@reduxjs/toolkit';

export const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    currentBooking: null,
  },
  reducers: {
    createBooking: (state, action) => {
      state.currentBooking = action.payload;
    },
    clearBooking: (state) => {
      state.currentBooking = null;
    },
  },
});

export const { createBooking, clearBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
