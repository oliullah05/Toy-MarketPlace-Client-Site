import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { authContext } from '../../Providers/AuthProviders.jsx';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateToy = () => {
  document.title="Matico | Update Toy"
const {user}=useContext(authContext)

const datum = useLoaderData()
const {_id,toy_name,toy_img,price,category,quantity,rating,review,description,user_name,user_email,user_img}=datum

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data2 =>{ 
    // data.user_img=`${user.photoURL}`
  //   console.log(data)
  // console.log("ID ",_id);
  fetch(`http://localhost:5000/singletoy/${_id}`,{
    method:"PUT",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(data2)
  })
  .then(res=>res.json())
  .then(results=>{
    console.log(results); 
    if(results.modifiedCount==0){
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: "You Did't Change Anything",
        showConfirmButton: false,
        timer: 700
      })
    }
    if(results.modifiedCount>0){
      Swal.fire({
        position: 'top-center',
        icon: 'success',
        title: "Product Updated successfully",
        showConfirmButton: false,
        timer: 700
      })
    }





  })
  
  
  
  
  
  
  
  
  }
  return (
    <form className="h-[80vh] container mx-auto  border-lime-500 border-8" onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
    {/* <input  defaultValue="test" {...register("example")} /> */}






    <section className="flex my-5">

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
          Toy Name
        </label>
        <input {...register("toy_name")} defaultValue={toy_name} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />

      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
          Picture URL
        </label>
        <input {...register("toy_img")} defaultValue={toy_img} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />

      </div>
    </section>


    <section className="flex my-5">

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
          Category
        </label>
        <select className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" {...register("category")} defaultValue={category}>
      <option value="regular-car">regular-car</option>
      <option value="sports-car">sports-car</option>
      <option value="remote-car">remote-car</option>
    </select>

      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
          Price
        </label>
        <input {...register("price")} defaultValue={price} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />

      </div>
    </section>




    <section className="flex my-5">

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
          Rating
        </label>
        <input {...register("rating")} defaultValue={rating} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />

      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
          Available quantity
        </label>
        <input {...register("quantity")} defaultValue={quantity} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />

      </div>
    </section>


    <section className="flex my-5">

      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
         Seller Name
        </label>
        <input {...register("user_name")}  value={user?.displayName} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />

      </div>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
        Seller Email
        </label>
        <input {...register("user_email")} value={user?.email} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />

      </div>
    </section>















    <section>
      <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label className="sr-only">Your comment</label>
          <textarea {...register("details")} id="comment" rows="4" className="w-full px-0 text-sm text-gray-900 bg-white border-1 rounded-lg dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write details description" ></textarea>
        </div>
        
      </div>
    </section>


<input type="submit" className="text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 py-8 text-center text-white block w-full" value="Update a product" />




  </form>
  );
};

export default UpdateToy;