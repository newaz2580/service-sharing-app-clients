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
        fetch(`https://service-sharing-app-server.onrender.com/service/${id}`, {
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
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 group">
      {/* Image Section */}
      <div className="relative overflow-hidden">
        <img
          src={service.photo}
          alt={service.serviceName}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Price Tag */}
        <div className="absolute top-3 left-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="font-bold text-green-600 dark:text-green-400 text-sm">
            ${service.price}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="space-y-2 flex-grow mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white font-poppins line-clamp-1">
            {service.serviceName}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm font-poppins line-clamp-2 leading-relaxed">
            {service.serviceDescription.length > 60
              ? service.serviceDescription.slice(0, 60) + "..."
              : service.serviceDescription}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-3 border-t border-gray-100 dark:border-gray-700">
          <button
            onClick={() => handleServiceDelete(service._id)}
            className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            <MdDelete className="text-lg" />
            <span>Delete</span>
          </button>

          <Link
            to={`/update/${service._id}`}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105"
          >
            <CiEdit className="text-lg" />
            <span>Update</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowCreatedService;