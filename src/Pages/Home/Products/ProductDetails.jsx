import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';

const ProductDetails = () => {
    const navigate = useNavigate()
    const data = useLoaderData()
    const {_id,toy_name,toy_img,price,category,quantity,rating,review,description,user_name,user_email,user_img}=data;
    return (
       
      
        <div className='container mx-auto my-12'>
        <div className="card lg:card-side bg-base-100 shadow-xl border-8">
         <div className='flex justify-center items-center'>
         <figure className=' p-10'><img className='rounded-xl h-[400px]' src={toy_img} alt="Toy Image" /></figure>
            <div className="card-body lg:w-1/2 h-full my-auto">
                <h2 className="card-title font-bold text-4xl text-cyan-500 mb-5">{toy_name}</h2>
                <div className=''>
                <p className='text-md'>{user_name} (Seller)</p>
                <p className='text-md'>{user_email}</p>
                </div>
                <div className='flex gap-2'>
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />
                    <h4 className='font-bold text-xl'>{rating}</h4>
                </div>
                <h4 className='font-bold text-xl'>Review: {review}</h4>
                <h4 className='font-bold text-xl'>Available Quantity: {quantity}</h4>
                <h4 className='font-bold text-xl'>Sub-Category: {category}</h4>
                <h4 className='font-bold text-xl'>Price: ${price}</h4>
                <h4 className='font-bold text-xl'>Description:</h4>
                <p className='font-extralight'>{description}</p>

                <div className="card-actions items-center justify-end mt-8">


    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Add To Cart
  </span>

  
</button>

    <button onClick={() => navigate(-1)} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-xl font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Back To Category
  </span>

  
</button>
  
    


{/* <button className='bg-gradient-to-r px-14 text-white py-3  rounded-lg from-blue-500 via-purple-500 to-pink-400  border-gray-200'>
    Go Back
    </button> */}
{/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-9 py-4 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
    Go Back
    
    
    </button> */}





                </div>
            </div>
         </div>
        </div>
    </div>


    );
};

export default ProductDetails;