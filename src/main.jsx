import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes';
import AuthProviders from './Providers/AuthProviders';

import { ToastContainer } from 'react-toastify';








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
    <ToastContainer
position="top-center"
autoClose={5006}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
      <RouterProvider router={router} />
      </AuthProviders>
  </React.StrictMode>,
)
