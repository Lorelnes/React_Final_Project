import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  checkInDate: yup.date().required('Check-in date is required'),
  checkOutDate: yup.date().required('Check-out date is required').min(yup.ref('checkInDate'), 'Check-out must be after check-in'),
});

const useBookingForm = (onSubmit) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingError, setBookingError] = useState(null);

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);
    setBookingError(null); 

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      onSubmit(data);
      console.log('Booking submitted:', data);
    } catch (error) {
      setBookingError(error); 
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(handleFormSubmit),
    errors,
    isSubmitting,
    bookingError,
  };
};

export default useBookingForm;
