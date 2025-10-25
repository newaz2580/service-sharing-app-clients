import React, { Suspense, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import MyCreatedService from "./MyCreatedService";
import { serviceCreateByPromise } from "../../ServiceApi/ServiceApi";
import Loading from "../Loading/Loading";

const ManageServices = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Optional: show a message if the user is not logged in
    return (
      <div className="text-center py-10 text-gray-500">
        Please log in to manage your services.
      </div>
    );
  }

  return (
    <div className="px-6 py-4">
      <h1 className="text-2xl font-bold mb-4">Manage Services</h1>

      <Suspense fallback={<Loading />}>
        <MyCreatedService
          serviceCreateByPromise={serviceCreateByPromise(user.email)}
        />
      </Suspense>
    </div>
  );
};

export default ManageServices;
