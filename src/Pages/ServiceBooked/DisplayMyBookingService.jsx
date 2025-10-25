import React from "react";

const DisplayMyBookingService = ({ booked }) => {
  console.log(booked);
  
  // Truncate description to 40 chars for compact view
  const truncateDescription = (text, maxLength = 40) => {
    if (!text) return "N/A";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  // Status color mapping
  const getStatusColor = (status) => {
    const statusColors = {
      confirmed: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      cancelled: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
      completed: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    };
    return statusColors[status?.toLowerCase()] || "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 group">
      {/* Compact Image Section */}
      <div className="relative overflow-hidden">
        <img
          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500"
          src={booked.photos || "/api/placeholder/400/200"}
          alt={booked.service_Name}
          onError={(e) => {
            e.target.src = "/api/placeholder/400/200";
          }}
        />
        <div className="absolute top-2 right-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booked.status)}`}>
            {booked.status}
          </span>
        </div>
      </div>

      {/* Compact Content Section */}
      <div className="p-3 flex flex-col flex-grow">
        {/* Service Name - Compact */}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">
          {booked.service_Name}
        </h3>

        {/* Description - Shorter */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 line-clamp-2">
          {truncateDescription(booked.specialInstruction)}
        </p>

        {/* Price and Info - Compact */}
        <div className="flex justify-between items-center mt-1 pt-2 border-t border-gray-100 dark:border-gray-800">
          <div className="flex items-center space-x-1">
            <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
              ${booked.price}
            </span>
          </div>
          
          {/* Optional compact date */}
          {booked.bookingDate && (
            <div className="flex items-center space-x-1 text-xs text-gray-500 dark:text-gray-400">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{new Date(booked.bookingDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayMyBookingService;