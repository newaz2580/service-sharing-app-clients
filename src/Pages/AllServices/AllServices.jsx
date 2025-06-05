import React from 'react';
import { useLoaderData } from 'react-router';
import ShowAllService from './ShowALlService';

const AllServices = () => {
    const serviceData=useLoaderData()
    
    return (
       <div>
         <h2 className='text-center text-4xl py-5'>All Services</h2>
         <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                serviceData.map((service,index)=><ShowAllService key={index} service={service}></ShowAllService>)
            }
        </div>
       </div>
    );
};

export default AllServices;