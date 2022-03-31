import React from 'react';
import './Single-Product.css'

const SingleProduct = ({ product }) => {
    // console.log(product);
    return (
        <div className='single-product'>
            <img src={product.image} alt="" />
            <h5>{product.name}</h5>

        </div>

    );
};

export default SingleProduct;