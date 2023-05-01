import { createBrowserRouter } from "react-router-dom";
import AllTours from "../AllTours/AllTours";
import ErrorElement from "../DisplayError/ErrorElement";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import LayoutAnother from "../LayoutLoginSignUp/LayoutAnother";
import Login from "../Login/Login";
import SearchPlace from "../Pages/SearchPlace/SearchPlace";
import PaymentList from "../PayList/PaymentList";
import SignUp from "../SignUp/SignUp";
import Place from "../SinglePlaceDetails/Place";
import PrivateRoute from "../PrivateROutes/PrivateRoute";
import AdminDashBoardLayout from "../AdminDashboard/AdminDashBoardLayout";
import AllUsers from "../AdminDashboard/AllUsers/AllUsers";
import PamentData from "../PayList/PamentData";
import AdminRoute from "./AdminRoute";
import AddPlace from "../AdminDashboard/AddPlace";
import EditPlaces from "../AdminDashboard/EditPlaces";
import PaymentSuccess from "../PayList/PaymentSuccess";
import PayMentFail from "../PayList/PayMentFail";

export const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            errorElement: <ErrorElement></ErrorElement>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/searchPlace',
                    element: <SearchPlace></SearchPlace>,
                },
                {
                    path: '/alltours',
                    element: <AllTours></AllTours>
                },

            ]
        },
        {
            path: '/GolobeSecurity',
            element: <LayoutAnother></LayoutAnother>,
            errorElement: <ErrorElement></ErrorElement>,
            children: [
                {
                    path: '/GolobeSecurity/login',
                    element: <Login></Login>
                },
                {
                    path: '/GolobeSecurity/signup',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/GolobeSecurity/tours/:id',
                    element: <PrivateRoute><Place></Place></PrivateRoute>,
                    loader: ({ params }) => fetch(`https://golobe-server.vercel.app/places/${params.id}`)
                },
                {
                    path: '/GolobeSecurity/payment',
                    element: <PaymentList></PaymentList>
                },
                {
                    path: '/GolobeSecurity/payment/success',
                    element: <PaymentSuccess></PaymentSuccess>
                },
                {
                    path: '/GolobeSecurity/payment/fail',
                    element: <PayMentFail></PayMentFail>
                },
                {
                    path: '/GolobeSecurity/golobe_payment/:id',
                    element: <PrivateRoute><PamentData></PamentData></PrivateRoute>,
                    loader: ({ params }) => fetch(`https://golobe-server.vercel.app/bookings/${params.id}`)
                }

            ]
        },
        {
            path: '/adminDashBoard',
            element: <AdminRoute><AdminDashBoardLayout></AdminDashBoardLayout></AdminRoute>,
            errorElement: <ErrorElement></ErrorElement>,
            children: [
                {
                    path: '/adminDashBoard',
                    element: <PrivateRoute><AdminRoute><AllUsers></AllUsers></AdminRoute></PrivateRoute>
                },
                {
                    path: '/adminDashBoard/addPlaces',
                    element: <PrivateRoute><AdminRoute><AddPlace></AddPlace></AdminRoute></PrivateRoute>
                },
                {
                    path: '/adminDashBoard/editPlaces',
                    element: <PrivateRoute><AdminRoute><EditPlaces></EditPlaces></AdminRoute></PrivateRoute>
                },
            ]
        }
    ]
)