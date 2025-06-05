import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../../firebase/Firebase.init";
import SignInWithGoogle from "../SignInWithGoogle";

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
            // ...
          })
          .catch((error) => {
            console.log(error)
          });
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen pt-40">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Please Register Now!</h1>

            <form onSubmit={handleSignUpForm}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Your name"
                />
                <label className="label">Photo</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="Photo URL"
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <button className="btn btn-neutral mt-4">SignUP</button>
                <p>
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
