import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile';
import CardDetails from './Pages/CardDetails/CardDetails';
import ErrorPage from './Pages/Error/ErrorPage';
import Login from './Pages/Login/Login';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ContactUs from './Pages/ContactUs/ContactUs';
import About from './Pages/About/About';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data.json')
      },
      {
        path:'/details/:id',
        element:<PrivateRoute><CardDetails></CardDetails></PrivateRoute>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/updateProfile',
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/contact',
        element:<PrivateRoute><ContactUs></ContactUs></PrivateRoute>
      },
      {
       path:'/about',
       element:<About></About>
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
