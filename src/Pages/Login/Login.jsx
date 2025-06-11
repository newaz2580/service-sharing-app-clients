import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import SignInWithGoogle from "../SignInWithGoogle";
import { toast } from "react-toastify";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        navigate(location?.state || "/");
        toast.success(user);
        toast.success('Login successful')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl lg:px-6">
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center text-blue-400">Login now</h1>

            <form onSubmit={handleLoginForm}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
                <p className="text-xl">
                  Don't have an Account ? please{" "}
                  <Link to="/signup" className="text-green-700 underline">
                    SignUP
                  </Link>
                </p>
              </fieldset>
            </form>
            <SignInWithGoogle></SignInWithGoogle>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
