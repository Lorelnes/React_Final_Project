import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HotelsList from './pages/HotelsList';
import HotelDetails from './pages/HotelDetails';

import { ThemeProvider } from './ThemeContext';
import HotelDetails from './pages/HotelDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<HotelsList />} />
        <Route path="/hotels/:hotelId" element={<HotelDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

