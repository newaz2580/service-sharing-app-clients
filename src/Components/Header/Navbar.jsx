import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router"; // Or react-router-dom
import { AuthContext } from "../../Context/AuthContext";
import SignOut from "../../Pages/SignOut/SignOut";
import UserProfile from "../../Pages/Profile/UserProfile";
import ModeToggle from "../../Pages/ModeToggle/ModeToggle";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileDropdownOpen(false);
    setIsDashboardOpen(false);
  };

  // Desktop Links with toggling Dashboard submenu
  const desktopLinks = (
    <>
      <li className="text-xl">
        <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/allServices" onClick={handleLinkClick}>All Services</NavLink>
      </li>

      {user && (
        <li className="text-xl relative">
          <button
            onClick={() => setIsDashboardOpen(!isDashboardOpen)}
            className="hover:text-blue-600"
          >
            Dashboard ▾
          </button>

          {isDashboardOpen && (
            <ul className="absolute bg-white dark:bg-gray-800 text-black dark:text-white mt-2 p-3 rounded-md shadow-md space-y-2 z-50 w-56">
              <li className="border-b border-gray-300 dark:border-gray-600 last:border-none py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                <Link to="/addService" onClick={handleLinkClick}>Add Service</Link>
              </li>
              <li className="border-b border-gray-300 dark:border-gray-600 last:border-none py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                <Link to="/manageServices" onClick={handleLinkClick}>Manage Service</Link>
              </li>
              <li className="border-b border-gray-300 dark:border-gray-600 last:border-none py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                <Link to="/serviceBooked" onClick={handleLinkClick}>Booked-Services</Link>
              </li>
              <li className="py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
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

  // Mobile links: flat list with dashboard submenu expanded inline
  const mobileLinks = (
    <>
      <li className="text-xl">
        <NavLink to="/" onClick={handleLinkClick}>Home</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/allServices" onClick={handleLinkClick}>All Services</NavLink>
      </li>

      {user && (
        <>
          <li className="text-xl font-bold pt-2">Dashboard</li>
          <li className="pl-6 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
            <Link to="/addService" onClick={handleLinkClick}>Add Service</Link>
          </li>
          <li className="pl-6 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
            <Link to="/manageServices" onClick={handleLinkClick}>Manage Service</Link>
          </li>
          <li className="pl-6 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
            <Link to="/serviceBooked" onClick={handleLinkClick}>Booked-Services</Link>
          </li>
          <li className="pl-6 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
            <Link to="/todoService" onClick={handleLinkClick}>Service-To-Do</Link>
          </li>
        </>
      )}

      <li className="text-xl">
        <NavLink to="/contact" onClick={handleLinkClick}>Contact Us</NavLink>
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
