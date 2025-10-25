import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUP from "../Pages/SignUP/SignUP";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import AddService from "../Pages/Add Service/AddService";
import Loading from "../Pages/Loading/Loading";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import AllServices from "../Pages/AllServices/AllServices";
import ManageServices from "../Pages/ManageService/ManageServices";
import Update from "../Pages/Update/Update";
import ServiceBooked from "../Pages/ServiceBooked/ServiceBooked";
import TodoService from "../Pages/TodoService/TodoService";
import Contact from "../Pages/Contact/Contact";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHome from "../Dashboard/DashboardHome";
import About from "../Components/About/About";
import { toast } from "react-toastify";

// ✅ Common safe fetch helper
const safeFetch = async (url) => {
  try {
    const resp = await fetch(url, { credentials: "include" });

    if (!resp.ok) {
      console.error("❌ Response not OK:", resp.status);
      throw new Error(`Server error: ${resp.status}`);
    }

    const contentType = resp.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response is not JSON. Possibly HTML returned.");
    }

    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("❌ Loader Fetch Error:", error);
    toast.error("Failed to load data. Please try again later.");
    return null;
  }
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => await safeFetch("https://service-sharing-app-server.onrender.com/service"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUP />,
      },
      {
        path: "/allServices",
        element: <AllServices />,
        loader: async () => await safeFetch("https://service-sharing-app-server.onrender.com/service"),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoutes>
            <AddService />
          </PrivateRoutes>
        ),
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails />
          </PrivateRoutes>
        ),
        loader: async ({ params }) =>
          await safeFetch(`https://service-sharing-app-server.onrender.com/service/${params.id}`),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/manageServices",
        element: (
          <PrivateRoutes>
            <ManageServices />
          </PrivateRoutes>
        ),
      },
      {
        path: "update/:id",
        loader: async ({ params }) =>
          await safeFetch(`https://service-sharing-app-server.onrender.com/service/${params.id}`),
        element: (
          <PrivateRoutes>
            <Update />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/serviceBooked",
        loader: async () =>
          await safeFetch("https://service-sharing-app-server.onrender.com/my-bookings"),
        element: (
          <PrivateRoutes>
            <ServiceBooked />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/todoService",
        loader: async () =>
          await safeFetch("https://service-sharing-app-server.onrender.com/my-purchaseService"),
        element: (
          <PrivateRoutes>
            <TodoService />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },

  // ✅ Dashboard Layout Routes
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "addService",
        element: (
          <PrivateRoutes>
            <AddService />
          </PrivateRoutes>
        ),
      },
      {
        path: "manageServices",
        element: (
          <PrivateRoutes>
            <ManageServices />
          </PrivateRoutes>
        ),
      },
      {
        path: "serviceBooked",
        loader: async () =>
          await safeFetch("https://service-sharing-app-server.onrender.com/my-bookings"),
        element: (
          <PrivateRoutes>
            <ServiceBooked />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "todoService",
        loader: async () =>
          await safeFetch("https://service-sharing-app-server.onrender.com/my-purchaseService"),
        element: (
          <PrivateRoutes>
            <TodoService />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "update/:id",
        loader: async ({ params }) =>
          await safeFetch(`https://service-sharing-app-server.onrender.com/service/${params.id}`),
        element: (
          <PrivateRoutes>
            <Update />
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading />,
      },
    ],
  },
]);
