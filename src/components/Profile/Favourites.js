import React from 'react';
import { useSelector } from 'react-redux';
import AccommodationCard from '../Accommodation/AccommodationCard';

const Favorites = () => {
  const favorites = useSelector((state) => state.auth.user?.favorites || []);

  return (
    <div>
      <h2>Your Favorite Accommodations</h2>
      {favorites.map((fav) => (
        <AccommodationCard key={fav.id} accommodation={fav} />
      ))}
    </div>
  );
};

export default Favorites;
