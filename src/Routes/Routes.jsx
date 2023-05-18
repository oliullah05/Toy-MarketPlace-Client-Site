import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AccountLayout from "../Layouts/AccountLayout";
import LogIn from "../Pages/Account/LogIn";
import Register from "../Pages/Account/Register";




    
  const router = createBrowserRouter([
        {
          path: "/",
          element:<Main></Main>,
          children:[
            {
              path:"/",
              element:<Home></Home>   
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