import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";
import Model from "../Model/Model";

const ServiceDetails = () => {
  const singleService = useLoaderData();
  const {
    _id,
    photo,
    price,
    serviceDescription,
    serviceName,
    area,
    User_Photo,
    User_name,
  } = singleService;

  return (
    <div className="min-h-screen bg-[#641e16] dark:bg-gray-400 py-10 px-4">
      <Helmet>
        <title>{serviceName} - Service Details</title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
        
        <div className="flex flex-col items-center bg-blue-50 p-6">
          <img
            src={User_Photo}
            alt={User_name}
            className="h-20 w-20 rounded-full border-4 border-white shadow-md hover:shadow-blue-300 transition"
          />
          <h3 className="mt-3 text-xl font-bold text-gray-800">{User_name}</h3>
          <p className="text-gray-500">{area}</p>
        </div>

       
        <div className="p-6 space-y-4">
          <img
            src={photo}
            alt={serviceName}
            className="w-full h-64 object-cover rounded-xl"
          />

          <h2 className="text-2xl font-bold text-gray-800">{serviceName}</h2>
          <p className="text-gray-600 leading-relaxed">{serviceDescription}</p>

          <div className="flex justify-between items-center pt-4 border-t">
            <p className="text-xl font-bold text-blue-600">${parseFloat(price).toFixed(2)}</p>
            <Model singleService={singleService} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
