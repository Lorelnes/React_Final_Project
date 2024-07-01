import React from 'react';

const HotelInfo = ({ hotel }) => {
  if (!hotel) {
    return null; 
  }

  return (
    <div className="hotel-info">
      <img src={hotel.imageUrl} alt={hotel.name} />
      <h2>{hotel.name}</h2>
      <p>{hotel.description}</p>
      <ul>
        <li>Location: {hotel.address}</li>
        <li>Rating: {hotel.rating} stars</li>
      </ul>
    </div>
  );
};

export default HotelInfo;
