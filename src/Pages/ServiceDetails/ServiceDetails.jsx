import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router";

const ServiceDetails = () => {
  const singleService = useLoaderData();
  const {id}=useParams()

  const { _id, photo, price, serviceDescription, serviceName, serviceArea } =
    singleService;
  console.log(singleService,id);
  return (
    <div className="card bg-white text-black mx-auto w-96 shadow-sm dark:bg-black dark:text-white">
     <Helmet><title>This Service Details</title></Helmet>
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
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
