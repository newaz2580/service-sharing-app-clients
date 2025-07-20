import React, { useState } from "react";
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
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Service added successfully!");
        form.reset();
        setLoading(false);
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
        setLoading(false);
      });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-10 px-4 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
        <h2 className="abril-font text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
          🚀 Add a New Service
        </h2>
        <form onSubmit={handleAddService} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                Image URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="https://your-image.jpg"
                className="w-full text-black font-poppins p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block font-poppins text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                Service Name
              </label>
              <input
                type="text"
                name="serviceName"
                placeholder="e.g., AC Repair"
                required
                className="w-full text-black p-3 font-poppins rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block font-poppins text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                Price
              </label>
              <input
                type="text"
                name="price"
                placeholder="$120"
                required
                className="w-full text-black font-poppins p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label className="block font-poppins text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
                Service Area
              </label>
              <input
                type="text"
                name="area"
                placeholder="e.g., Dhaka"
                required
                className="w-full  p-3 font-poppins rounded-md border text-black border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block font-poppins text-lg font-medium text-gray-700 dark:text-gray-300 mb-1">
              Service Description <span className="text-sm text-gray-500">(max 100 chars)</span>
            </label>
            <input
              type="text"
              name="serviceDescription"
              placeholder="Brief description of the service"
              maxLength={100}
              required
              className="w-full text-black font-poppins p-3 rounded-md border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-xl font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="loading loading-spinner loading-sm"></span>
                Adding Service...
              </span>
            ) : (
              "Add Service"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
