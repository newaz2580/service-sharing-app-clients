import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const ShowAllService = ({ service }) => {
  useEffect(() => {
    AOS.init({ duration: 600, delay: 200 });
  }, []);

  const {
    _id,
    user_Photo,
    user_name,
    photo,
    price,
    area,
    serviceDescription,
    serviceName,
  } = service;

  const shortDescription =
    serviceDescription.length > 100
      ? serviceDescription.slice(0, 100) + "..."
      : serviceDescription;

  return (
    <div
      data-aos="fade-up"
      className="w-full rounded-2xl shadow-xl bg-white dark:bg-gray-900 overflow-hidden transition hover:scale-[1.02] duration-300 max-w-4xl mx-auto mb-5"
    >
      <div className="flex flex-col md:flex-row">
        <img
          src={photo}
          alt={serviceName}
          className="w-full md:w-1/2 lg:w-[300px] h-64 object-cover"
        />
        <div className="p-6 flex flex-col justify-between space-y-4 w-full">
         
          <div className="flex items-center space-x-4">
            <img
              src={user_Photo}
              alt={user_name}
              className="w-12 h-12 rounded-full border-2 border-green-500"
            />
            <p className="font-semibold text-lg text-cyan-800 dark:text-white">
              {user_name}
            </p>
          </div>

          
          <div>
            <h2 className="text-2xl font-bold text-blue-900 dark:text-white">
              {serviceName}
            </h2>
            <p className="flex items-center gap-2 text-blue-600 mt-1">
              <FaMapMarkerAlt /> {area}
            </p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {shortDescription}
            </p>
          </div>

         
          <div className="flex items-center justify-between mt-4">
            <span className="text-xl font-semibold text-green-600">${price}</span>
            <Link
              to={`/serviceDetails/${_id}`}
              className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAllService;
