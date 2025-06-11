import React, { useState } from "react";
import { useLoaderData } from "react-router";
import ShowAllService from "./ShowALlService";

const AllServices = () => {
  const serviceData = useLoaderData();
  const [service,setService]=useState(serviceData)
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    const filterService=service.filter(ser=>ser.serviceName.toLowerCase().includes(searchText.toLowerCase()))
    // console.log(text);
  setService(filterService)

  };
  return (
    <div>
      <h2 className="text-center text-4xl py-5">All Services</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="search service"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <br />
        <button className="btn">Search</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {service.map((service, index) => (
          <ShowAllService
            key={index}
            handleSearch={handleSearch}
            service={service}
          ></ShowAllService>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
