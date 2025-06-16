import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import SignOut from "../../Pages/SignOut/SignOut";
import UserProfile from "../../Pages/Profile/UserProfile";
import ModeToggle from "../../Pages/ModeToggle/ModeToggle";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const links = (
    <>
      <li className="text-2xl">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-2xl">
        <NavLink to="/allServices">All Services</NavLink>
      </li>

      {user && (
        <li className="text-2xl">
          <details>
            <summary>Dashboard</summary>
            <ul className="p-2 z-20 text-md bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-white">
              <li className="">
                <Link to="/addService">Add Service</Link>{" "}
              </li>
              <li>
                <Link to="/manageServices">Manage Service</Link>{" "}
              </li>
              <Link to="/serviceBooked">
                <li> Booked-Services</li>
              </Link>
              <Link to="/todoService">
                <li>Service-To-Do</li>
              </Link>
            </ul>
          </details>
        </li>
      )}
    </>
  );
  return (
    <div className="lg:px-20 navbar sticky top-0 right-0 left-0 z-30 bg-gray-100 py-5 text-gray-900 shadow-sm dark:bg-gray-800 dark:text-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 text-white dark:bg-gray-600 dark:text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center">
          <Link to="/" className="btn btn-ghost text-3xl hidden lg:flex text-cyan-700 font-extrabold">
            Home Repair(BD) Ltd
          </Link>
          <Link to="/">
            <img
              className="h-10 w-10 rounded-full"
              src={`https://i.ibb.co/V0nskT0v/home-06.jpg`}
              alt=""
            />
          </Link>
        </div>
        <ModeToggle></ModeToggle>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <UserProfile></UserProfile>
        <SignOut></SignOut>
      </div>
    </div>
  );
};

export default Navbar;
