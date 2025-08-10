import React, { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router";
import {
  MdLogout,
  MdManageAccounts,
  MdBookOnline,
  MdAddCircleOutline,
  MdChecklist,
  MdOutlineQueryStats,
  MdHome,
} from "react-icons/md";
import SignOut from "../Pages/SignOut/SignOut";
import ModeToggle from "../Pages/ModeToggle/ModeToggle";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate=useNavigate()

  return (
    <div className="bg-gray-100 dark:bg-gray-700 min-h-screen flex">
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 w-64 h-screen bg-gray-200  text-gray-800 dark:bg-gray-800 dark:text-white p-2
          flex flex-col justify-between
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
          z-40
        `}
      >
        <div>
          {/* Logo & Dark Mode */}
          <div className="flex items-center justify-between bg-white text-gray-800 dark:text-white dark:bg-gray-900 px-2 py-2">
            <NavLink to="/">
              <h2 className="text-2xl font-bold cursor-pointer">
                Service Sharing
              </h2>
            </NavLink>
            <ModeToggle />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col space-y-4 ">
            <NavLink
              to="/"
              
            >
              <div className="flex items-center space-x-2 pt-5">
                <MdHome size={20} />
                <span>Home</span>
              </div>
            </NavLink>

            <NavLink
              to="/dashboard/addService"
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "hover:text-blue-900"
              }
            >
              <div className="flex items-center space-x-2">
                <MdAddCircleOutline size={20} />
                <span>Add Service</span>
              </div>
            </NavLink>

            <NavLink
              to="/dashboard/manageServices"
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "hover:text-blue-900"
              }
            >
              <div className="flex items-center space-x-2">
                <MdManageAccounts size={20} />
                <span>Manage Services</span>
              </div>
            </NavLink>

            <NavLink
              to="/dashboard/serviceBooked"
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "hover:text-blue-900"
              }
            >
              <div className="flex items-center space-x-2">
                <MdBookOnline size={20} />
                <span>Service Booked</span>
              </div>
            </NavLink>

            <NavLink
              to="/dashboard/todoService"
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "hover:text-blue-900"
              }
            >
              <div className="flex items-center space-x-2">
                <MdChecklist size={20} />
                <span>Todo Service</span>
              </div>
            </NavLink>

            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-blue-700" : "hover:text-blue-900"
              }
            >
              <div className="flex items-center space-x-2">
                <MdOutlineQueryStats size={20} />
                <span>Statistics</span>
              </div>
            </NavLink>
          </nav>
        </div>

        {/* Logout button */}
        <button
          className="w-full py-2 bg-gray-300 rounded dark:bg-gray-600 transition-colors flex items-center justify-center space-x-2"
          onClick={() => {
            navigate('/')
          }}
        >
          <MdLogout size={20} />
          <SignOut />
        </button>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Top Navbar for mobile */}
        <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex items-center md:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle sidebar"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {sidebarOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <h1 className="ml-4 text-xl font-semibold text-black dark:text-white">
            Dashboard
          </h1>
        </header>

        <main className="overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
