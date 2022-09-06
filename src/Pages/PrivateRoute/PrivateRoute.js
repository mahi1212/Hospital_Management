import React from 'react'
import useAuth from '../../hooks/useAuth'
import CircularProgress from '@mui/material/CircularProgress';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children,...rest}) => {
    const {user} = useAuth();
    let location = useLocation();
    // if(isLoading) return <CircularProgress />
    if(user.email) return children;
    return <Navigate to="login" state={{from : location.pathname}}/>
}

export default PrivateRoute