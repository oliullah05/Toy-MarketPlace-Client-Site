import React from 'react';

const Review = () => {
    return (
      
<>
<h1 className='text-4xl container mx-auto rounded-lg text-white  text-center py-9 font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400'>What Our Customar Say</h1>
<div className="grid mb-8 border container mx-auto border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Matico Delivers Excellence: A Customer's Perspective</h3>
            <p className="my-5">Matico surpassed my expectations with their impeccable service and exceptional toy car collection. From the user-friendly website to the prompt delivery, every aspect of my purchase was seamless. The quality and attention to detail in their toy cars left me in awe. Matico is my go-to destination for an unforgettable toy car experience.</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Bonnie Green</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Students of Oxford</div>
            </div>
        </figcaption>    
    </figure>


    
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Unforgettable Toy Car Adventure: A Customer's Journey with Matico</h3>
            <p className="my-4">My adventure with Matico was nothing short of amazing. Their extensive selection of toy cars catered to my every desire, and the smooth purchasing process made it a breeze to bring them into my collection. The quality and craftsmanship of their toy cars surpassed my expectations, transporting me to a world of joy and nostalgia.</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Roberta Casas</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Lead designer at Dropbox</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-bl-lg md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Unmatched Toy Shopping Experience at Matico</h3>
            <p className="my-4">"I am thrilled with my recent purchase from FunToyWorld. Their website offered a vast selection of toys, making it easy to find the perfect one. The toy I received was of exceptional quality, and the attention to detail was impressive. The customer service team was friendly and responsive</p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Software Engineer at Web It</div>
            </div>
        </figcaption>    
    </figure>
    <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Unmatched Toy Shopping Experience at Matico</h3>
            <p className="my-4">Matico exceeded my expectations in every way. Their website was user-friendly, making it effortless to browse and find the ideal toy for my child. The toy I bought arrived promptly and was packaged securely. The quality and durability of the toy were outstanding, ensuring it will withstand hours of playtime. </p>
        </blockquote>
        <figcaption className="flex items-center justify-center space-x-3">
            <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture"/>
            <div className="space-y-0.5 font-medium dark:text-white text-left">
                <div>Joseph McFall</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">CTO at JObs BD</div>
            </div>
        </figcaption>    
    </figure>
</div></>

    );
};

export default Review;