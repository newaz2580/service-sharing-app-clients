import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const Update = () => {
  const singleServiceData = useLoaderData();

  const { photo, price, area, serviceDescription, serviceName, _id } =
    singleServiceData;

  const handleUpdateService = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateServiceData = Object.fromEntries(formData.entries());
    fetch(`http://localhost:3000/service/${_id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updateServiceData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your service has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl mx-auto border p-5">
      <h2 className="text-center text-3xl">Update service</h2>
      <form onSubmit={handleUpdateService}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="label">Image URL</label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input"
              placeholder="Photo URL"
            />
          </div>
          <div>
            <label className="label">Service Name</label>
            <input
              type="text"
              name="serviceName"
              defaultValue={serviceName}
              className="input"
              placeholder="Service Name"
            />
          </div>

          <div>
            <label className="label">Price</label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              className="input"
              placeholder="Price"
            />
          </div>

          <div>
            <label className="label">Service Area</label>
            <input
              type="text"
              name="area"
              defaultValue={area}
              className="input"
              placeholder="Service Area"
            />
          </div>
          <div>
            <label className="label">Service Description</label>
            <input
              type="text"
              defaultValue={serviceDescription}
              name="serviceDescription"
              className="input"
              placeholder="Service Description"
            />
          </div>
          <div>
            <label className="label">User</label>
            <input
              type="email"
              defaultValue={""}
              className="input read-only"
              placeholder="user email"
            />
          </div>
        </div>
        <div className="w-full">
          <input
            type="submit"
            value="Update service"
            className=" text-center btn w-full"
          />
        </div>
      </form>
    </fieldset>
  );
};

export default Update;
