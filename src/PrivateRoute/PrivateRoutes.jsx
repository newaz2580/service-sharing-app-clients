import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';
import Loading from '../Pages/Loading/Loading';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading) return <Loading></Loading>
    if(!user){
        return <Navigate to='/login'></Navigate>
    }
    return children
};

export default PrivateRoutes;