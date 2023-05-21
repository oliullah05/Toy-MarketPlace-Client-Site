import { useState,useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { toast } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
import { authContext } from '../../../Providers/AuthProviders';
const Products = () => {
const {user}=useContext(authContext)

const [tabIndex, setTabIndex] = useState(0);


const [categoryData,setCategoryData]=useState([])
// console.log(categoryData);
const [category ,setCategory]=useState("regular-car")



useEffect(()=>{
    fetch(`https://assignment-11-server-site-oliullah05.vercel.app/category/${category}`)
    .then(res=>res.json())
    .then(result=>{
     setCategoryData(result);
    })
},[category])




const handleConditionalTost =()=>{
    if(!user){
        toast.error('🦄 You have to log in first to view details !', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
       
      }
}
    return (
        <Tabs className="my-9 container mx-auto" selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab onClick={()=>setCategory("regular-car")}>Regular Car</Tab>
 
          <Tab onClick={()=>setCategory("sports-car")}>Sports Car</Tab>
          <Tab onClick={()=>setCategory("remote-car")}>	Remote Car</Tab>
        </TabList>

        



        <TabPanel >   
            
            
<div className='grid grid-cols-1 md:grid-cols-4 gap-3 justify-between'>




{
    categoryData.map(category=>
    <section key={category._id} className="w-full max-w-sm bg-white border border-gray-200   dark:bg-gray-800 dark:border-gray-700 rounded-2xl shadow-lg">
    <a className='flex justify-center items-center'>
        <img className="p-8 rounded-t-lg h-80 w-[100%]" src={category?.toy_img} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a >
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{category?.toy_name}</h5>
        </a>
    {/* _id,toy_name,toy_img,price,category,quantity,rating,review,description,user_name,user_email,user_img */}

<div className='flex items-center'>
    
    
    <Rating
 className='my-5'
      style={{ maxWidth: 100 }}
      value={category?.rating}
      readOnly
    />



<p className="ml-2 text-xl font-bold text-gray-900 dark:text-white ">{category?.rating}</p>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{category?.review} reviews</a>
    
    </div>
 


        <div onClick={handleConditionalTost} className="flex items-center justify-between pt-5">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${category?.price}</span>
            <Link to={`/productdetails/${category?._id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</Link>
        </div>
    </div>
</section>
)
}








</div>

   </TabPanel>






        



        <TabPanel >   
            
            
<div className='grid grid-cols-1 md:grid-cols-4 gap-3 justify-between'>




{
    categoryData.map(category=>
    <section key={category._id} className="w-full max-w-sm bg-white border border-gray-200   dark:bg-gray-800 dark:border-gray-700 rounded-2xl shadow-lg">
    <a className='flex justify-center items-center'>
        <img className="p-8 rounded-t-lg h-80 w-[100%]" src={category?.toy_img} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a >
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{category?.toy_name}</h5>
        </a>
    {/* _id,toy_name,toy_img,price,category,quantity,rating,review,description,user_name,user_email,user_img */}

<div className='flex items-center'>
    
    
    <Rating
 className='my-5'
      style={{ maxWidth: 100 }}
      value={category?.rating}
      readOnly
    />



<p className="ml-2 text-xl font-bold text-gray-900 dark:text-white ">{category?.rating}</p>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{category?.review} reviews</a>
    
    </div>
 


        <div className="flex items-center justify-between pt-5">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${category?.price}</span>
            <Link onClick={handleConditionalTost} to={`/productdetails/${category?._id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</Link>
        </div>
    </div>
</section>
)
}








</div>

   </TabPanel>






        



        <TabPanel >   
            
            
<div className='grid grid-cols-1 md:grid-cols-4 gap-3 justify-between'>




{
    categoryData.map(category=>
    <section key={category._id} className="w-full max-w-sm bg-white border border-gray-200   dark:bg-gray-800 dark:border-gray-700 rounded-2xl shadow-lg">
    <a className='flex justify-center items-center'>
        <img className="p-8 rounded-t-lg h-80 w-[100%]" src={category?.toy_img} alt="product image" />
    </a>
    <div className="px-5 pb-5">
        <a >
            <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{category?.toy_name}</h5>
        </a>
    {/* _id,toy_name,toy_img,price,category,quantity,rating,review,description,user_name,user_email,user_img */}

<div className='flex items-center'>
    
    
    <Rating
 className='my-5'
      style={{ maxWidth: 100 }}
      value={category?.rating}
      readOnly
    />



<p className="ml-2 text-xl font-bold text-gray-900 dark:text-white ">{category?.rating}</p>
    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
    <a className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{category?.review} reviews</a>
    
    </div>
 


        <div className="flex items-center justify-between pt-5">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${category?.price}</span>
            <Link onClick={handleConditionalTost} to={`/productdetails/${category?._id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</Link>
        </div>
    </div>
</section>
)
}








</div>

   </TabPanel>












      </Tabs>
  
    );
};

export default Products;