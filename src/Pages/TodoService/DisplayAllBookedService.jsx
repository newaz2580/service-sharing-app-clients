import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const DisplayAllBookedService = ({ bookService }) => {
  const { _id, service_Name, date, specialInstruction, price, status } =
    bookService;
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
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
          <tr>
            <td>{service_Name}</td>
            <td>{specialInstruction}</td>
            <td>{price}</td>
            <td>{date}</td>
            <td>
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
        </tbody>
      </table>
    </div>
  );
};

export default DisplayAllBookedService;
