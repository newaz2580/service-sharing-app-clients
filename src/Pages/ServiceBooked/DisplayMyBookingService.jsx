import React from "react";

const DisplayMyBookingService = ({ booked }) => {
  console.log(booked);

  return (
    <div className="">
      <div className="border rounded-2xl">
        <img
          className="h-50 w-full object-cover p-3 rounded-3xl"
          src={booked.photos}
          alt={booked.service_Name}        />
         <div className="pl-3 space-x-3 py-3">
          <h2 className="text-2xl"> <span className="font-bold">Service Name</span> -{booked.service_Name}</h2>
          <p> <span className="font-bold">Service Price</span> -$ <span className="text-red-500">{booked.price}</span></p>
          <p> <span className="font-bold">Service Id</span>-{booked._id}</p>
          <p> <span className="font-bold">Status -</span> <span className="text-green-500">{booked.status}</span></p>
        </div>
      </div>
    </div>
  );
};

export default DisplayMyBookingService;
