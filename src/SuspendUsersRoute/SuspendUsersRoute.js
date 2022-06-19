import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useUsers from '../hooks/useUsers';

const SuspendUsersRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading, userfirebase } = useAuth();
    const location = useLocation();
    const { users } = useUsers()
    const filterusers = users.filter(userr => userr.email == user?.email);
    
   
   
    setTimeout(() => { 
        if (isLoading) {
            return <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          }
    }, 5000);
    setTimeout(() => { 
        if (filterusers[0]?.status == 'Suspend') {
            console.log(filterusers[0]?.status)
            return children;
          }
    }, 5000);
    
  
  
    return <Navigate to="/login" state={{ from: location }} />;
  
  };


export default SuspendUsersRoute;