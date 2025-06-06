import React, { useEffect, useState } from 'react';
import ShowServiceCard from '../ShowServiceCard/ShowServiceCard';

const ServiceCard = ({serviceData}) => {
    const [service,setService]=useState([])
    useEffect(()=>{
        const limitedServiceData=serviceData.slice(0,6)
        setService(limitedServiceData)
    },[serviceData])
    
    return (
       <div>
        <h2 className='text-center text-4xl py-5'>Upcoming Service</h2>
         <div className='grid grid-cols-1 md:grid-cols-3 gap-5 py-5'>
            {
                service.map(service=><ShowServiceCard key={service._id} service={service}></ShowServiceCard>)
            }
        </div>
       </div>
    );
};

export default ServiceCard;