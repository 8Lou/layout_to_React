import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Cars />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;