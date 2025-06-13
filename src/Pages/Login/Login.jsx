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
    <div className="hero bg-gray-200 text-gray-900 dark:bg-gray-800 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-white dark:bg-violet-400 w-full max-w-lg shrink-0 shadow-2xl lg:px-6">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center text-blue-500">
              Login now
            </h1>

            <form onSubmit={handleLoginForm}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full bg-gray-200 rounded-3xl"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full bg-gray-200 rounded-3xl"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
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
            <div className="divider font-extrabold">OR</div>
            <SignInWithGoogle></SignInWithGoogle>
            <p className="text-md text-center">
              Don't have an Account ? please{" "}
              <Link to="/signup" className="text-green-700 underline">
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
