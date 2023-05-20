import React, { useContext, useEffect, useState } from 'react';
import MyToy from './MyToy';
import { authContext } from '../../Providers/AuthProviders';

const MyToys = () => {
const {user}=useContext(authContext)

const [myToys,setMyToys]=useState([])
// console.log("mytoys",myToys);


const [toggle ,setToggle]=useState(true)


useEffect(()=>{
    fetch(`http://localhost:5000/alltoys/${user?.email}`,{
        method:"GET"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log("data",data);
        setMyToys(data);
    })
},[toggle])





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
                        <th scope="col" className="px-6 py-3 text-xl  text-blue-500">
                            Seller information
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl  text-blue-500">
                            Toy Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl  text-blue-500">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl  text-blue-500">
                            Available Quantity
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl  text-blue-500">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3 text-xl  text-blue-500">
                            Action
                        </th>

                    </tr>
                </thead>
              {
                myToys.map((myToy,index)=><MyToy toggle={toggle} setToggle={setToggle} myToy={myToy} index={index} key={myToy._id}></MyToy>)
              } 
            </table>
        </div>
    );
};

export default MyToys;