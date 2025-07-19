import React  from "react";
import { Link } from "react-router"; 
import AOS from "aos";
import "aos/dist/aos.css";

const ShowServiceCard = ({ service }) => {
  

  const {
    photo,
    price,
    serviceDescription,
    serviceName,
    _id,
  } = service;

  const shortDescription =
    serviceDescription.length > 60
      ? serviceDescription.slice(0, 60) + "..."
      : serviceDescription;

  return (
    <div
      
      className="w-full rounded-2xl  bg-white p-2  dark:bg-gray-800 overflow-hidden transition hover:scale-[1.02] duration-300 max-w-2xl mx-auto mb-5"
    >
      <img src={photo} alt={serviceName} className="w-full h-36 p-2 rounded-2xl object-cover" />
     <div className="p-2 space-y-2">
        

        <div>
          <h2 className="text-xl font-bold text-black dark:text-white">
            {serviceName}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mt-1">{shortDescription}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-xl font-semibold text-gray-700 dark:text-white">Price:${price}</span>
          <Link
            to={`/serviceDetails/${_id}`}
            className="px-3 py-2 bg-blue-500 dark:bg-gray-500 text-gray-100 rounded-2xl hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowServiceCard;
