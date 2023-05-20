import React from 'react';

const MyToy = ({myToy,index}) => {
    const {_id,toy_name,toy_img,price,category,quantity,rating,review,description,user_name,user_email,user_img}=myToy;
    return (
        <tbody>
        <tr className="bg-white border-b text-center dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="w-4 p-4">
                #{index+1}
            </td>
            <th scope="row" className="flex items-center justify-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src={user_img} alt="Jese image" />
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
                <p title='Delete'>
                    <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" >
                        <path d="M3 6L5 6 21 6" />
                        <path d="M18 6L18 4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2L8 2C7.46957 2 6.96086 2.21071 6.58579 2.58579C6.21071 2.96086 6 3.46957 6 4L6 6L18 6Z" />
                        <path d="M18 6L18 19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21L8 21C7.46957 21 6.96086 20.7893 6.58579 20.4142C6.21071 20.0391 6 19.5304 6 19L6 6" />
                        <path d="M9 6L9 19" />
                        <path d="M15 6L15 19" />
                    </svg>
                </p>

                <p title='Edit'>   <svg className='w-7 h-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" >
                    <path d="M16.364 3.636a2 2 0 0 1 2.828 0l1.172 1.172a2 2 0 0 1 0 2.828L9.172 20H4v-5.172L16.364 3.636zM18 8l-1 1L7 19H6v-1l9-9 1-1h2v2z"></path>
                </svg></p>

            </td>



        </tr>


    </tbody>
    );
};

export default MyToy;