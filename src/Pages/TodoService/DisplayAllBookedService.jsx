import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const DisplayAllBookedService = ({ bookService, index, isMobile }) => {
  const {
    _id,
    service_Name,
    date,
    specialInstruction,
    price,
    status,
 

    CurrentUserEmail,
  } = bookService;

  const handleStatusChange = (e) => {
    axios
      .patch(
        `https://service-sharing-server-steel.vercel.app/purchaseService/${_id}`,
        {
          status: e.target.value,
        }
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Status updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        toast.error("Error updating status", error);
      });
  };

  if (isMobile) {
    return (
      <div className="border rounded-lg p-4 bg-white dark:bg-gray-700 shadow">
        <p className="font-bold text-lg mb-1">
          #{index + 1} {service_Name}
        </p>
        <p>
          <span className="font-semibold">Instruction:</span>{" "}
          {specialInstruction}
        </p>
        <p>
          <span className="font-semibold">Booker:</span> {CurrentUserEmail}
        </p>
        <p>
          <span className="font-semibold">Price:</span> ${price}
        </p>
        <p>
          <span className="font-semibold">Date:</span>{" "}
          <span className="text-red-500">{date}</span>
        </p>
        <p className="mt-2">
          <select
            onChange={handleStatusChange}
            defaultValue={status}
            className="select w-full mt-1 bg-white dark:bg-green-400"
          >
            <option disabled>Update Status</option>
            <option>pending</option>
            <option>working</option>
            <option>Completed</option>
          </select>
        </p>
      </div>
    );
  }

  return (
    <tr>
      <td className="px-3 py-2">{index + 1}</td>
      <td className="px-3 py-2">{service_Name}</td>
      <td className="px-3 py-2">{specialInstruction}</td>
      <td className="px-3 py-2">{CurrentUserEmail}</td>
      <td className="px-3 py-2">${price}</td>
      <td className="px-3 py-2 text-red-500">{date}</td>
      <td className="px-3 py-2">
        <select
          onChange={handleStatusChange}
          defaultValue={status}
          className="select bg-white dark:bg-green-400"
        >
          <option disabled>Update Status</option>
          <option>pending</option>
          <option>working</option>
          <option>Completed</option>
        </select>
      </td>
    </tr>
  );
};

export default DisplayAllBookedService;
