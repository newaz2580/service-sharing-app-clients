import React, { useState } from "react";
import { Outlet, NavLink } from "react-router";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 min-h-screen md:min-h-screen flex flex-col justify-between
          w-64 bg-gray-700 text-white p-6
          transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:block
          z-40
        `}
      >
        <div>
          <NavLink to="/">
            <h2 className="text-2xl font-bold mb-8 cursor-pointer bg-gray-600">Service Sharing</h2>
          </NavLink>

          <nav className="flex flex-col space-y-4">
            <NavLink
              to="/dashboard/manageServices"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-300"
              }
            >
              Manage Services
            </NavLink>
            <NavLink
              to="/dashboard/serviceBooked"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-300"
              }
            >
              Service Booked
            </NavLink>
            <NavLink
              to="/dashboard/addService"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-300"
              }
            >
              Add Service
            </NavLink>
            <NavLink
              to="/dashboard/todoService"
              className={({ isActive }) =>
                isActive ? "text-yellow-400" : "hover:text-yellow-300"
              }
            >
              Todo Service
            </NavLink>
          </nav>
        </div>

        {/* Logout button at bottom */}
        <button
          onClick={() => {
            // your logout logic here
            console.log("Logout clicked");
          }}
          className="w-full py-2 bg-red-600 rounded hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </aside>

      {/* Overlay behind sidebar when open on small screens */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Top navbar for small screens */}
        <header className="bg-white shadow-md p-4 flex items-center md:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle sidebar"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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
          <h1 className="ml-4 text-xl font-semibold text-black">Service Sharing</h1>
        </header>

        <main className=" overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
