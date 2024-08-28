import React from 'react';
import { useDispatch } from 'react-redux';
import { selectAccommodation } from '../../redux/accomodationSlice';

const AccommodationCard = ({ accommodation }) => {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(selectAccommodation(accommodation))}>
      <img src={accommodation.thumbnail} alt={accommodation.name} />
      <h3>{accommodation.name}</h3>
      <p>Price: ${accommodation.pricePerNight}</p>
    </div>
  );
};

export default AccommodationCard;
