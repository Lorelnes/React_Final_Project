import React from 'react';
import { Link } from 'react-router-dom';
import useHotels from '../hooks/useHotels';

const HotelsList = () => {
  const { hotels, loading, error } = useHotels();

  if (loading) {
    return <p>Loading hotels...</p>;
  }

  if (error) {
    return <p>Error fetching hotels: {error.message}</p>;
  }

  return (
    <div>
      <h2>Hotels List</h2>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id}>
            <Link to={`/hotels/${hotel.id}`}>{hotel.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelsList;
