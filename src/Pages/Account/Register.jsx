import React, { useContext, useState } from 'react';
import { Link} from 'react-router-dom';
import { FaGithub, FaGoogle } from "react-icons/fa";

import { authContext } from '../../Providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
 








    const { logInUser, updateUserData,logInByGoogle} = useContext(authContext);


  const handleRegister = (e) => {
    // toast("Wow so easy!")
    // e.preventDefault();
    e.preventDefault()

    
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
if(password<6){
 return  toast.error(`Password Must Be 6 Character Long`, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    });
}

    logInUser(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      
      toast.success('🦄 User succeccfully created', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
        updateUserData(name,photoUrl)
        .then(() => {
       

          // ...
        }).catch((error) => {
          toast.error(`${error.message}`, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        });
    
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // setError(errorMessage);
      toast.error(`${errorMessage}`, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      // ..
    });
   

   
}

const handleGoogleLogIn =()=>{
  logInByGoogle()
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // The signed-in user info.
    console.log(result);
    toast.success('🦄 User Succeccfully Logged In', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    
    // ...
  }).catch((error) => {
console.log(error);
  });







}


    return (
        <div  className="py-6 lg:py-24">
          <ToastContainer />
        <div className="bg-white rounded-lg shadow-lg mx-auto max-w-sm lg:max-w-xl">
          <form onSubmit={handleRegister} className="w-full p-8">
            <h1 className="text-2xl text-purple-900 text-center">Please Register!</h1>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
              <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" name="name" />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
              <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="url" name="photoUrl" />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" name="email" required />
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" name="password" required />
            </div>
            <div className="mt-8">
              
              <input className='text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400' type="submit" value="Register" />
            </div>

            {/* <div className='mt-4'>
                        {
                            error ? <p className="text-sm text-center text-red-600">
                                {error}
                            </p> :
                                <p className="text-sm text-center text-green-500">
                                    {success}
                                </p>
                        }
                    </div> */}


            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <p className="text-sm text-center text-gray-500">Already have an account? <Link to={"/account/login"} className="underline">Login</Link></p>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          
          </form>
          <div className="flex flex-col lg:flex-row -mt-7 gap-3 pb-8">
              <button onClick={handleGoogleLogIn} className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-md bg-blue-500">
                <FaGoogle className="text-white" />
                <span className="py-3 text-center text-white font-bold">Google</span>
              </button>
              <button className="flex gap-2 items-center w-full justify-center mt-4 text-white rounded-lg shadow-md bg-gray-900">
                <FaGithub className="text-white" />
                <span className="py-3 text-center text-white font-bold">Github</span>
              </button>
            </div>
        </div>
      </div>
      
    );
};

export default Register;