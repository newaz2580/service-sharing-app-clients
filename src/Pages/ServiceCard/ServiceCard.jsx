import React, { useEffect, useState } from 'react';
import ShowServiceCard from '../ShowServiceCard/ShowServiceCard';
import { Link } from 'react-router';

const ServiceCard = ({serviceData}) => {
    const [service,setService]=useState([])
    useEffect(()=>{
        const limitedServiceData=serviceData?.slice(0,8)
        setService(limitedServiceData)
    },[serviceData])
    
    return (
       <div>
        <h2 className='text-center text-4xl py-8'>Popular Services</h2>
         <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-5 lg:px-10 xl:px-40'>
            {
                service?.map(service=><ShowServiceCard key={service._id} service={service}></ShowServiceCard>)
            }
        </div>
        <div className='text-center py-4'>
        <Link to='/allServices'><button className='btn bg-blue-600 px-8 text-2xl'>ShowAll</button></Link>
        </div>
       </div>
    );
};

export default ServiceCard;