import React from 'react';
import { useSelector } from 'react-redux';

const AdminDashboard = () => {
  const accommodations = useSelector((state) => state.admin.accommodations);
  const reservations = useSelector((state) => state.admin.reservations);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Manage Accommodations</h2>
      {accommodations.map((acc) => (
        <div key={acc.id}>{acc.name}</div>
      ))}
      <h2>Manage Reservations</h2>
      {reservations.map((res) => (
        <div key={res.id}>{res.guestName} - {res.checkInDate} to {res.checkOutDate}</div>
      ))}
    </div>
  );
};

export default AdminDashboard;
