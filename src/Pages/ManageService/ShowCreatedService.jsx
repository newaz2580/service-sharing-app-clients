import React from "react";
import { Link } from "react-router"; // fixed import
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
          credentials: "include",
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remaining = myServices.filter((s) => s._id !== id);
              setMyServices(remaining);
              Swal.fire("Deleted!", "Your service has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 max-w-md mx-auto sm:max-w-full">
      <img
        src={service.photo}
        alt={service.serviceName}
        className="w-full h-36 object-cover"
      />

      <div className="p-4 space-y-1">
        <h2 className="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 font-poppins">
          {service.serviceName}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-poppins">
          {service.serviceDescription.length > 100
            ? service.serviceDescription.slice(0, 100) + "..."
            : service.serviceDescription}
        </p>
        <p className="font-semibold text-green-600 dark:text-green-400 font-poppins text-sm sm:text-base">
          Price: ${service.price}
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-4 justify-between items-center pt-4">
          <button
            onClick={() => handleServiceDelete(service._id)}
            className="flex btn text-white items-center gap-1 text-sm font-medium rounded-4xl w-full sm:w-auto  justify-center  transition"
          >
            <MdDelete className="text-md" />
            <span>Delete</span>
          </button>

          <Link
            to={`/update/${service._id}`}
            className="flex items-center gap-1 text-white btn btn-primary bg-blue-600 rounded-4xl text-sm font-medium w-full sm:w-auto  justify-center hover:bg-blue-700 transition"
          >
            <CiEdit className="text-md" />
            Update
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowCreatedService;
