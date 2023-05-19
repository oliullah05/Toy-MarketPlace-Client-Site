import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Products = () => {

const one =()=>{
    console.log("one");
}

    const [tabIndex, setTabIndex] = useState(0);
    return (
        <Tabs className="my-9 container mx-auto" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab onClick={one}>Title 1</Tab>
          <Tab>Title 2</Tab>
          <Tab>Title 3</Tab>
        </TabList>





        <TabPanel>   
            
            
<section className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a>
        <img className="p-8 rounded-t-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9p4D0FJAk7NDLAh8EE8wtsP8YX1-JFE-jBQ&usqp=CAU" alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a >
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Classic Cruiser</h5>
        </a>
    

<div className='flex items-center'>
    
    
    <Rating
 className='my-5'
      style={{ maxWidth: 100 }}
      value={5}
      readOnly
    />



<p className="ml-2 text-xl font-bold text-gray-900 dark:text-white ">4.95</p>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">73 reviews</a>
    
    </div>
 


        <div className="flex items-center justify-between pt-5">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <Link  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</Link>
        </div>
    </div>
</section>

   </TabPanel>












        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
  
    );
};

export default Products;