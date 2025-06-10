import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";


const Model = ({ singleService }) => {
  const { user } = useContext(AuthContext);
  const {
    _id,
    photo,
    price,
    // serviceDescription,
    serviceName,
    // area,
    User_email,
    User_name,
  } = singleService;


  const handlePurchaseService=(e)=>{
    e.preventDefault()
    const form = e.target;
    const formData = new FormData(form);
    const newService = Object.fromEntries(formData.entries());
    newService.status='Pending'
      fetch('http://localhost:3000/purchaseService', {
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
    console.log(newService)
  }
  return (
    <div className="card-actions justify-end">
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Book Now
      </button>
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle lg:model-large"
      >
        <div className="modal-box">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl mx-auto border p-4">
            <legend className="fieldset-legend">Page details</legend>
            <form onSubmit={handlePurchaseService}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">serviceId</label>
                  <input
                    type="text"
                    name="serviceId"
                    defaultValue={_id}
                    className="input"
                    readOnly
                  />
                </div>

                <div>
                  <label className="label">Image URL</label>
                  <input
                    type="text"
                    name="photos"
                    defaultValue={photo}
                    className="input"
                    readOnly
                  />
                </div>
                <div>
                  <label className="label">Service Name</label>
                  <input
                    type="text"
                    defaultValue={serviceName}
                    name="service_Name"
                    className="input"
                    readOnly
                  />
                </div>

                <div>
                  <label className="label">Price</label>
                  <input
                    type="text"
                    name="price"
                    defaultValue={price}
                    className="input"
                    readOnly
                  />
                </div>

                {/* <div>
                  <label className="label">Service Area</label>
                  <input
                    type="text"
                    name="area"
                    defaultValue={area}
                    className="input"
                  />
                </div> */}

                <div>
                  <label className="label">Provider email</label>
                  <input
                    type="text"
                    name="providerEmail"
                    defaultValue={User_email}
                    className="input"
                    readOnly
                  />
                </div>

                <div>
                  <label className="label">Provider Name</label>
                  <input
                    type="text"
                    name="providerName"
                    defaultValue={User_name}
                    className="input"
                    readOnly
                  />
                </div>

                <div>
                  <label className="label">Special instruction</label>
                  <textarea
                    className="textarea"
                    name="specialInstruction"
                    placeholder="Special requirement"
                  ></textarea>
                </div>

                <div>
                  <label className="label">Date</label>
                  <input type="date" className="input" name="date" />
                </div>

                <div>
                  <label className="label">User Email</label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    name="CurrentUserEmail"
                    className="input read-only"
                
                  />
                </div>
                <div>
                  <label className="label">User Name</label>
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    name="CurrentUserName"
                    className="input read-only"
                  
                  />
                </div>
                <div>
                  <label className="label">User PhotoURL</label>
                  <input
                    type="text"
                    defaultValue={user?.photoURL}
                    className="input read-only"
                    name="currentUserPhoto"
                  />
                </div>
              </div>
              <div className="w-full">
                <input
                  type="submit"
                  value="Purchase Service"
                  className=" text-center btn w-full"
                />
              </div>
            </form>
          </fieldset>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
      {/* <div className="badge badge-outline">Book Now</div> */}
    </div>
  );
};

export default Model;
