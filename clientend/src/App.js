import React from 'react';
import './App.css';
import Home from './pages/home/Home.jsx';
import Profile from './pages/profile/Profile';
import Login from "./pages/login/Login"
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile/:username" element={<Profile />} />
          {/* <Route path="/login" element={<Login />} />
          <Route path="/login" element={<Login />} /> */}
        </Routes>
      </Router>
    </>

  );
}

export default App;
