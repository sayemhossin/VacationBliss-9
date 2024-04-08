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
        element:<CardDetails></CardDetails>,
        loader: () => fetch('/data.json')
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>
      }
     
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
