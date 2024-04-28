import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home';
import ServicePage from './routes/ServicePage/ServicePage';
import Portfolio from './routes/Portfolio/Portfolio';

function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="*" element={<ServicePage />} />
    </Routes>
  );
}

export default RouteList;
