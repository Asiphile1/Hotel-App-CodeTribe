import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBooking } from '../../redux/bookingSlice';

const BookingForm = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const dispatch = useDispatch();

  const handleBooking = () => {
    dispatch(createBooking({ checkInDate, checkOutDate, rooms, guests }));
  };

  return (
    <div>
      <input type="date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} />
      <input type="date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} />
      <input type="number" value={rooms} onChange={(e) => setRooms(e.target.value)} />
      <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} />
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default BookingForm;
