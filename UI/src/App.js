import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Analytics from './pages/Analytics/Analytics';
import Map from './Map'; 
import './App.css';
import RateRequest from './pages/Rate Request/RateRequest';
import Quote from './pages/Quote/Quote';
import Shipments from './pages/Shipments/Shipments';
import Archive from './pages/Archive/Archive'
import History from './pages/History/History'
import UserList from './pages/User List/UserList';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/rate-request" element={<RateRequest />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/shipments" element={<Shipments />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/history" element={<History />} />
          <Route path="/map" element={<Map />} />
        </Routes>
    </Router>
  );
};

export default App;
