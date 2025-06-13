import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/Firebase.init";
import { Link } from "react-router";
import { toast } from "react-toastify";

const SignOut = () => {
  const { user } = useContext(AuthContext);
  const handleUserSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("User signOut successful");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div>
      {user ? (
        <button className="bg-blue-600 px-4 py-2 text-white rounded-4xl hover:bg-blue-950" onClick={handleUserSignOut}>SignOut</button>
      ) : (
        <Link to="/login">
          <button className="bg-blue-600 px-4 py-2 text-white rounded-4xl hover:bg-blue-950">Login</button>
        </Link>
      )}
    </div>
  );
};

export default SignOut;
