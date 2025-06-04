import React from "react";
import { Link } from "react-router";

const ShowServiceCard = ({ service }) => {

  const {_id, photo, price,serviceDescription,serviceName } = service;
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
          <Link to={`/serviceDetail/${_id}`} className="badge badge-outline">View Details</Link>
         
        </div>
      </div>
    </div>
  );
};

export default ShowServiceCard;
