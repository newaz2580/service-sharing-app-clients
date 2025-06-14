import React, { Suspense, useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import MyCreatedService from './MyCreatedService';
import { serviceCreateByPromise } from '../../ServiceApi/ServiceApi';
import { Helmet } from 'react-helmet';

const ManageServices = () => {
    const {user}=useContext(AuthContext)
   
    return (
        <div>
            <Helmet><title>Manage Service</title></Helmet>
            <Suspense>
                {user && <MyCreatedService serviceCreateByPromise={serviceCreateByPromise(user?.email,user.accessToken)}></MyCreatedService>
}
                            </Suspense>
        </div>
    );
};

export default ManageServices;