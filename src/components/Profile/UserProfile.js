import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);

  if (!user) return <div>Please log in to view your profile.</div>;

  return (
    <div>
      <h1>{user.email}</h1>
      <button>Edit Profile</button>
    </div>
  );
};

export default UserProfile;
