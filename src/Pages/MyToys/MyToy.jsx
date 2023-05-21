import React, { useContext } from 'react';
// import authContext from "../../Providers/AuthProviders.jsx"
import { authContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const MyToy = ({myToy,index,setToggle,toggle}) => {
const {user} =useContext(authContext)
console.log(user);

    const {_id,toy_name,toy_img,price,category,quantity,rating,review,description,user_name,user_email,user_img}=myToy;



    const handleDelete=(id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {


            if (result.isConfirmed) {
                  fetch(`https://assignment-11-server-site-oliullah05.vercel.app/alltoys/${id}`,{
                  method:"DELETE"
       })
       .then(res=>res.json())
       .then(results=>{
        if(results.deletedCount>0){
            setToggle(!toggle)
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Product Delete successfully',
                showConfirmButton: false,
                timer: 700
              })
        }
      
       })


            }
          })

  
  
    }










  
    return (
        <tbody>
        <tr className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
                #{index+1}
            </td>
            <th scope="row" className="flex items-center justify-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">

{user.photoURL?
<img className="w-10 h-10 rounded-full" src={user_img} alt="Jese image" />:


<div className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
</div>}



                <div className="pl-3">
                    <div className="text-base text-black font-semibold">{user_name}</div>
                    <div className="font-normal text-gray-500">{user_email}</div>
                </div>
            </th>
            <td className="px-6 py-4 text-black font-semibold">
               {toy_name}
            </td>
            <td className="px-6 py-4 text-black font-semibold">
                <div className="flex items-center">
                   {category}
                </div>
            </td>
            <td className="px-6 py-4 text-black font-semibold">
                <a className="font-medium ">{quantity}</a>
            </td>
            <td className="px-6 py-4 text-black font-semibold">
                <a  className="font-medium ">{price}</a>
            </td>



            <td className="px-6 py-4 text-black font-semibold flex gap-5 justify-center items-center">
                {/* <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit delete</a> */}
                <p onClick={()=>handleDelete(_id)} title='Delete'>
                    <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" >
                        <path d="M3 6L5 6 21 6" />
                        <path d="M18 6L18 4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2L8 2C7.46957 2 6.96086 2.21071 6.58579 2.58579C6.21071 2.96086 6 3.46957 6 4L6 6L18 6Z" />
                        <path d="M18 6L18 19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21L8 21C7.46957 21 6.96086 20.7893 6.58579 20.4142C6.21071 20.0391 6 19.5304 6 19L6 6" />
                        <path d="M9 6L9 19" />
                        <path d="M15 6L15 19" />
                    </svg>
                </p>

                <Link to={`/update/${_id}`} title='Edit' >   <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" >
                    <path d="M16.364 3.636a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L9.172 20H4v-5.172L16.364 3.636zM18 8l-1 1L7 19H6v-1l9-9 1-1h2v2z"></path>
                </svg></Link>

            </td>



        </tr>


    </tbody>
    );
};

export default MyToy;