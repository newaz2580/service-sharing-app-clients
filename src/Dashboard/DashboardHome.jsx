import React, { useContext, useEffect, useState } from "react";
import { FaTools, FaClipboardList, FaCheckCircle } from "react-icons/fa";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
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
        // Total Services
        const servicesRes = await axios.get(
          "https://service-sharing-server-steel.vercel.app/service",
          { withCredentials: true }
        );
        setTotalServices(servicesRes.data.length);

        // Booked Services
        const bookingsRes = await axios.get(
          "https://service-sharing-server-steel.vercel.app/my-bookings",
          { withCredentials: true }
        );
        setBookedServices(bookingsRes.data.length);
        
        // Pending Todos
        const todosRes = await axios.get(
          "https://service-sharing-server-steel.vercel.app/my-purchaseService",
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
    <div className="px-5 pt-6 space-y-6">
      {/* Welcome Card */}
      <div className="bg-gray-200 text-gray-700 dark:bg-gray-900 dark:text-white p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold">👋 Welcome back, {user?.displayName}!</h1>
        <p className="mt-1">Here’s what’s happening with your services today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex items-center gap-4">
          <FaTools className="text-4xl text-indigo-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Total Services</h2>
            <p className="text-2xl text-gray-800 dark:text-white">{totalServices}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex items-center gap-4">
          <FaClipboardList className="text-4xl text-green-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Booked Services</h2>
            <p className="text-2xl text-gray-800 dark:text-white">{bookedServices}</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow flex items-center gap-4">
          <FaCheckCircle className="text-4xl text-yellow-500" />
          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white">Pending Todos</h2>
            <p className="text-2xl text-gray-800 dark:text-white">{pendingTodos}</p>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-4">Monthly Bookings</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="booked" stroke="#6366f1" strokeWidth={2} />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="month" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>

   
    </div>
  );
};

export default DashboardHome;
