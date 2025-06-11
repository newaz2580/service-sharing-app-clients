
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const AddService = () => {
  const { user } = useContext(AuthContext);
  
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newService = Object.fromEntries(formData.entries());
    const email = user.email;
    newService.user_email = email;
    newService.user_name=user.displayName
    newService.user_Photo=user.photoURL
   
      fetch('http://localhost:3000/service', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((result) => {
        toast.success(result)
        toast.success('Add service successfully')
        form.reset()
      })
      .catch((error) => toast.error(error))
      
  };
  return (
    <fieldset className="fieldset bg-gray-500 border-base-300 rounded-box w-2xl mx-auto border p-4">
      <form onSubmit={handleAddService}>
      <h2 className="text-center font-bold text-4xl py-5 ">Add New Service</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="label text-xl">Image URL</label>
            <input
              type="text"
              name="photo"
              className="input bg-white text-black"
              placeholder="Photo URL"
            />
          </div>
          <div>
            <label className="label text-xl">Service Name</label>
            <input
              type="text"
              name="serviceName"
              className="input bg-white text-black"
              placeholder="Service Name"
            />
          </div>

          <div>
            <label className="label text-xl">Price</label>
            <input
              type="text"
              name="price"
              className="input bg-white text-black"
              placeholder="Price"
            />
          </div>

          <div>
            <label className="label text-xl">Service Area</label>
            <input
              type="text"
              name="area"
              className="input bg-white text-black"
              placeholder="Service Area"
            />
          </div>
          <div>
            <label className="label text-xl">Service Description</label>
            <input
              type="text"
              name="serviceDescription"
              className="input bg-white text-black"
              placeholder="Service Description"
            />
          </div>
          <div>
            <label className="label text-xl">User Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              className="input read-only bg-white text-black"
              placeholder="user email"
            />
          </div>
          <div>
            <label className="label text-xl">User Name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              className="input read-only bg-white text-black"
              placeholder="user email"
            />
          </div>
          <div>
            <label className="label text-xl">User PhotoURL</label>
            <input
              type="text"
              defaultValue={user?.photoURL}
              className="input read-only bg-white text-black"
              placeholder="user email"
            />
          </div>
        </div>
        <div className="w-full">
          <input
            type="submit"
            value="Add Service"
            className=" text-center btn w-full mt-5 text-2xl bg-blue-600 border-0"
          />
        </div>
      </form>
    </fieldset>
  );
};

export default AddService;
