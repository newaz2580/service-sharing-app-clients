import React, { useState } from "react";
import { Outlet, NavLink, useNavigate, Link } from "react-router";
import {
  MdLogout,
  MdManageAccounts,
  MdBookOnline,
  MdAddCircleOutline,
  MdChecklist,
  MdOutlineQueryStats,
  MdHome,
  MdMenu,
  MdClose,
  MdDashboard,
} from "react-icons/md";
import SignOut from "../Pages/SignOut/SignOut";
import ModeToggle from "../Pages/ModeToggle/ModeToggle";

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { to: "/", icon: MdHome, label: "Home" },
    { to: "/dashboard", icon: MdDashboard, label: "Overview" },
    { to: "/dashboard/addService", icon: MdAddCircleOutline, label: "Add Service" },
    { to: "/dashboard/manageServices", icon: MdManageAccounts, label: "Manage Services" },
    { to: "/dashboard/serviceBooked", icon: MdBookOnline, label: "Service Booked" },
    { to: "/dashboard/todoService", icon: MdChecklist, label: "Todo Service" },
   
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar Backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 w-64 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
          flex flex-col justify-between transform transition-transform duration-300 ease-in-out z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static
          shadow-xl md:shadow-none
        `}
      >
        {/* Sidebar Header */}
        <div>
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <NavLink to="/" onClick={() => setSidebarOpen(false)}>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  ServiceShare
                </h2>
              </div>
            </NavLink>
            
            {/* Close button for mobile */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <MdClose size={20} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center space-x-3 p-3 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 shadow-sm"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white"
                  }`
                }
              >
                <item.icon 
                  size={20} 
                  className="flex-shrink-0 transition-transform group-hover:scale-110" 
                />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <ModeToggle />
          <button
            onClick={() => navigate('/')}
            className="w-full flex items-center justify-center space-x-3 p-3 mt-2 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-600 dark:hover:text-red-400 transition-all duration-200 group"
          >
            <MdLogout size={20} className="transition-transform group-hover:scale-110" />
            <SignOut />
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors md:hidden"
                aria-label="Toggle sidebar"
              >
                <MdMenu size={24} />
              </button>
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                <Link to='/'>Dashboard</Link>
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <ModeToggle />
              </div>
              {/* Add user avatar or profile here if needed */}
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;