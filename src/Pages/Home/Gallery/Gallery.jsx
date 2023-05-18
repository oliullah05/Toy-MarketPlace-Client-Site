import React from 'react';

import gallery1 from "../../../Assets/childs photo/1.jpg"
import gallery2 from "../../../Assets/childs photo/2.jpg"
import gallery3 from "../../../Assets/childs photo/3.jpg"
import gallery4 from "../../../Assets/childs photo/4.jpg"
import gallery5 from "../../../Assets/childs photo/5.jpg"
import gallery6 from "../../../Assets/childs photo/6.jpg"
import gallery7 from "../../../Assets/childs photo/7.jpg"
import gallery8 from "../../../Assets/childs photo/8.jpg"







const Gallery = () => {
    return (
       <section className='my-12'>
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <h1 className="text-4xl w-full container text-center font-bold text-white  py-6 px-4 rounded-lg  bg-gradient-to-r from-blue-500 via-purple-500 to-pink-200">
      Race and Roll:  Endless Adventures <br /> with Car Toys
    </h1>
        {/* <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All categories
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Sports Car
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
         Mini Fire Truck
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
         Robot Car
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Remote Car
        </button> */}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 container mx-auto">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={gallery1}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={gallery2}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={gallery3}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={gallery4}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={gallery5}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src={gallery6}
          />
        </div>
        {/* Add the remaining image elements here */}
      </div></section>
    );
};

export default Gallery;