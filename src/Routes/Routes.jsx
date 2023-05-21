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
import ProductDetails from "../Pages/Home/Products/ProductDetails";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";




    
  const router = createBrowserRouter([
        {
          path: "/",
          element:<Main></Main>,
          errorElement:<ErrorPage></ErrorPage>,
          children:[
            {
              path:"/",
              element:<Home></Home>   
            },
            {
              path:"/alltoy",
              element:<AllToy></AllToy> ,
              loader:()=>fetch("https://assignment-11-server-site-oliullah05.vercel.app/alltoys")  
            },
            {
              path:"/mytoys",
              element:<PrivateRoute><MyToys></MyToys></PrivateRoute> ,
               
            },
            {
              path:"/addtoy",
              element:<PrivateRoute><AddAToy></AddAToy></PrivateRoute>   
            },
            {
              path:"/update/:id",
              element:<PrivateRoute> <UpdateToy></UpdateToy>  </PrivateRoute>,
              loader:({params})=>fetch(`https://assignment-11-server-site-oliullah05.vercel.app/singletoy/${params.id}`)

            },
            {
              path:"/productdetails/:id",
              element:<PrivateRoute> <ProductDetails></ProductDetails>  </PrivateRoute>,
              loader:({params})=>fetch(`https://assignment-11-server-site-oliullah05.vercel.app/singletoy/${params.id}`)

            },
            {
              path:"/blog",
              element:<Blog></Blog> 
            },
          ]
        },
       {
        path:"/account",
        element:<AccountLayout></AccountLayout>,
        errorElement:<ErrorPage></ErrorPage>,
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