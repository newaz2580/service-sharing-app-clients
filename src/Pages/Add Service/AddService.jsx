import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const AddService = () => {
   const {user}=useContext(AuthContext)
    const handleAddService=(e)=>{
    e.preventDefault()
    const form=e.target;
    const formData=new FormData(form)
    const newService=Object.fromEntries(formData.entries())
    const email=user.email;
    newService.User_email=email;
    axios.post('http://localhost:3000/service',newService)
    .then((res)=>{
        console.log(res.data)
    }).catch(error=>{
        console.log(error)
    })
    console.log(newService)
    }
  return (
    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xl mx-auto border p-4">
      <legend className="fieldset-legend">Page details</legend>
<form onSubmit={handleAddService}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
          <div>
          <label className="label">Image URL</label>
          <input type="text" name="photo" className="input" placeholder="Photo URL" />
        </div>
        <div>
          <label className="label">Service Name</label>
          <input type="text" name="serviceName" className="input" placeholder="Service Name" />
        </div>

        <div>
          <label className="label">Price</label>
          <input type="text" name="price" className="input" placeholder="Price" />
        </div>

        <div>
          <label className="label">Service Area</label>
          <input type="text" name="serviceArea" className="input" placeholder="Service Area" />
        </div>
        <div>
          <label className="label">Service Description</label>
          <input type="text" name="serviceDescription" className="input" placeholder="Service Description" />
        </div>
        <div>
          <label className="label">User</label>
          <input type="email" defaultValue={user?.email} className="input read-only" placeholder="user email" />
        </div>
    
       
       
      </div>
       <div className="w-full">
            <input type="submit" value="Add Service" className=" text-center btn w-full" />
        </div>
          </form>
    </fieldset>
  );
};

export default AddService;
