import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const DisplayAllBookedService = ({ bookService, index }) => {
  const {
    _id,
    service_Name,
    date,
    specialInstruction,
    price,
    status,
    providerEmail,
  } = bookService;
  // console.log(bookService);
  const handleStatusChange = (e) => {
    axios
      .patch(`https://service-sharing-server-steel.vercel.app/purchaseService/${_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <tr>
      <Helmet><title>Todo service</title></Helmet>
      <td className="px-3 text-2xl font-medium">
        {index + 1}
      </td>
      <td className="px-3 py-2">
        <p>{service_Name}</p>
      </td>
      <td className="px-3 py-2">
        <p>{specialInstruction}</p>
      </td>
      <td className="px-3 py-2">
      
        <p >{providerEmail}</p>
      </td>

      <td className="px-3 py-2">
        <p>{price}</p>
      </td>
      <td className="px-3 py-2">
        <p className="text-red-500">{date}</p>
      </td>
      <td className="">
        <select
          onChange={handleStatusChange}
          defaultValue={status}
          className="select bg-white dark:bg-green-400"
        >
          <option disabled={true}>Update Status</option>
          <option>{status}</option>
          <option>working</option>
          <option>Completed</option>
        </select>
      </td>
    </tr>
  );
};

export default DisplayAllBookedService;
