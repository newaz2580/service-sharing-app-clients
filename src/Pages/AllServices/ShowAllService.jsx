import React from 'react';
import { Link } from 'react-router';

const ShowAllService = ({service}) => {
     const {_id, photo, price,serviceDescription,serviceName } = service;
    return (
         <div className="card bg-base-100  mx-auto shadow-sm">
      <figure>
        <img
          src={photo}
          alt={serviceName}
          className='h-50'
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {serviceName}
          <div className="badge badge-secondary">{price}</div>
        </h2>
        <p>
          {serviceDescription}
        </p>
        <div className="card-actions justify-end">
          <Link to={`/serviceDetail/${_id}`} className="badge badge-outline">View Details</Link>
         
        </div>
      </div>
    </div>
    );
};

export default ShowAllService;