import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAccommodations } from '../../redux/accomodationSlice';
import { db } from '../../firebase/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import AccommodationCard from './AccomodationCard';

const AccommodationList = () => {
  const dispatch = useDispatch();
  const accommodations = useSelector((state) => state.accommodations.list);

  useEffect(() => {
    const fetchAccommodations = async () => {
      const querySnapshot = await getDocs(collection(db, 'accommodations'));
      const accommodationData = querySnapshot.docs.map(doc => doc.data());
      dispatch(setAccommodations(accommodationData));
    };

    fetchAccommodations();
  }, [dispatch]);

  return (
    <div>
      {accommodations.map((accommodation) => (
        <AccommodationCard key={accommodation.id} accommodation={accommodation} />
      ))}
    </div>
  );
};

export default AccommodationList;
