import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchHotelDetails = (hotelId) => {
  const [hotelData, setHotelData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotelDetails = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(); 
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (hotelId) {
      fetchHotelDetails();
    }
  }, [hotelId]); 

  return { hotelData, isLoading, error };
};

export default useFetchHotelDetails;
