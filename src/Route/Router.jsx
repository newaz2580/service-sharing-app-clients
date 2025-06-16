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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async ({ props }) => {
          try {
            // console.log(props);
            const resp = await fetch(
              `http://localhost:3000/service`,
              { credentials: "include" }
            );
            if (resp.status != 200) {
              window.location.href = "/login";
              return;
            }
            const json = await resp.json();
            // console.log({ json });
            return json;
          } catch (error) {
            console.log("Err");
            console.log(error);
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
          fetch("http://localhost:3000/service"),
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
            `http://localhost:3000/service/${params.id}`,
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
            `http://localhost:3000/service/${params.id}`,
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
            "http://localhost:3000/purchaseService",
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
            "http://localhost:3000/purchaseService"
          ),
        element: (
          <PrivateRoutes>
            <TodoService></TodoService>
          </PrivateRoutes>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
]);
