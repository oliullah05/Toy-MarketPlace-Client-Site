import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleToyTable from './SingleToyTable';

const AllToy = () => {
    const data = useLoaderData()
   
    
    return (

        <div className="relative container mx-auto overflow-x-auto shadow-md sm:rounded-lg">
          
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='text-center'>
                        <th scope="col" className="p-4">
                            <div className="flex items-center text-xl  text-blue-500">
                             number
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl text-blue-500">
                        Seller information
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl text-blue-500">
                        Toy Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl text-blue-500">
                        Category
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl text-blue-500">
                        Available Quantity
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl text-blue-500">
                        Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl text-blue-500">
                        View Details button
                        </th>
                       
                    </tr>
                </thead>


{
    data.map((singleData,index)=> <SingleToyTable key={singleData._id} singleData={singleData} index={index}> </SingleToyTable>)
}
              

            </table>
        </div>

    );
};

export default AllToy;