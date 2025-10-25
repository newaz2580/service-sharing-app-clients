import React, { useContext, useEffect, useState } from "react";
import { FaTools, FaClipboardList, FaCheckCircle } from "react-icons/fa";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  const [totalServices, setTotalServices] = useState(0);
  const [bookedServices, setBookedServices] = useState(0);
  const [pendingTodos, setPendingTodos] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const servicesRes = await axios.get(
          "https://service-sharing-app-server.onrender.com/service",
          { withCredentials: true }
        );
        setTotalServices(servicesRes.data.length);

        const bookingsRes = await axios.get(
          "https://service-sharing-app-server.onrender.com/my-bookings",
          { withCredentials: true }
        );
        setBookedServices(bookingsRes.data.length);

        const todosRes = await axios.get(
          "https://service-sharing-app-server.onrender.com/my-purchaseService",
          { withCredentials: true }
        );
        setPendingTodos(todosRes.data.length);
      } catch (error) {
        console.error("Error loading dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  const chartData = [
    { month: "Jan", booked: 2 },
    { month: "Feb", booked: 4 },
    { month: "Mar", booked: 3 },
    { month: "Apr", booked: 5 },
    { month: "May", booked: 6 },
  ];

  return (
    <div className="px-6 pt-6 space-y-6">
      {/* Welcome Card */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-bold">👋 Welcome back, {user?.displayName}!</h1>
        <p className="mt-2 text-lg">Here’s what’s happening with your services today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center gap-4 transform hover:scale-105 transition-transform duration-300">
          <FaTools className="text-5xl text-indigo-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Total Services</h2>
            <p className="text-3xl font-bold text-gray-800 dark:text-white">{totalServices}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center gap-4 transform hover:scale-105 transition-transform duration-300">
          <FaClipboardList className="text-5xl text-green-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Booked Services</h2>
            <p className="text-3xl font-bold text-gray-800 dark:text-white">{bookedServices}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg flex items-center gap-4 transform hover:scale-105 transition-transform duration-300">
          <FaCheckCircle className="text-5xl text-yellow-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Pending Todos</h2>
            <p className="text-3xl font-bold text-gray-800 dark:text-white">{pendingTodos}</p>
          </div>
        </div>
      </div>

      {/* Chart Card */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">Monthly Bookings</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="booked" stroke="#6366f1" strokeWidth={3} />
            <CartesianGrid stroke="#e0e0e0" strokeDasharray="5 5" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardHome;
