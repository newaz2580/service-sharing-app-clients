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
    <div className="hero bg-gray-200 dark:bg-gray-800 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-white text-gray-900 dark:bg-violet-500 w-full max-w-lg shrink-0 shadow-2xl lg:px-8">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Please Register Now!</h1>

            <form onSubmit={handleSignUpForm}>
              <fieldset className="fieldset">
                <label className="label text-md">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full bg-gray-200 rounded-3xl"
                  placeholder="Your name"
                />
                <label className="label text-md">Photo</label>
                <input
                  type="text"
                  name="photo"
                  className="input w-full bg-gray-200 rounded-3xl"
                  placeholder="Photo URL"
                />
                <label className="label text-md">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full bg-gray-200 rounded-3xl"
                  placeholder="Email"
                />
                <label className="label text-md">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full bg-gray-200 rounded-3xl"
                  placeholder="Password"
                />
                <button
                  disabled={loading}
                  className="btn bg-violet-900 rounded-3xl mt-4 text-md"
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Signing...
                    </>
                  ) : (
                    "SignUP"
                  )}
                </button>
              </fieldset>
            </form>
            <div className="divider font-extrabold">OR</div>
            <SignInWithGoogle></SignInWithGoogle>
            <p className="text-md text-center">
              Already have an Account ? please{" "}
              <Link to="/login" className="text-green-700 underline">
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
