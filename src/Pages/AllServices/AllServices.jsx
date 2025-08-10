import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import ShowAllService from "./ShowAllService";

const AllServices = () => {
  const serviceData = useLoaderData();

  const [filteredServices, setFilteredServices] = useState(serviceData);
  const [searchText, setSearchText] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    let result = [...serviceData];

  
    if (searchText) {
      result = result.filter((s) =>
        s.serviceName.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    
    if (sortOrder === "asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredServices(result);
  }, [searchText, sortOrder, serviceData]);

  return (
    <div className="bg-gray-100 text-black dark:bg-gray-800 dark:text-white p-5">
      <h2 className="text-center text-4xl py-5">All Services</h2>

      <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center py-5">
   
        <input
          type="text"
          placeholder="Search service"
          className="input bg-green-700 text-white rounded-2xl px-4 py-2"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

     
        <select
          className="select bg-green-700 text-white rounded-2xl px-4 py-2"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>

      {filteredServices.length === 0 ? (
        <h3 className="text-center text-xl text-red-500">
          No services found
        </h3>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 lg:px-30">
          {filteredServices.map((service) => (
            <ShowAllService key={service._id} service={service} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllServices;
