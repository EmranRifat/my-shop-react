import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './Cart.css'
import HelperButtons from './CartButtons';

const Cart = (props) => {

    var { cart } = props;

    return (
        <div className='cart'>

            <h2>Select Your Best one  </h2>
            <p>Selected items : {cart.length}</p>


            <div>
                {
                    cart.map(product => <SingleProduct

                        product={product}
                    ></SingleProduct>)

                }
            </div>

            <HelperButtons data={cart} fun={props.stateUpdateFun}></HelperButtons>

            {/* <button className='btn1' onClick={() => choseRandom(min, max)}>CHOSE 1 FOR ME</button>
            <button className='btn2'>CHOSE AGAIN </button> */}
        </div >
    );
};

export default Cart;