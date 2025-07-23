import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import SignOut from "../../Pages/SignOut/SignOut";
import UserProfile from "../../Pages/Profile/UserProfile";
import ModeToggle from "../../Pages/ModeToggle/ModeToggle";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  // State for mobile dropdown (hamburger menu)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  // State for Dashboard submenu
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  // Link e click korle sob dropdown bondho kore dibe
  const handleLinkClick = () => {
    setIsMobileDropdownOpen(false);       // mobile menu close
    setIsDashboardOpen(false);            // dashboard submenu close
  };

  const links = (
    <>
      <li className="text-xl">
        <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/allServices" onClick={handleLinkClick}>All Services</NavLink>
      </li>

      {user && (
        <li className="text-xl relative">
          {/* Dashboard main button */}
          <button
            onClick={() => setIsDashboardOpen(!isDashboardOpen)}
            className="hover:text-blue-600"
          >
            Dashboard ▾
          </button>

          {/* Dashboard dropdown */}
          {isDashboardOpen && (
            <ul className="absolute bg-white dark:bg-gray-800 text-black dark:text-white mt-10 p-2 rounded-md shadow-md space-y-2 z-50 w-56">
              <li>
                <Link to="/addService" onClick={handleLinkClick}>Add Service</Link>
              </li>
              <li>
                <Link to="/manageServices" onClick={handleLinkClick}>Manage Service</Link>
              </li>
              <li>
                <Link to="/serviceBooked" onClick={handleLinkClick}>Booked-Services</Link>
              </li>
              <li>
                <Link to="/todoService" onClick={handleLinkClick}>Service-To-Do</Link>
              </li>
            </ul>
          )}
        </li>
      )}

      <li className="text-xl">
        <NavLink to="/contact" onClick={handleLinkClick}>Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-30 bg-white dark:bg-gray-800 shadow-sm py-1 text-gray-900 dark:text-white">
      <div className="navbar-start">
        {/* Mobile Dropdown Toggle */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          {/* Mobile Dropdown Menu */}
          {isMobileDropdownOpen && (
            <ul className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
              {links}
            </ul>
          )}
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-1">
          <Link to="/">
            <img className="h-10 w-10 rounded-full" src="https://i.ibb.co/V0nskT0v/home-06.jpg" alt="Logo" />
          </Link>
          <Link
            to="/"
            className="text-3xl hidden lg:hidden xl:flex text-blue-500 font-extrabold"
          >
            HRS
          </Link>
        </div>

        {/* Theme Toggle */}
        <div className="mt-2">
          <ModeToggle />
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-poppins">{links}</ul>
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
