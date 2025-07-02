import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
const ShowServicesCard = ({ service }) => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      delay: 200,
    });
  });
  return (
    <div
      data-aos="flip-left"
      data-aos-delay="100"
      className=" bg-green-100 dark:bg-green-950  w-full shadow-sm mx-auto"
    >
      <figure>
        <img className="min-h-60 w-full" src={service.image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">{service.title}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ShowServicesCard;
