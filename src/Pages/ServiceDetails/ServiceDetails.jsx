import React from "react";
import { useLoaderData } from "react-router";
import Model from "../Model/Model";
import { FaMapMarkerAlt, FaStar, FaClock, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

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
    rating = 4.8,
    duration = "2 hours",
    completedJobs = 47
  } = singleService;

  // Generate star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`${
          index < Math.floor(rating) 
            ? "text-yellow-400" 
            : "text-gray-300"
        }`}
      />
    ));
  };

  const features = [
    { icon: <FaCheckCircle className="text-green-500" />, text: "Quality Guaranteed" },
    { icon: <FaShieldAlt className="text-blue-500" />, text: "Verified Professional" },
    { icon: <FaClock className="text-purple-500" />, text: "On-time Service" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-8 lg:py-12 px-4">
      <title>{serviceName} - Service Details</title>

      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            <span>Services</span>
            <span className="mx-2">/</span>
            <span className="text-blue-600 dark:text-blue-400">{serviceName}</span>
          </div>
        </nav>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 lg:p-8">
            {/* Left Column - Service Image */}
            <div className="space-y-6">
              <div className="relative group">
                <img
                  src={photo}
                  alt={serviceName}
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg">
                    ${parseFloat(price).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center group hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <div className="flex justify-center mb-2">
                      {feature.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Service Details */}
            <div className="space-y-6">
              {/* Service Header */}
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {serviceName}
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  {serviceDescription}
                </p>
              </div>

              {/* Rating and Duration */}
              <div className="flex items-center space-x-6 py-4 border-y border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {renderStars(rating)}
                  </div>
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {rating}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                  <FaClock className="text-lg" />
                  <span className="text-lg">{duration}</span>
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  <span className="text-lg">{completedJobs}+ Completed</span>
                </div>
              </div>

              {/* Service Provider Card */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={user_Photo}
                      alt={user_name}
                      className="h-16 w-16 rounded-2xl border-4 border-white dark:border-gray-800 shadow-lg"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {user_name}
                    </h3>
                    <div className="flex items-center space-x-1 mt-1">
                      <FaMapMarkerAlt className="text-blue-600 text-sm" />
                      <span className="text-gray-600 dark:text-gray-300">{area}</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2">
                      <div className="flex items-center space-x-1">
                        {renderStars(4.9)}
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Provider Rating</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Section */}
              <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-600 dark:text-gray-300">Total Price</p>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      ${parseFloat(price).toFixed(2)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-300">Service Includes</p>
                    <p className="text-green-600 dark:text-green-400 font-semibold">All Materials + Labor</p>
                  </div>
                </div>
                <Model singleService={singleService} />
                <p className="text-center text-gray-500 dark:text-gray-400 text-sm mt-4">
                  No upfront payment required. Pay after service completion.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                <FaShieldAlt className="text-blue-600 dark:text-blue-400 text-lg" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Quality Guarantee</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              100% satisfaction guaranteed. If you're not happy, we'll make it right.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                <FaClock className="text-green-600 dark:text-green-400 text-lg" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Quick Response</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Average response time: 15 minutes. Available 24/7 for urgent services.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                <FaCheckCircle className="text-purple-600 dark:text-purple-400 text-lg" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Verified Professional</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              All providers are background-checked and professionally verified.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;