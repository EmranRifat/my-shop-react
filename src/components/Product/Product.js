import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css'
import { library } from '@fortawesome/fontawesome-svg-core';

const Product = (props) => {
    const { handleCart, product } = props;
    const { id, image, price, name } = props.product;



    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className='product-info'>
                <p className='product-name'>Name :{name}</p>
                <p>Price :{price}$ </p>
                <p><small>Product id:{id}</small></p>
            </div>

            <button onClick={() => handleCart(product)} className='btn-cart'>
                <p className='icon'> Add to Cart</p><FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>

        </div>




    );


};

export default Product;