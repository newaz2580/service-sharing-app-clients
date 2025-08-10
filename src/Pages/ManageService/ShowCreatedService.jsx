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
    <div className="bg-white dark:bg-gray-800 h-88 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 max-w-md mx-auto sm:max-w-full flex flex-col">
      <img
        src={service.photo}
        alt={service.serviceName}
        className="w-full h-32 object-cover"
      />

      <div className="p-2 flex flex-col flex-grow">
        <div className="space-y-1 flex-grow">
          <h2 className="text-md  font-semibold text-blue-600 dark:text-blue-400 font-poppins">
            {service.serviceName}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm font-poppins">
            {service.serviceDescription.length > 60
              ? service.serviceDescription.slice(0, 60) + "..."
              : service.serviceDescription}
          </p>
          <p className="font-semibold text-green-600 dark:text-green-400 font-poppins text-sm sm:text-base">
            Price: ${service.price}
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-2 mt-auto">
          <button
            onClick={() => handleServiceDelete(service._id)}
            className="flex btn text-white items-center gap-1 text-sm font-medium rounded-xl w-full justify-center transition "
          >
            <MdDelete className="text-md" />
            <span>Delete</span>
          </button>

          <Link
            to={`/update/${service._id}`}
            className="flex items-center gap-1 text-white btn btn-primary bg-blue-600 rounded-xl text-sm font-medium w-full justify-center hover:bg-blue-700 transition"
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
