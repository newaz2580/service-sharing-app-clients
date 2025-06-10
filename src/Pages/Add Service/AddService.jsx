
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const AddService = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const handleAddService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newService = Object.fromEntries(formData.entries());
    const email = user.email;
    newService.User_email = email;
    newService.User_name=user.displayName
    newService.User_Photo=user.photoURL
    // console.log(newService)
      fetch('http://localhost:3000/service', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
      })
      .catch((error) => console.log(error))
      
  };
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl mx-auto border p-4">
      <legend className="fieldset-legend">Page details</legend>
      <form onSubmit={handleAddService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">Image URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo URL"
            />
          </div>
          <div>
            <label className="label">Service Name</label>
            <input
              type="text"
              name="serviceName"
              className="input"
              placeholder="Service Name"
            />
          </div>

          <div>
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              className="input"
              placeholder="Price"
            />
          </div>

          <div>
            <label className="label">Service Area</label>
            <input
              type="text"
              name="area"
              className="input"
              placeholder="Service Area"
            />
          </div>
          <div>
            <label className="label">Service Description</label>
            <input
              type="text"
              name="serviceDescription"
              className="input"
              placeholder="Service Description"
            />
          </div>
          <div>
            <label className="label">User Email</label>
            <input
              type="email"
              defaultValue={user?.email}
              className="input read-only"
              placeholder="user email"
            />
          </div>
          <div>
            <label className="label">User Name</label>
            <input
              type="text"
              defaultValue={user?.displayName}
              className="input read-only"
              placeholder="user email"
            />
          </div>
          <div>
            <label className="label">User PhotoURL</label>
            <input
              type="text"
              defaultValue={user?.photoURL}
              className="input read-only"
              placeholder="user email"
            />
          </div>
        </div>
        <div className="w-full">
          <input
            type="submit"
            value="Add Service"
            className=" text-center btn w-full"
          />
        </div>
      </form>
    </fieldset>
  );
};

export default AddService;
