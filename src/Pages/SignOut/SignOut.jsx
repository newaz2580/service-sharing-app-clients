import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/Firebase.init";
import { Link } from "react-router";
import { toast } from "react-toastify";

const SignOut = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleUserSignOut = () => {
    signOut(auth)
      .then(() => {
        fetch(
          "https://service-sharing-server-steel.vercel.app/logout",
          { method: "POST", credentials: "include" }
        ).then(() => {
          toast.success("User signOut successful");
          setUser(null);
        });
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div>
      {user ? (
        <button
          className="bg-blue-500 px-4 py-2 text-gray-100 text-sm font-bold rounded-4xl hover:bg-blue-950"
          onClick={handleUserSignOut}
        >
          SignOut
        </button>
      ) : (
        <Link
          to="/login"
          className="bg-blue-500 text-sm lg:px-4 py-2 text-gray-100 rounded-4xl hover:bg-blue-950 inline-block text-center"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default SignOut;
