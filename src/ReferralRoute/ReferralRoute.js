import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useUsers from '../hooks/useUsers';
import useAuth from './../hooks/useAuth';

const ReferralRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    const {users} = useUsers()
    let location = useLocation();

    if (isLoading) {
        return <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default ReferralRoute;