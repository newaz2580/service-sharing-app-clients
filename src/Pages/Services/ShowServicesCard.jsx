import React from 'react';

const ShowServicesCard = ({service}) => {
    console.log(service)
    return (
        <div className="card bg-base-100 w-full shadow-sm mx-auto">
  <figure>
    <img
      className='h-80'
      src={service.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{service.title}</h2>
    <p>{service.description}</p>
   
  </div>
</div>
    );
};

export default ShowServicesCard;