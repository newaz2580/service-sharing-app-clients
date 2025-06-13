import React from "react";
import { Link } from "react-router";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";

const ShowCreatedService = ({ service, setMyServices, myServices }) => {
  // console.log(service)
  const handleServiceDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/service/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingService = myServices.filter(
                (ser) => ser._id !== id
              );
              setMyServices(remainingService);
              console.log(data);

              Swal.fire(
                "Deleted!",
                "Your service has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="card bg-white dark:bg-violet-200 text-black shadow-xl">
      <figure>
        {service.photo && (
          <img
            className="h-[200px] w-full object-cover"
            src={service.photo}
            alt={service.serviceName}
          />
        )}
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-500 font-bold text-xl">
          {service.serviceName}
        </h2>
        <p>{service.serviceDescription}</p>
        <p>Price - ${service.price}</p>

        <div className="card-actions justify-end">
          <button
            onClick={() => handleServiceDelete(service._id)}
            className="badge badge-outline cursor-pointer py-2"
          >
            <MdDelete size={20} className="text-red-600" />
            Delete
          </button>
          <Link to={`/update/${service._id}`}>
            <button className="badge badge-outline cursor-pointer">
              <CiEdit />
              Update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowCreatedService;
