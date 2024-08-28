import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import accommodationReducer from '../redux/accomodationSlice';
import bookingReducer from './bookingSlice';
import adminReducer from './adminSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    accommodations: accommodationReducer,
    bookings: bookingReducer,
    admin: adminReducer,
  },
});
