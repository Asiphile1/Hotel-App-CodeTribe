import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    accommodations: [],
    reservations: [],
  },
  reducers: {
    setAccommodations: (state, action) => {
      state.accommodations = action.payload;
    },
    setReservations: (state, action) => {
      state.reservations = action.payload;
    },
  },
});

export const { setAccommodations, setReservations } = adminSlice.actions;
export default adminSlice.reducer;
