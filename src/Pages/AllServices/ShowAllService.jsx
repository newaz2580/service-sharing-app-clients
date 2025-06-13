import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Helmet } from "react-helmet";

const ShowAllService = ({ service }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 200,
    });
  }, []);

  const {
    user_Photo,
    user_name,
    photo,
    price,
    area,
    serviceDescription,
    serviceName,
    _id,
  } = service;


  return (
    <div
      data-aos="fade-up"
      className="w-full rounded-2xl shadow-xl bg-white dark:bg-gray-900 overflow-hidden transition hover:scale-[1.02] duration-300 max-w-lg mx-auto mb-5"
    >
      <Helmet>
        <title>All services</title>
      </Helmet>
      <img
        src={photo}
        alt={serviceName}
        className="w-full h-64  object-cover"
      />

      <div className="p-6 space-y-4">
        <div className="flex items-center space-x-4">
          <img
            src={user_Photo}
            alt={user_name}
            className="w-12 h-12 rounded-full border-2 border-green-500"
          />
          <div>
            <p className="font-semibold text-lg text-gray-800 dark:text-white">
              {user_name}
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {serviceName}
          </h2>
          <p className="flex items-center gap-2"><FaMapMarkerAlt />{area}</p>
          <p className="text-gray-600 dark:text-gray-300 mt-1 line-clamp-3">
            {serviceDescription}
          </p>
        </div>

        <div className="flex items-center justify-between">
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
  );
};

export default ShowAllService;
