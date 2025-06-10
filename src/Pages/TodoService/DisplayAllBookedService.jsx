import axios from "axios";
import React from "react";
import Swal from "sweetalert2";

const DisplayAllBookedService = ({ bookService }) => {

  const {_id, service_Name, price,status } = bookService;

  const handleStatusChange=(e)=>{
//   console.log(e.target.value,bookService)
  axios.patch(`http://localhost:3000/purchaseService/${_id}`,{
    status:e.target.value})
  .then(res=>{
    console.log(res.data)
    if(res.data.modifiedCount){
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
    }
  }).catch(error=>{
    console.log(error)
  })
  }
  return (
    // <div className=''>
    //     <div className='border'>
    //         <h2>{service_Name}</h2>
    //         <p>{price}</p>
    //     </div>
    // </div>

    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
          <tr>
            <th>1</th>
            <td>{service_Name}</td>
            <td>{price}</td>
            <td>
              <select onChange={handleStatusChange} defaultValue={status} className="select">
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
