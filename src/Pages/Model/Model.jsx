import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const Model = ({ singleService }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const {
    _id,
    photo,
    price,
    // serviceDescription,
    serviceName,
    // area,
    user_email,
    user_name,
  } = singleService;

  const handlePurchaseService = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const formData = new FormData(form);
    const newService = Object.fromEntries(formData.entries());
    newService.status = "Pending";
    fetch("http://localhost:3000/purchaseService", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newService),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        toast.success("Book Service Successful");
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
    <>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Book Now
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-full  max-w-3xl md:max-w-4xl mx-auto mt-12">
          <h3 className="font-bold text-lg text-center py-5">
            Book Service Now
          </h3>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box mx-w-xl mx-auto border p-4">
            <form onSubmit={handlePurchaseService}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="label">serviceId</label>
                  <input
                    type="text"
                    name="serviceId"
                    defaultValue={_id}
                    className="input w-full"
                    readOnly
                  />
                </div>

                <div>
                  <label className="label">Image URL</label>
                  <input
                    type="text"
                    name="photos"
                    defaultValue={photo}
                    className="input w-full"
                    readOnly
                  />
                </div>
                <div>
                  <label className="label">Service Name</label>
                  <input
                    type="text"
                    defaultValue={serviceName}
                    name="service_Name"
                    className="input w-full"
                    readOnly
                  />
                </div>

                <div>
                  <label className="label">Price</label>
                  <input
                    type="text"
                    name="price"
                    defaultValue={price}
                    className="input w-full"
                    readOnly
                  />
                </div>

                <div>
                  <label className="label">Provider email</label>
                  <input
                    type="text"
                    name="providerEmail"
                    defaultValue={user_email}
                    className="input w-full"
                    readOnly
                  />
                </div>

                <div>
                  <label className="label">Provider Name</label>
                  <input
                    type="text"
                    name="providerName"
                    defaultValue={user_name}
                    className="input w-full"
                    readOnly
                  />
                </div>

                <div>
                  <label className="label">Special instruction</label>
                  <textarea
                    className="textarea w-full"
                    name="specialInstruction"
                    placeholder="Special requirement"
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="label">Date</label>
                  <input
                    type="date"
                    className="input w-full"
                    name="date"
                    required
                  />
                </div>

                <div>
                  <label className="label">User Email</label>
                  <input
                    type="email"
                    defaultValue={user?.email}
                    name="CurrentUserEmail"
                    className="input read-only w-full"
                  />
                </div>
                <div>
                  <label className="label">User Name</label>
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    name="CurrentUserName"
                    className="input w-full read-only"
                  />
                </div>
                <div>
                  <label className="label">User PhotoURL</label>
                  <input
                    type="text"
                    defaultValue={user?.photoURL}
                    className="input read-only w-full"
                    name="currentUserPhoto"
                  />
                </div>
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  disabled={loading}
                  className=" text-center btn w-full"
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>{" "}
                      Booking...
                    </>
                  ) : (
                    "Book Service"
                  )}
                </button>
              </div>
            </form>
          </fieldset>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Model;
