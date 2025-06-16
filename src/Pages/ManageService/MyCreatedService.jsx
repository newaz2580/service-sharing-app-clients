import React, { use, useState } from 'react';
import ShowCreatedService from './ShowCreatedService';

const MyCreatedService = ({serviceCreateByPromise}) => {
    const services=use(serviceCreateByPromise)


    const [myServices,setMyServices]=useState(services)
    
    return (
        <div className='bg-white dark:bg-gray-700'>
            <h2 className='text-center py-5 font-bold text-2xl lg:text-4xl text-blue-700 dark:text-white'>Service Created By User</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-white dark:bg-gray-700 py-5 px-2 lg:px-20'>
                {
                    myServices?.map(service=><ShowCreatedService key={service._id} myServices={myServices} setMyServices={setMyServices} service={service}></ShowCreatedService>)
                }
            </div>
        </div>
    );
};

export default MyCreatedService;