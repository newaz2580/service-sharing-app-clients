import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/Firebase.init";
import SignInWithGoogle from "../SignInWithGoogle";
import { toast } from "react-toastify";

const SignUP = () => {
  const { createUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleSignUpForm = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      setLoading(false);
      return toast.error("Password must be at least 6 characters");
    }
    if (!/[A-Z]/.test(password)) {
      setLoading(false);
      return toast.error("Password must contain at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      setLoading(false);
      return toast.error("Password must contain at least one lowercase letter");
    }

    createUser(email, password)
      .then((result) => {
        navigate("/");
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {
            // Profile updated!
          })
          .catch((error) => {
            toast.error(error);
          });
        const user = result.user;
        toast.success(`Welcome ${user.displayName || user.email}`);
        toast.success("SignUp successful");
        setLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(`${errorCode}: ${errorMessage}`);
        setLoading(false);
      });
  };
  return (
    <div className="Banner bg-gray-200 text-gray-900 dark:bg-gray-900 min-h-screen pt-5">
      <div className="Banner-content flex-col lg:flex-row-reverse">
        <div className="card bg-white text-gray-900 dark:bg-gray-800  max-w-lg mx-auto shrink-0 shadow-2xl lg:px-8">
          <div className="card-body">
            <h1 className="text-3xl font-bold dark:text-white">Please Register Now!</h1>

            <form onSubmit={handleSignUpForm}>
              <fieldset className="fieldset">
                <label className="label text-md dark:text-white">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                  placeholder="Your name"
                />
                <label className="label text-md dark:text-white">Photo</label>
                <input
                  type="text"
                  name="photo"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                  placeholder="Photo URL"
                />
                <label className="label text-md dark:text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                  placeholder="Email"
                />
                <label className="label text-md">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                  placeholder="Password"
                />
                <button
                  disabled={loading}
                  className={`btn rounded-3xl mt-4 text-md text-white ${
                    loading ? "bg-gray-500 cursor-not-allowed" : "bg-violet-900"
                  }`}
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-sm mr-2"></span>
                      Signing...
                    </>
                  ) : (
                    "Sign Up"
                  )}
                </button>
              </fieldset>
            </form>
            <div className="divider font-extrabold dark:text-white">OR</div>
            <SignInWithGoogle></SignInWithGoogle>
            <p className="text-md text-center dark:text-white">
              Already have an Account ? please{" "}
              <Link to="/login" className="text-blue-700 underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUP;
