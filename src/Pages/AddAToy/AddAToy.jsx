import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { authContext } from "../../Providers/AuthProviders";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
// const Swal = require('sweetalert2')

const AddAToy = () => {
  document.title="Matico | Add a Toy"
 
const {user}= useContext(authContext)


// console.log(user.photoURL);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{ 
    data.user_img=`${user.photoURL}`
    console.log(data)
  
  
    fetch(`https://assignment-11-server-site-oliullah05.vercel.app/alltoys`,{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Product Added Successfully',
          showConfirmButton: false,
          timer: 700
        })
      }
    })
  
  
  
  };




 








  return (
    <form className="h-[80vh] container mx-auto  border-lime-500 border-8" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {/* <input  defaultValue="test" {...register("example")} /> */}






      <section className="flex my-5">

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
            Toy Name
          </label>
          <input {...register("toy_name")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />

        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
            Picture URL
          </label>
          <input {...register("toy_img")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />

        </div>
      </section>


      <section className="flex my-5">

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
            Category
          </label>
          <select className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" {...register("category")}>
        <option value="regular-car">regular-car</option>
        <option value="sports-car">sports-car</option>
        <option value="remote-car">remote-car</option>
      </select>

        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
            Price
          </label>
          <input {...register("price")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />

        </div>
      </section>




      <section className="flex my-5">

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
            Rating
          </label>
          <input {...register("rating")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />

        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
            Available quantity
          </label>
          <input {...register("quantity")} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"  />

        </div>
      </section>


      <section className="flex my-5">

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block text-2xl uppercase tracking-wide text-gray-700  font-bold mb-2" >
           Seller Name
          </label>
          <input {...register("user_name")} value={user?.displayName} className="appearance-none block w-full bg-gray-100 text-gray-700 border border-purple-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />

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


  <input type="submit" className="text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 py-8 text-center text-white block w-full"  value="Add a product" />




    </form>
  );
};

export default AddAToy;