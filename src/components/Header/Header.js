import React from 'react';
import logo from '../../image/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
            <h1 id='header-name'>Smart-Shop</h1>

            <div>
                <a href="">Shop</a>
                <a href="">Order</a>
                <a href="">About</a>
                <a href="">Contract</a>
            </div>
        </nav>

    );
};

export default Header;