import React from "react";

const DisplayMyBookingService = ({ booked }) => {
  console.log(booked);

  return (
    <div className="flex justify-center">
        <div className="border">
      <h2>{booked.service_Name}</h2>
      <p>{booked.price}</p>
      <p>{booked._id}</p>
      <p>{booked.status}</p>
    </div>
    </div>
  );
};

export default DisplayMyBookingService;
