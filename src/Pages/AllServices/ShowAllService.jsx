import React from "react";
import { Link } from "react-router"; 
import { FaArrowRight, FaStar } from "react-icons/fa";

const ShowAllService = ({ service }) => {
  const { _id, photo, serviceDescription, serviceName, price } = service;
  
  const shortDescription =
    serviceDescription?.length > 80
      ? serviceDescription.slice(0, 80) + "..."
      : serviceDescription || "";

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 flex flex-col h-full">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={photo}
          alt={serviceName}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white dark:bg-gray-800 text-blue-600 px-2 py-1 rounded-lg text-sm font-bold shadow-md">
            ${price || "99"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {serviceName}
        </h2>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-1 leading-relaxed">
          {shortDescription}
        </p>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`text-xs ${
                star <= 4 ? "text-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">4.5</span>
        </div>

        <Link
          to={`/serviceDetails/${_id}`}
          className="flex items-center justify-center gap-2 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 group/btn"
        >
          <span>Explore Service</span>
          <FaArrowRight className="text-xs group-hover/btn:translate-x-0.5 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
};

export default ShowAllService;