import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading/Loading';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading) return <Loading></Loading>
    if(!user){
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    return children
};

export default PrivateRoutes;