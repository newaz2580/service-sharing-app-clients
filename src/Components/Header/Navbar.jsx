import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router"; // Or react-router-dom
import { AuthContext } from "../../Context/AuthContext";
import SignOut from "../../Pages/SignOut/SignOut";
import UserProfile from "../../Pages/Profile/UserProfile";
import ModeToggle from "../../Pages/ModeToggle/ModeToggle";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
 

 

  // Desktop Links with toggling Dashboard submenu
  const desktopLinks = (
    <>
      <li className="text-xl">
        <NavLink to="/" >Home</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/allServices" >All Services</NavLink>
      </li>
     {
      user &&  <li className="text-xl">
        <NavLink to="/dashboard" >Dashboard</NavLink>
      </li>
     }
     

      <li className="text-xl">
        <NavLink to="/contact" >Contact Us</NavLink>
      </li>
    </>
  );

  // Mobile links: flat list with dashboard submenu expanded inline
  const mobileLinks = (
    <>
      <li className="text-xl">
        <NavLink to="/" >Home</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/allServices" >All Services</NavLink>
      </li>
       <li>
                <NavLink to="/dashboard" className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:text-blue-700 md:p-0 dark:text-white">
                  Dashboard
                </NavLink>
              </li>

      {
      user &&  <li className="text-xl">
        <NavLink to="/dashboard" >Dashboard</NavLink>
      </li>
     }

      <li className="text-xl">
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-30 bg-white dark:bg-gray-800 shadow-sm py-1 text-gray-900 dark:text-white px-5 lg:px-30">
      <div className="navbar-start relative">
        {/* Mobile Dropdown Toggle */}
        <label
          tabIndex={0}
          className="btn btn-ghost lg:hidden p-2"
          onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>

        {/* Mobile Dropdown Menu */}
        {isMobileDropdownOpen && (
          <ul
            tabIndex={0}
            className="menu dropdown-content lg:hidden absolute top-full left-0 mt-2 p-4 shadow-lg bg-gray-100 text-black dark:bg-gray-800 dark:text-white rounded-lg w-60 z-50"
          >
            {mobileLinks}
          </ul>
        )}

        {/* Logo */}
        <div className="flex items-center space-x-1 ml-3">
          <Link to="/">
            <img
              className="h-10 w-10 rounded-full"
              src="https://i.ibb.co/V0nskT0v/home-06.jpg"
              alt="Logo"
            />
          </Link>
          <Link to="/" className="text-3xl hidden lg:flex text-blue-500 font-extrabold">
            HRS
          </Link>
        </div>

        {/* Theme Toggle */}
        <div className="mt-2 ml-4">
          <ModeToggle />
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-poppins">{desktopLinks}</ul>
      </div>

      {/* Right Side */}
      <div className="navbar-end">
        <UserProfile />
        <SignOut />
      </div>
    </div>
  );
};

export default Navbar;
