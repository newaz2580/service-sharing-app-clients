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
      setMyBookedServices(allBookings);
    }
  }, [allBookings, user]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-700 px-4 py-10">
      <title>Booked Services</title>

      <h1 className="text-4xl abril-font font-extrabold text-center text-blue-700 dark:text-blue-400 mb-12">
        Your Booked Services
      </h1>

      {myBookedServices.length === 0 ? (
        <p className="text-center text-xl md:text-2xl text-red-600 dark:text-red-400 font-semibold mt-20">
          You have not booked any services yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
          {myBookedServices.map((booked) => (
            <DisplayMyBookingService key={booked._id} booked={booked} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServiceBooked;
