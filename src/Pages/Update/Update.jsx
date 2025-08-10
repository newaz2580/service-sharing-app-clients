import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Update = () => {
  const singleServiceData = useLoaderData();
  const navigate=useNavigate()
  const [loading, setLoading] = useState(false);
  const { photo, price, area, serviceDescription, serviceName, _id } =
    singleServiceData;

  const handleUpdateService = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const updateServiceData = Object.fromEntries(formData.entries());
    fetch(`https://service-sharing-server-steel.vercel.app/service/${_id}`, {
      method: "PUT",
      credentials: 'include',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateServiceData),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate('/dashboard/manageServices')
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your service has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`${errorCode}: ${errorMessage}`);
        setLoading(false);
      });
  };
  return (
    <fieldset className="fieldset bg-white dark:bg-gray-800 border-base-300 rounded-box max-w-xl mx-auto border p-5">
      <h2 className="text-center text-3xl text-black dark:text-white">Update service</h2>
      <form onSubmit={handleUpdateService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">Image URL</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
              placeholder="Photo URL"
            />
          </div>
          <div>
            <label className="label">Service Name</label>
            <input
              type="text"
              name="serviceName"
              defaultValue={serviceName}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
              placeholder="Service Name"
            />
          </div>

          <div>
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
              placeholder="Price"
            />
          </div>

          <div>
            <label className="label">Service Area</label>
            <input
              type="text"
              name="area"
              defaultValue={area}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
              placeholder="Service Area"
            />
          </div>
          <div>
            <label className="label">Service Description</label>
            <input
              type="text"
              defaultValue={serviceDescription}
              name="serviceDescription"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
              placeholder="Service Description"
            />
          </div>
         
        </div>
        <div className="w-full my-5">
          <button
            type="submit"
            className="btn w-full bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading loading-spinner loading-sm"></span>{" "}
                Updating...
              </>
            ) : (
              "Update Service"
            )}
          </button>
        </div>
      </form>
    </fieldset>
  );
};

export default Update;
