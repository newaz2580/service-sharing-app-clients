import React, { useEffect } from "react";
import { Link } from "react-router";
import AOS from 'aos'
import 'aos/dist/aos.css'

const ShowServiceCard = ({ service }) => {
  
   useEffect(()=>{
          AOS.init({
              duration:600,
              delay:200
          })
      })

  const {User_Photo,User_name, photo, price,serviceDescription,serviceName } = service;
  return (
    // <div className="card bg-base-100  shadow-sm">
    //   <figure>
    //     <img
    //       src={photo}
    //       alt="Shoes"
    //       className="h-60 w-full"
    //     />
    //   </figure>
    //   <div className="card-body">
    //     <h2 className="card-title">
    //       {serviceName}
    //       <div className="badge badge-secondary">{price}</div>
    //     </h2>
    //     <p>
    //       {serviceDescription}
    //     </p>
    //     <div className="card-actions justify-end">
    //       <Link to={`/serviceDetails/${service._id}`} className="badge badge-outline">View Details</Link>
         
    //     </div>
    //   </div>
    // </div>
    <div data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex space-x-4">
		<img alt="" src={User_Photo} className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500" />
		<div className="flex flex-col space-y-1">
			<a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{User_name}</a>
			
		</div>
	</div>
	<div>
		<img src={photo} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-xl font-semibold">{serviceName}</h2>
    <p>Price:{price}</p>
		<p className="text-sm dark:text-gray-600">{serviceDescription}</p>
	</div>
	<div className="flex flex-wrap justify-between">
		
		<div className="flex space-x-2 text-sm dark:text-gray-600">
		 <Link to={`/serviceDetails/${service._id}`} className="badge badge-outline">View Details</Link>
		</div>
	</div>
</div>
  );
};

export default ShowServiceCard;
