import React, { useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const AddService = () => {
  const [loading, setLoading] = useState(false);

  const handleAddService = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const newService = Object.fromEntries(formData.entries());

    fetch("https://service-sharing-server-steel.vercel.app/service", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Add service successfully");
        form.reset();
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
    <div className="bg-white py-5 lg:py-18 dark:bg-gray-700">
      <title>Add Service</title>
      <fieldset className="fieldset bg-white dark:bg-gray-800 text-gray-700 dark:text-white border-base-300 rounded-box max-w-2xl mx-auto shadow-2xl p-4">
        <form onSubmit={handleAddService}>
          <h2 className="text-center font-bold text-4xl py-5 ">
            Add New Service
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="label text-xl">Image URL</label>
              <input
                type="text"
                name="photo"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                placeholder="Photo URL"
              />
            </div>
            <div>
              <label className="label text-xl">Service Name</label>
              <input
                type="text"
                name="serviceName"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                placeholder="Service Name"
                required
              />
            </div>

            <div>
              <label className="label text-xl">Price</label>
              <input
                type="text"
                name="price"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                placeholder="Price"
                required
              />
            </div>

            <div>
              <label className="label text-xl">Service Area</label>
              <input
                type="text"
                name="area"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                placeholder="Service Area"
                required
              />
            </div>
            <div>
              <label className="label text-xl">
                Service Description (max 100 characters)
              </label>
              <input
                type="text"
                name="serviceDescription"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                placeholder="Service Description"
                required
                maxLength={100}
              />
            </div>
          </div>
          <div className="w-full">
            <button
              type="submit"
              value="Add Service"
              disabled={loading}
              className=" text-center btn w-full mt-5 text-2xl bg-green-600 rounded-2xl border-0"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>{" "}
                  Adding service
                </>
              ) : (
                "Add Service"
              )}
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default AddService;
