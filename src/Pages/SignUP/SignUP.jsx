import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/Firebase.init";
import SignInWithGoogle from "../SignInWithGoogle";
import { toast } from "react-toastify";

const SignUP = () => {
  const { createUser } = useContext(AuthContext);
  const navigate=useNavigate()
  const handleSignUpForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        navigate('/')
        const profile = {
          displayName: name,
          photoURL: photo,
        };
        updateProfile(auth.currentUser, profile)
          .then(() => {
            // Profile updated!
        
          })
          .catch((error) => {
            toast.error(error)
          });
        const user = result.user;
        toast.success(user);
        toast.success('SignUp successful')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorCode, errorMessage);
  
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl px-8">
          <div className="card-body">
            <h1 className="text-4xl font-bold">Please Register Now!</h1>

            <form onSubmit={handleSignUpForm}>
              <fieldset className="fieldset">
                <label className="label text-xl">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input w-full"
                  placeholder="Your name"
                />
                <label className="label text-xl">Photo</label>
                <input
                  type="text"
                  name="photo"
                  className="input w-full"
                  placeholder="Photo URL"
                />
                <label className="label text-xl">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Email"
                />
                <label className="label text-xl">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                />
                <button className="btn bg-green-800 mt-4 text-xl">SignUP</button>
                <p className="text-xl">
                  Already have an Account ? please{" "}
                  <Link to="/login" className="text-green-700 underline">
                    Login
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

export default SignUP;
