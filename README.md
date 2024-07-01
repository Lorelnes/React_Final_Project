This project is a React Single Page Application (SPA) for a hotel booking system. It utilizes modern React features and libraries to provide a user-friendly and functional booking experience.

Features:

Hotel Details: Users can view detailed information about a specific hotel.
Booking Form: Users can submit booking requests with their details and desired dates.
Form Validation: Ensures user input adheres to specific format and criteria (e.g., email format, date ranges).
API Integration: Simulates communication with a backend API for data fetching and potentially booking submissions.
React Hooks: Leverages React Hooks for state management, side effects, and custom logic.
React Hook Form: Provides a convenient way to manage form state and handle form submissions.
Yup: Ensures form data validity through schema-based validation.

Project Structure:
hotel-booking-spa/
  - src/
    - components/  (Reusable UI components)
      - HotelDetails.js
      - BookingForm.js
      - HotelList.js  (Not implemented yet)
    - pages/  (Top-level pages)
      - HotelList.js  (Not implemented yet)
      - HotelDetails.js
    - hooks/  (Custom hooks for logic)
      - useFetchHotels.js  (Not implemented yet)
      - useFetchHotelDetails.js
      - useBookingForm.js
    - styles/  (Global and component styles)
      - HotelDetails.css
      - BookingForm.css
    - App.js
  - package.json


Installation:
1. Clone this repository.
2. Navigate to the project directory: cd hotel-booking-spa
3. Install dependencies: npm install
