import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useUsers from '../hooks/useUsers';


const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, isLoading } = useAuth();
  const location = useLocation();
  const { users } = useUsers()
  const filterusers = users.filter(userr => userr.email == user.email && userr.role === "admin");
 
  if (isLoading) {
    return <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  }

  if (user.email && admin) {
    return children;
  }


  return <Navigate to="/home" state={{ from: location }} />;

};

export default AdminRoute;