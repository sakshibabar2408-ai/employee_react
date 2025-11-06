import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome'; 
import Login from './components/Login';
import Register from './components/Register';
import EmployeeDashboard from './components/EmployeeDashboard';
import EmployeeProfile from './components/EmployeeProfile'; // ✅ new import
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<EmployeeDashboard/>} />
      <Route path="/employee/:id" element={<EmployeeProfile/>} /> {/* ✅ new route */}
    </Routes>
  );
}

export default App;

