import React from 'react';
import { useSelector } from 'react-redux';

const AccommodationDetail = () => {
  const accommodation = useSelector((state) => state.accommodations.selectedAccommodation);

  if (!accommodation) return <div>Select an accommodation to view details</div>;

  return (
    <div>
      <h1>{accommodation.name}</h1>
      <img src={accommodation.images[0]} alt={accommodation.name} />
      <p>{accommodation.description}</p>
      <p>Price: ${accommodation.pricePerNight}</p>
      <button>Book Now</button>
    </div>
  );
};

export default AccommodationDetail;
