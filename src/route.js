import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from "./App";
import Home from './components';
import Dashboard from './components/dashboard';
const CompRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    </Router>
  );  
};

export default CompRoutes;