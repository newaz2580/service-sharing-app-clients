import React from "react";
import { Link } from "react-router";


const ShowCreatedService = ({ service,setMyServices,myServices }) => {
   console.log(service.serviceName)
    const handleServiceDelete=(id)=>{
        
        fetch(`http://localhost:3000/service/${id}`,{
            method: "DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount){
                const remainingService=myServices.filter(ser=>ser._id !== id)
                setMyServices(remainingService)
                alert('delete successfully')
            }
            console.log(data)
        })
    }
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure>
        <img className="h-50" src={service.photo} alt="Shoes" />
        
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {service.serviceName}
          <p>{service.price}</p>
        </h2>
        <p>
          {service.serviceDescription}
        </p>
        <div className="card-actions justify-end">
          <div onClick={()=>handleServiceDelete(service._id)} className="badge badge-outline">Delete</div>
          <Link to={`/update/${service._id}`}><div className="badge badge-outline">Update</div></Link>
        </div>
      </div>
    </div>
  );
};

export default ShowCreatedService;
