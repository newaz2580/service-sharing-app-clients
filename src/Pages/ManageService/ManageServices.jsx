import React, { Suspense, useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import MyCreatedService from "./MyCreatedService";
import { serviceCreateByPromise } from "../../ServiceApi/ServiceApi";
import Loading from "../Loading/Loading";



const ManageServices = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
        <title>Manage Service</title>
      <Suspense fallback={<Loading />}>
        {user && (
          <MyCreatedService
            serviceCreateByPromise={serviceCreateByPromise(user?.email)}
          ></MyCreatedService>
        )}
      </Suspense>
    </div>
  );
};

export default ManageServices;
