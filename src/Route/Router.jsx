import {
  createBrowserRouter,
} from "react-router";
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

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            element:<Home/>,
            loader:()=>fetch('http://localhost:3000/service'),
            hydrateFallbackElement:<Loading></Loading>

        },
        {
            path:'/login',
            Component:Login
        },
        {
            path:'/signup',
            element:<SignUP></SignUP>
        },
        {
        path:'/allServices',
        element:<AllServices></AllServices>,
        loader:()=>fetch('http://localhost:3000/service'),
        hydrateFallbackElement:<Loading></Loading>
        },
        {
          path:'/addService',
          element:<AddService></AddService>
        },
        {
          path:'/serviceDetail/:id',
          element:<PrivateRoutes><ServiceDetails></ServiceDetails></PrivateRoutes>,
          loader:({params})=>fetch(`http://localhost:3000/service/${params.id}`),
          hydrateFallbackElement:<Loading></Loading>

        },
        {
          path:'/manageServices',
          element:<ManageServices></ManageServices>
        }
    ]
  },
]);