import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const AddService = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const handleAddService = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const newService = Object.fromEntries(formData.entries());

    fetch("https://service-sharing-server-steel.vercel.app/service", {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result)
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
    <div className="bg-white py-5 lg:py-18 dark:bg-violet-400">
      <Helmet><title>Add Service</title></Helmet>
      <fieldset className="fieldset bg-white dark:bg-fuchsia-200 text-gray-700 border-base-300 rounded-box max-w-2xl mx-auto shadow-2xl p-4">
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
                className="input bg-gray-200 text-black w-full"
                placeholder="Photo URL"
              />
            </div>
            <div>
              <label className="label text-xl">Service Name</label>
              <input
                type="text"
                name="serviceName"
                className="input bg-gray-200 text-black w-full"
                placeholder="Service Name"
                required
              />
            </div>

            <div>
              <label className="label text-xl">Price</label>
              <input
                type="text"
                name="price"
                className="input bg-gray-200 text-black w-full"
                placeholder="Price"
                required
              />
            </div>

            <div>
              <label className="label text-xl">Service Area</label>
              <input
                type="text"
                name="area"
                className="input bg-gray-200 text-black w-full"
                placeholder="Service Area"
                required
              />
            </div>
            <div>
              <label className="label text-xl">Service Description</label>
              <input
                type="text"
                name="serviceDescription"
                className="input bg-gray-200 text-black w-full"
                placeholder="Service Description"
                required
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
              {
                loading ? (
                  <>
                  <span className="loading loading-spinner loading-sm"></span> Adding service
                  </>
                ):'Add Service'
              }
            </button>
          </div>
        </form>
      </fieldset>
    </div>
  );
};

export default AddService;
