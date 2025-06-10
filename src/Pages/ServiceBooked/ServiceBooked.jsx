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
    <div>
      {bookedData.map((booked) => (
        <DisplayMyBookingService
          key={booked._id}
          booked={booked}
        ></DisplayMyBookingService>
      ))}
    </div>
  );
};

export default ServiceBooked;
