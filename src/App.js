import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Authentication/Login/Login';
import Registration from './Pages/Authentication/Registration/Registration';
import PageNotFound from './Pages/PageNotFound/PageNotFound/PageNotFound';
import UserHome from './Pages/UserInterface/UserHome/UserHome/UserHome';
import UserDashboardHome from './Pages/UserInterface/UserDashboard/UserDashboardHome/UserDashboardHome';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Profile from './Pages/UserInterface/Profile/Profile/Profile';


function App() {


  return (
    <div>
           <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/home" element={<Home />}>
          </Route>
          <Route path="/myhome" element={<UserHome />}>
          </Route>
          <Route path="/mydashboard" element={<UserDashboardHome />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/registration" element={<Registration />}>
          </Route>
          <Route path="/myprofile" element={<Profile />}>
          </Route>
          <Route path='*' element={<PageNotFound />}>
          </Route>

        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
