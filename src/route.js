import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components';
import Dashboard from './components/dashboard';
const CompRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* <Route path="/chat" element={<ChatGroups/>} /> */}

      </Routes>
    </Router>
  );  
};

export default CompRoutes;