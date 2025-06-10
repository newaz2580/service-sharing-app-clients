import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";
import Model from "../Model/Model";

const ServiceDetails = () => {
  const singleService = useLoaderData();
  const { _id, photo, price, serviceDescription, serviceName, area } =
    singleService;

  return (
    <div className="card bg-white text-black mx-auto w-150 shadow-sm dark:bg-black dark:text-white">
      <Helmet>
        <title>This Service Details</title>
      </Helmet>
      <figure>
        <img className="h-96 p-5 w-full object-cover" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{serviceName}</h2>
        <p>{serviceDescription}</p>
        <p>{area}</p>
        <p>{price}</p>
        <Model singleService={singleService}></Model>
      </div>
    </div>
  );
};

export default ServiceDetails;
