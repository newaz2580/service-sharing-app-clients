import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  
  return (
    <div className="relative group w-10 h-10 mr-5">
 
  <img
    alt="User Avatar"
    src={user?.photoURL}
    className="w-10 h-10 rounded-full object-cover"
  />
  <div className="absolute opacity-0 group-hover:opacity-100 duration-300 top-0 right-15 bg-amber-400 px-4 rounded-4xl py-1 font-bold">
    {user?.displayName}
  </div>
</div>
  );
};

export default UserProfile;
