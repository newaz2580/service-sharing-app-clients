import React from "react";

const ShowServiceCard = ({ service }) => {
  console.log(service);
  const { photo, price,serviceDescription,serviceName } = service;
  return (
    <div className="card bg-base-100 w-96 mx-auto shadow-sm">
      <figure>
        <img
          src={photo}
          alt="Shoes"
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
          <div className="badge badge-outline">View Details</div>
         
        </div>
      </div>
    </div>
  );
};

export default ShowServiceCard;
