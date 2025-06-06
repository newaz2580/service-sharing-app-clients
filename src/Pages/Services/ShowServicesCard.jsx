import React, { useEffect } from 'react';

import AOS from 'aos'
import 'aos/dist/aos.css'
const ShowServicesCard = ({service}) => {
  useEffect(()=>{
           AOS.init({
               duration:600,
               delay:200
           })
       })
    return (
        <div data-aos="flip-left" data-aos-delay="100" className="card dark:bg-gray-700 w-full shadow-sm mx-auto">
  <figure>
    <img
      className='h-60'
      src={service.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{service.title}</h2>
    <p>{service.description}</p>
   
  </div>
</div>
    );
};

export default ShowServicesCard;