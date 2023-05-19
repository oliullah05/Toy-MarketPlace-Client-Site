import React from 'react';

const AllToy = () => {
    return (

        <div className="relative container mx-auto overflow-x-auto shadow-md sm:rounded-lg">
          
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr className='text-center'>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                             number
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Seller information
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Toy Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Available Quantity
                        </th>
                        <th scope="col" className="px-6 py-3">
                        Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                        View Details button
                        </th>
                       
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td className="w-4 p-4">
                           #1
                        </td>
                        <th scope="row" className="flex items-center justify-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese image" />
                            <div className="pl-3">
                                <div className="text-base font-semibold">Neil Sims</div>
                                <div className="font-normal text-gray-500">neil.sims@flowbite.com</div>
                            </div>
                        </th>
                        <td className="px-6 py-4">
                            React Developer
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> Online
                            </div>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit user</a>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">100</a>
                        </td>
                        <td className="px-6 py-4">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View details</a>
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>

    );
};

export default AllToy;