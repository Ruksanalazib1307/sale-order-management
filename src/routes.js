import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SaleOrderPage from './pages/SaleOrderPage';

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sale-orders" element={<SaleOrderPage />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
