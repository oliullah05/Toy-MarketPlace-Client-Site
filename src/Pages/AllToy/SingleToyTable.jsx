import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../Providers/AuthProviders';
import { toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';

const SingleToyTable = ({singleData,index}) => {
    const {user}=useContext(authContext)
const navigate=useNavigate()
const {_id,toy_name,toy_img,price,category,quantity,rating,review,description,user_name,user_email,user_img}=singleData;


// const notify = () => ;
const logInAlert =()=>{
  if(!user){
    toast.error('🦄You have to log in first to view details!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
   
  }
  
    
}
    return (
        <tbody>
       
           {/* <button onClick={notify}>Notify!</button> */}
        <tr className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
               #{index+1}
            </td>
            <th scope="row" className="flex items-center justify-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">

               {user_img ? <img className="w-10 h-10 rounded-full" src={user_img} alt="Jese image" />:
<div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>
}


                <div className="pl-3 ">
                    <div className="text-base font-semibold">{user_name}</div>
                    <div className="font-normal">{user_email}</div>
                </div>
            </th>
            <td className="px-6 py-4 text-black font-semibold">
                {toy_name}
            </td>
            <td className="px-6 py-4 text-black font-semibold">
                <div className="flex items-center text-black">
              {category}
                </div>
            </td>
            <td className="px-6 py-4 text-black font-semibold">
                <a href="" className="font-medium  dark:text-blue-500 ">{quantity}</a>
            </td>
            <td className="px-6 py-4 text-black font-semibold">
                <a href="" className=" text-black font-semibold dark:text-blue-500 ">$ {price}</a>
            </td>
            <th >
                <Link onClick={logInAlert} to={`/productdetails/${_id}`} className="text-sm text-blue-500 px-6 py-4 font-semibold dark:text-blue-500 hover:underline">View details</Link>
            </th>
        </tr>
    </tbody>
    );
};

export default SingleToyTable;