import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from "./App";
import Dashboard from './components/dashboard';
import Home from './components/Home';
const CompRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        {/* <Route path="/chatRoom" element={<ChatRoom/>} /> */}

      </Routes>
    </Router>
  );  
};

export default CompRoutes;