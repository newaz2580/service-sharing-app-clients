import React from "react";
import { Link } from "react-router";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Swal from "sweetalert2";

const ShowCreatedService = ({ service, setMyServices, myServices }) => {
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
        fetch(`https://service-sharing-server-steel.vercel.app/service/${id}`, {
          credentials: 'include',
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingService = myServices.filter(
                (ser) => ser._id !== id
              );
              setMyServices(remainingService);
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
    <div className="card bg-green-100  dark:bg-green-950 text-black shadow-xl">
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
        <h2 className="card-title text-blue-500 font-bold text-xl ">
          {service.serviceName}
        </h2>
        <p className="dark:text-white">{service.serviceDescription}</p>
        <p className="dark:text-white">Price - ${service.price}</p>

        <div className="card-actions justify-end">
          <button
            onClick={() => handleServiceDelete(service._id)}
            className="badge badge-outline cursor-pointer py-2 dark:text-white"
          >
            <MdDelete size={20} className="text-red-600" />
            Delete
          </button>
          <Link to={`/update/${service._id}`}>
            <button className="badge badge-outline cursor-pointer dark:text-white">
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
