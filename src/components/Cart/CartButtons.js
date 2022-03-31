import { library } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
// import SingleProduct from '../SingleProduct/SingleProduct';
import './Cart.css'

const HelperButtons = (props) => {

    var rcv_fun = props.fun;

    var cart = props.data;

    var min = 0;
    var max = cart.length;


    function choseRandom(min, max) {
        var rand = parseInt(Math.random() * (max - min) + min);
        cart = cart[rand];

        var updateKey = 'ran';
        rcv_fun(cart, updateKey);
    }

    function choseAgain() {
        var updateKey = 'chose_again';
        rcv_fun(cart, updateKey);
    }


    return (
        <div className='hand'>
            <button className='btn1' onClick={() => choseRandom(min, max)}>CHOSE 1 FOR ME</button>
            <button className='btn2' onClick={choseAgain}>CHOSE AGAIN </button>
        </div >
    );
};

export default HelperButtons;