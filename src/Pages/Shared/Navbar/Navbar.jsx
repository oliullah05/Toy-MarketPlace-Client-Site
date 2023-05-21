import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../Assets/logo.png"
import PrivateRoute from '../../../Routes/PrivateRoute';
import { authContext } from '../../../Providers/AuthProviders';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
// dynaic

// const { user, logOut } = useContext(authContext);

// const handleLogOut = () => {
//   logOut();
// };


// dymice.......................................
const {user,logOut}=useContext(authContext)
// console.log(user);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


const handleLogOut = ()=>{
//  console.log("object");
 logOut()
}





// console.log(tittle);












    return (
      <nav className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400  border-gray-200 dark:bg-gray-900">
         <div>
      
    </div>
      <Tooltip id="my-tooltip" place='right'/>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center">
          <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />       
        </NavLink>
        <div className="flex items-center md:order-2">

        <section className='flex justify-center items-center gap-2'>



{
  user ? <button onClick={handleLogOut}  className="relative hidden  md:inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
     Log Out
  </span>
</button>:      <>
      <Link to={`/account/login`} className="relative hidden  md:inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Log In
  </span>
</Link>

<Link to={`/account/register`} className="relative hidden  md:inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span  className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
     Register
  </span>
</Link>
</>
}







    { user &&   <Link
           
          >
            {/* <span className="sr-only">Open user menu</span> */}
           
            {/* logo pic */}

           {user.photoURL ? <img  data-tooltip-id="my-tooltip"  data-tooltip-content={user.displayName} className="w-10 h-10 rounded-full" src={user.photoURL} alt='user photo' />:
                    
           
<div data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} className="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <svg className="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
</div>

}
            
           



          </Link>}
    
        </section>



          {/* Dropdown menu */}
          <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
            {/* <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
            </div> */}
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Dashboard
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Settings
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Earnings
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
                  Sign out
                </NavLink>
              </li>
            </ul>
          </div>
          <button
  type="button"
  onClick={toggleMobileMenu}
  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  aria-controls="mobile-menu-2"
  aria-expanded={isMobileMenuOpen}
>
  <span className="sr-only">Open main menu</span>
  <svg
    className="w-6 h-6"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
      clipRule="evenodd"
    ></path>
  </svg>
</button>
</div>
<div
  className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
    isMobileMenuOpen ? '' : 'hidden'
  }`}
  id="mobile-menu-2"
>
  <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    <li>
     <span >
     <NavLink
        to="/"
        className="block py-2 md:hover:text-blue-700 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500"
        aria-current="page"
        
        // onClick={()=>setTittle("Matico || Home 2")}
      >
        Home
      </NavLink>
     </span>
      
    </li>
    <li>
   
     
     <NavLink
        to="/alltoy"
        className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
       
      >
        All Toys
      </NavLink>
     
   
    </li>



  { user &&  <>
    <li>
     <NavLink
        to="/mytoys"
        className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
      
      >
       My Toys
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/addtoy"
        className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
      
      >
        Add a toy 
      </NavLink>
    </li>
    </>}




























    <li>  
       <NavLink
        to="/blog"
        className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
       
      >
      Blogs
      </NavLink>
    </li>


  {
    user? <li className='md:hidden' onClick={handleLogOut}>  
    <NavLink
     
     className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
    
   >
   Sign Out
   </NavLink>
 </li> :<div className='md:hidden'>
    <li>  
        <NavLink
         to="/account/login"
         className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        
       >
       Log In
       </NavLink>
     </li>
 
 
 
     <li>  
        <NavLink
         to="/account/register"
         className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        
       >
       Register
       </NavLink>
     </li></div>
 
    
 
  }







  </ul>
</div>
</div>
</nav>
    );
};

export default Navbar;
