import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";
import Model from "../Model/Model";
import { FaMapMarkerAlt } from "react-icons/fa";

const ServiceDetails = () => {
  const singleService = useLoaderData();
  const {
    _id,
    photo,
    price,
    serviceDescription,
    serviceName,
    area,
    user_Photo,
    user_name,
  } = singleService;

  return (
    <div className="min-h-screen  bg-gray-200 dark:bg-gray-700 py-10 px-4">
      <Helmet>
        <title>{serviceName} - Service Details</title>
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white dark:bg-cyan-600 shadow-2xl rounded-3xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center bg-cyan-100 dark:bg-blue-200 p-6">
          <div>
            <img
              src={photo}
              alt={serviceName}
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
          <div>
            <div className="text-center">
               <img
              src={user_Photo}
              alt={user_name}
              className="h-20 w-20 mx-auto rounded-full border-4 border-white shadow-md hover:shadow-blue-300 transition"
            />
            <h3 className="mt-3 text-xl font-bold text-cyan-700 dark:text-gray-800">
              {user_name}
            </h3>
            <p className="text-gray-500 flex justify-center items-center gap-1">
              <span><FaMapMarkerAlt className="text-blue-900"/></span>
              <span className="text-xl">{area}</span>
              </p>
            </div>
            <div className="p-6 space-y-4">
              <h2 className="text-2xl font-bold text-blue-800 dark:text-gray-800">
                {serviceName}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {serviceDescription}
              </p>
              <div className="flex justify-between items-center pt-4 border-t">
                <p className="text-xl font-bold text-blue-600">
                  ${parseFloat(price).toFixed(2)}
                </p>
                <Model singleService={singleService} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
