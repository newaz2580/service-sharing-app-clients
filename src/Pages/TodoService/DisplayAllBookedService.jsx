import axios from "axios";
import React from "react";
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
  console.log(bookService);
  const handleStatusChange = (e) => {
    axios
      .patch(`http://localhost:3000/purchaseService/${_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        console.log(res.data);
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
      <td className="px-3 text-2xl font-medium dark:text-gray-600">
        {index + 1}
      </td>
      <td className="px-3 py-2">
        <p>{service_Name}</p>
      </td>
      <td className="px-3 py-2">
        <p className="dark:text-gray-600">{specialInstruction}</p>
      </td>
      <td className="px-3 py-2">
      
        <p className="dark:text-gray-600">{providerEmail}</p>
      </td>

      <td className="px-3 py-2">
        <p>{price}</p>
      </td>
      <td className="px-3 py-2">
        <p>{date}</p>
      </td>
      <td className="">
        <select
          onChange={handleStatusChange}
          defaultValue={status}
          className="select"
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
{
  /* <tr>
					<td className="px-3 text-2xl font-medium dark:text-gray-600">A</td>
					<td className="px-3 py-2">
						<p>Dwight Adams</p>
					</td>
					<td className="px-3 py-2">
						<span>UI Designer</span>
						<p className="dark:text-gray-600">Spirit Media</p>
					</td>
					<td className="px-3 py-2">
						<p>555-873-9812</p>
					</td>
					<td className="px-3 py-2">
						<p>dwight@adams.com</p>
					</td>
					<td className="px-3 py-2">
						<p>71 Cherry Court, SO</p>
						<p className="dark:text-gray-600">United Kingdom</p>
					</td>
					<td className="px-3 py-2">
						<button type="button" title="Open details" className="p-1 rounded-full dark:text-gray-400 hover:dark:bg-gray-300 focus:dark:bg-gray-300">
							<svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
								<path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"></path>
							</svg>
						</button>
					</td>
				</tr> */
}
