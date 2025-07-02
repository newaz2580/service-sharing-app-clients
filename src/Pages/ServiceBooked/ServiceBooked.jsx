import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import DisplayMyBookingService from "./DisplayMyBookingService";


const ServiceBooked = () => {
  const allBookings = useLoaderData();
  const { user } = useContext(AuthContext);
  const [myBookedServices, setMyBookedServices] = useState([]);
  useEffect(() => {
    if (user?.email) {
      const booking = allBookings
      setMyBookedServices(booking);
    }
  }, [allBookings, user]);
  return (
    <div className="bg-gray-200 dark:bg-gray-600 lg:px-20 px-5 ">
     
        <title>Booked Services</title>
     
      <h2 className="text-3xl font-bold py-5 text-blue-600 text-center">
        Booked Services
      </h2>
      <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-4 gap-5 py-5 text-center">
        {myBookedServices.length === 0 ? (
          <h2 className="text-center text-3xl text-red-600">
            No Service Booked Yet
          </h2>
        ) : (
          myBookedServices.map((booked) => (
            <DisplayMyBookingService
              key={booked._id}
              booked={booked}
            ></DisplayMyBookingService>
          ))
        )}
      </div>
    </div>
  );
};

export default ServiceBooked;
