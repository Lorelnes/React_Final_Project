import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; 

import './HotelDetails.css';

const BookingForm = ({ hotel }) => {
  const { register, handleSubmit, formState: { errors } } = useForm(); 
  const [bookingSubmitted, setBookingSubmitted] = useState(false);

  const onSubmit = async (data) => {
    setBookingSubmitted(true); 
  };

  if (!hotel) {
    return null; 
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Book Your Stay</h2>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" {...register('name', { required: true })} />
      {errors.name && <span className="error">Name is required</span>}

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} />
      {errors.email && <span className="error">Invalid email format</span>}

      <label htmlFor="checkIn">Check-in Date:</label>
      <input type="date" id="checkIn" {...register('checkIn', { required: true })} />
      {errors.checkIn && <span className="error">Check-in date is required</span>}

      <label htmlFor="checkOut">Check-out Date:</label>
      <input type="date" id="checkOut" {...register('checkOut', { required: true })} />
      {errors.checkOut && <span className="error">Check-out date is required</span>}

      <button type="submit" disabled={bookingSubmitted}>
        {bookingSubmitted ? 'Booking Submitted' : 'Book Now'}
      </button>
    </form>
  );
};

export default BookingForm;
