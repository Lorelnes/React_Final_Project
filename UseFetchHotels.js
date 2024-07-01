import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHotels = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(); 
        setHotels(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchHotels();
  }, []); 

  return { hotels, isLoading, error };
};

export default useFetchHotels;
