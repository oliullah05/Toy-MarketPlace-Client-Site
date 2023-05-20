import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const data = useLoaderData()
    const {_id,toy_name,toy_img,price,category,quantity,rating,review,description,user_name,user_email,user_img}=data;
    return (
        <div>
            products details {price}
        </div>
    );
};

export default ProductDetails;