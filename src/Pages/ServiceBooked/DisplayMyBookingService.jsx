import React from "react";

const DisplayMyBookingService = ({ booked }) => {



  return (
    <div>
      <div className=" rounded-2xl bg-white text-black dark:bg-gray-900 dark:text-white">
        <img
          className="max-h-60 w-full object-cover p-3 rounded-3xl"
          src={booked.photos}
          alt={booked.service_Name}
        />
        <div className="pl-3 space-y-3 py-3">
          <h2 className="text-2xl">
            {" "}
            <span className="font-bold text-green-600">Service Name</span> -
            {booked.service_Name}
          </h2>
          <p>
            {" "}
            <span className="font-bold"> Price</span> -${" "}
            <span className="text-red-500">{booked.price}</span>
          </p>
          <p>
            {" "}
            <span className="font-bold">Service Instruction</span>-
            {booked.specialInstruction}
          </p>
          <p>
            {" "}
            <span className="font-bold">Status -</span>{" "}
            <span className="text-green-500">{booked.status}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayMyBookingService;
