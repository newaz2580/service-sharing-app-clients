import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import ShowAllService from "./ShowAllService";

const AllServices = () => {
  const serviceData = useLoaderData();
  const [service, setService] = useState(serviceData);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const filtered = serviceData.filter((service) =>
      service.serviceName.toLowerCase().includes(searchText.toLowerCase())
    );
    setService(filtered);
  }, [searchText, serviceData]);

  return (
    <div className="bg-white text-black dark:bg-gray-600 dark:text-white">
      <h2 className="text-center text-4xl py-5">All Services</h2>

      <div className="text-center py-5">
        <input
          type="text"
          className="input bg-green-700 text-white rounded-2xl"
          placeholder="Search service"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {service.length === 0 ? (
        <h3 className="text-center text-xl text-red-500">No services found</h3>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:px-20">
          {service.map((service, index) => (
            <ShowAllService
              key={index}
              service={service}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllServices;
