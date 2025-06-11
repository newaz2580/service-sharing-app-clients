import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import DisplayMyBookingService from "./DisplayMyBookingService";

const ServiceBooked = () => {
  const bookingService = useLoaderData();
  const { user } = useContext(AuthContext);
  const [bookedData, setBookedData] = useState([]);
  useEffect(() => {
    if (user?.email) {
      const booking = bookingService.filter(
        (book) => book.CurrentUserEmail === user.email
      );
      setBookedData(booking);
    }
  }, [bookingService, user]);

  console.log(bookedData);

  return (
    <>
    <h2 className="text-3xl font-bold py-5 text-green-300 text-center">Booked Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5">
      {bookedData.map((booked) => (
        <DisplayMyBookingService
          key={booked._id}
          booked={booked}
        ></DisplayMyBookingService>
      ))}
    </div>
    </>
  );
};

export default ServiceBooked;
