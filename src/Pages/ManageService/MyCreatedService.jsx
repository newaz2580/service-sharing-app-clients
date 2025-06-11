import React, { use, useState } from 'react';
import ShowCreatedService from './ShowCreatedService';

const MyCreatedService = ({serviceCreateByPromise}) => {
    const services=use(serviceCreateByPromise)
    const [myServices,setMyServices]=useState(services)
    
    return (
        <div>
            <h2 className='text-center py-5 font-bold text-3xl'>Service Created By User</h2>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    myServices.map(service=><ShowCreatedService key={service._id} myServices={myServices} setMyServices={setMyServices} service={service}></ShowCreatedService>)
                }
            </div>
        </div>
    );
};

export default MyCreatedService;