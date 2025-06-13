import React, { Suspense, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import MyCreatedService from './MyCreatedService';
import { serviceCreateByPromise } from '../../ServiceApi/ServiceApi';

const ManageServices = () => {
    const {user}=useContext(AuthContext)
   
    return (
        <div>
            <Suspense>
                <MyCreatedService serviceCreateByPromise={serviceCreateByPromise(user?.email,user.accessToken)}></MyCreatedService>
            </Suspense>
        </div>
    );
};

export default ManageServices;