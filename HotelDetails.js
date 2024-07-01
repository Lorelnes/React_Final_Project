import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHotel } from '../hooks/useHotel'; 
import HotelInfo from './HotelInfo'; 
import BookingForm from './BookingForm'; 

import './HotelDetails.css'; 



const HotelDetails = () => {
  const { hotelId } = useParams(); 
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { fetchHotel } = useHotel(); 

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null); 

      try {
        const fetchedHotel = await fetchHotel(hotelId); 
        setHotel(fetchedHotel);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [fetchHotel, hotelId]); 

  if (loading) {
    return <p>Loading hotel details...</p>;
  }

  if (error) {
    return <p>Error fetching hotel details: {error.message}</p>;
  }

  if (!hotel) {
    return <p>Hotel not found.</p>; 
  }

  return (
    <div>
      <h2>Hotel Details</h2>
      <HotelInfo hotel={hotel} />
      <BookingForm hotel={hotel} /> 
    </div>
  );
};

export default HotelDetails;


