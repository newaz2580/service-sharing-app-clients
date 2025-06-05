import React, { useEffect, useState } from 'react';
import ShowServiceCard from '../ShowServiceCard/ShowServiceCard';

const ServiceCard = ({serviceData}) => {
    const [service,setService]=useState([])
    useEffect(()=>{
        const limitedServiceData=serviceData.slice(0,6)
        setService(limitedServiceData)
    },[serviceData])
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {
                service.map(service=><ShowServiceCard key={service._id} service={service}></ShowServiceCard>)
            }
        </div>
    );
};

export default ServiceCard;