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

  const services=service.description.length >60 ?
  service.description.slice(0 ,60) + "..." :
  service.description
  return (
    <div
      data-aos="flip-left"
      data-aos-delay="100"
      className=" bg-white dark:bg-gray-800  w-full  mx-auto rounded-2xl"
    >
      <figure>
        <img className="h-32 w-full p-2 rounded-2xl" src={service.image} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-xl">{service.title}</h2>
        <p>{services}</p>
      </div>
    </div>
  );
};

export default ShowServicesCard;
