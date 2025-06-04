import React from 'react';
import { useLoaderData } from 'react-router';

const ServiceDetails = () => {
    const singleService=useLoaderData()
    const {_id, photo, price,serviceDescription,serviceName,serviceArea } = singleService;
    console.log(singleService)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {serviceName}
     
    </h2>
    <p>{serviceDescription}</p>
    <p>{serviceArea}</p>
    <p>{price}</p>

    <div className="card-actions justify-end">
      <div className="badge badge-outline">Book Now</div>
      
    </div>
  </div>
</div>
    );
};

export default ServiceDetails;