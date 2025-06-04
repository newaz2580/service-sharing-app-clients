import React from 'react';
import ShowServiceCard from '../ShowServiceCard/ShowServiceCard';

const ServiceCard = ({serviceData}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {
                serviceData.map(service=><ShowServiceCard key={service._id} service={service}></ShowServiceCard>)
            }
        </div>
    );
};

export default ServiceCard;