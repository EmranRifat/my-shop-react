import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);
    // console.log(cart);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);


    const handleCart = (product, updateKey) => {
        console.log(updateKey);
        var newCart = [...cart, product];



        if (newCart.length > 4) {
            alert("You cannot select more then 4 items");
        }
        else {
            setCart(newCart);
        }



        if (updateKey === 'ran') {
            setCart([]);
            setCart([product]);

        }
        else if (updateKey === "chose_again") {
            setCart([]);
        }
        else {
            setCart(newCart);
        }



    }



    return (
        <div className="shop-container">


            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleCart={handleCart}

                    ></Product>)

                }

            </div>
            <div className="cart-container">
                <Cart cart={cart} stateUpdateFun={handleCart}> </Cart>
            </div>


        </div>
    );
};

export default Shop;