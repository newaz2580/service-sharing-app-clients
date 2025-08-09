import React from "react";
import { Link } from "react-router"; 
const ShowAllService = ({ service }) => {
  const { _id, photo, serviceDescription, serviceName } = service;
  const shortDescription =
    serviceDescription?.length > 60
      ? serviceDescription.slice(0, 60) + "..."
      : serviceDescription || "";

  return (
    <div className="w-full rounded-2xl shadow-xl h-84 bg-white dark:bg-gray-900 overflow-hidden transition hover:scale-[1.02] mb-5 flex flex-col">
  <img
    src={photo}
    alt={serviceName}
    className="w-full h-36 object-cover"
  />

  <div className="flex flex-col flex-1 p-3 justify-between">
    <div>
      <h2 className="text-xl font-bold text-blue-900 dark:text-white">
        {serviceName}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2">
        {shortDescription}
      </p>
    </div>

    <Link
      to={`/serviceDetails/${_id}`}
      className="w-full block text-center px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition mt-4"
    >
      View Details
    </Link>
  </div>
</div>

  );
};

export default ShowAllService;
