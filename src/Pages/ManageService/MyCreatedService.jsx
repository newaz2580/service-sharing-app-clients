import React, { use, useState } from "react";
import ShowCreatedService from "./ShowCreatedService";

const MyCreatedService = ({ serviceCreateByPromise }) => {
  const services = use(serviceCreateByPromise);
  const [myServices, setMyServices] = useState(services);

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center abril-font text-blue-700 dark:text-white mb-10">
          Services You Created
        </h2>

        {myServices?.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-red-500 dark:text-red-300 abril-font">
              🚫 No services found. Start by adding a service!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {myServices.map((service) => (
              <ShowCreatedService
                key={service._id}
                service={service}
                myServices={myServices}
                setMyServices={setMyServices}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCreatedService;
