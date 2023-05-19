import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AccountLayout from "../Layouts/AccountLayout";
import LogIn from "../Pages/Account/LogIn";
import Register from "../Pages/Account/Register";
import AllToy from "../Pages/AllToy/AllToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";
import AddAToy from "../Pages/AddAToy/AddAToy";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";




    
  const router = createBrowserRouter([
        {
          path: "/",
          element:<Main></Main>,
          children:[
            {
              path:"/",
              element:<Home></Home>   
            },
            {
              path:"/alltoy",
              element:<PrivateRoute><AllToy></AllToy></PrivateRoute>   
            },
            {
              path:"/mytoys",
              element:<PrivateRoute><MyToys></MyToys></PrivateRoute>   
            },
            {
              path:"/addtoy",
              element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>   
            },
            {
              path:"/update/:id",
              element:<PrivateRoute> <UpdateToy></UpdateToy>  </PrivateRoute>   
            }
          ]
        },
       {
        path:"/account",
        element:<AccountLayout></AccountLayout>,
        children:[
          {
            path:"/account/login",
            element:<LogIn></LogIn>
          },
          {
            path:"/account/register",
            element:<Register></Register>
          }
        ]
       }
      ]);


export default router;