import React from "react";

const DisplayMyBookingService = ({ booked }) => {
  // Truncate description to 60 chars
  const truncateDescription = (text, maxLength = 60) => {
    if (!text) return "N/A";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-lg overflow-hidden flex flex-col transition-transform hover:scale-[1.03] duration-300">
      <img
        className="w-full max-h-36 object-cover"
        src={booked.photos}
        alt={booked.service_Name}
      />
      <div className="p-5 flex flex-col flex-grow text-black dark:text-white">
        <h2 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
          <span className="font-normal font-poppins text-blue-600">
            {booked.service_Name}
          </span>
        </h2>
        <p className="text-gray-700 dark:text-gray-300 flex-grow">
          {truncateDescription(booked.specialInstruction)}
        </p>

        {/* Price & Status always at bottom */}
        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
          <p className="text-gray-700 dark:text-gray-300 font-semibold">
            Price: ${booked.price}
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-semibold">
            Status: {booked.status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayMyBookingService;
