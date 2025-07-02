import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import SignInWithGoogle from "../SignInWithGoogle";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLoginForm = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate(location?.state || "/");
        // console.log(user);
        toast.success("Login successful");
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
    <div className="Banner bg-gray-200 text-gray-900 dark:bg-gray-900 min-h-screen">
      <div className="Banner-content flex-col lg:flex-row-reverse ">
        
        <div className="card bg-white dark:bg-gray-800 w-full max-w-lg mx-auto shrink-0 shadow-2xl lg:px-6">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center text-blue-700">
              Login now
            </h1>

            <form onSubmit={handleLoginForm}>
              <fieldset className="fieldset">
                <label className="label dark:text-white">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                  placeholder="Email"
                />
                <label className="label dark:text-white">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black dark:text-white"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover dark:text-white">Forgot password?</a>
                </div>
                <button
                  disabled={loading}
                  className="bg-blue-600 text-white hover:bg-blue-950 rounded-3xl mt-4 py-1 px-2 text-2xl"
                >
                  {loading ? (
                    <>
                      <span className="loading loading-spinner loading-md"></span>
                      Logging...
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </fieldset>
            </form>
            <div className="divider font-extrabold dark:text-white">OR</div>
            <SignInWithGoogle></SignInWithGoogle>
            <p className="text-md text-center dark:text-white">
              Don't have an Account ? please{" "}
              <Link to="/signup" className="text-blue-700 underline">
                SignUP
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
