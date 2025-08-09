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
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import Contact from "../Pages/Contact/Contact";
import DashboardLayout from "../Layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () => {
          try {
            // console.log(props);
            const resp = await fetch(
              `https://service-sharing-server-steel.vercel.app/service`,
              { credentials: "include" }
            );
            if (resp.status != 200) {
              window.location.href = "/login";
              return;
            }
            const json = await resp.json();
          
            return json;
          } catch (error) {
            toast.error(error);
          }
        },
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        element: <SignUP></SignUP>,
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,
        loader: () =>
          fetch("https://service-sharing-server-steel.vercel.app/service"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/addService",
        element: <PrivateRoutes><AddService></AddService></PrivateRoutes>,
      },
      {
        path: "/serviceDetails/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails></ServiceDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://service-sharing-server-steel.vercel.app/service/${params.id}`,
            { credentials: "include" }
          ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/manageServices",
        element: (
          <PrivateRoutes>
            <ManageServices></ManageServices>
          </PrivateRoutes>
        ),
        
      },
      {
        path: "update/:id",
        loader: ({ params }) =>
          fetch(
            `https://service-sharing-server-steel.vercel.app/service/${params.id}`,
            { credentials: "include" }
          ),
        element: (
          <PrivateRoutes>
            <Update></Update>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/serviceBooked",
        loader: () =>
          fetch(
            "https://service-sharing-server-steel.vercel.app/my-bookings",
            { credentials: "include" }
          ),
        element: (
          <PrivateRoutes>
            <ServiceBooked></ServiceBooked>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/todoService",
        loader: () =>
          fetch(
            "https://service-sharing-server-steel.vercel.app/my-purchaseService",
             { credentials: "include" }

          ),
        element: (
          <PrivateRoutes>
            <TodoService></TodoService>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path:'/contact',
        Component:Contact
      }
    ],
  },
  {
    path:'dashboard',
    element:<DashboardLayout/>,
    children:[
      {
        path:'addService',
        element:<PrivateRoutes><AddService/> </PrivateRoutes>
      },
      {
        path:'manageServices',
        element:<PrivateRoutes><ManageServices/></PrivateRoutes>
      },
      { 
        path: "serviceBooked",
        loader: () =>
          fetch(
            "https://service-sharing-server-steel.vercel.app/my-bookings",
            { credentials: "include" }
          ),
        element: (
          <PrivateRoutes>
            <ServiceBooked></ServiceBooked>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "todoService",
        loader: () =>
          fetch(
            "https://service-sharing-server-steel.vercel.app/my-purchaseService",
             { credentials: "include" }

          ),
        element: (
          <PrivateRoutes>
            <TodoService></TodoService>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
        {
        path: "update/:id",
        loader: ({ params }) =>
          fetch(
            `https://service-sharing-server-steel.vercel.app/service/${params.id}`,
            { credentials: "include" }
          ),
        element: (
          <PrivateRoutes>
            <Update></Update>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ]
  }
]);
